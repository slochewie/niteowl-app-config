import { appDefinitions, appDefinitionsById } from "./apps.ts";
import type {
  AccessRequirement,
  AppDefinition,
  AppPageDefinition,
  NiteOwlAppId,
  NiteOwlIconId,
} from "./types.ts";

export type AppUrlMap = Record<NiteOwlAppId, string>;

export type NavigationItemConfig = {
  id: string;
  label: string;
  href: string;
  icon: NiteOwlIconId;
  active?: boolean;
  external?: boolean;
};

export type NavigationSectionConfig = {
  id: string;
  label?: string;
  items: NavigationItemConfig[];
};

export type NavigationConfig = {
  primary: NavigationSectionConfig[];
  apps: NavigationSectionConfig[];
  settings: NavigationSectionConfig[];
};

export type BuildNavigationOptions = {
  currentApp: NiteOwlAppId;
  currentPath: string;
  urls: AppUrlMap;
  canAccess?: (requirement: AccessRequirement) => boolean;
  settings?: NavigationItemConfig[];
};

function isAllowed(
  definition: AppDefinition | AppPageDefinition,
  canAccess?: (requirement: AccessRequirement) => boolean,
) {
  if (!definition.access) return true;
  return canAccess?.(definition.access) ?? false;
}

export function buildNavigation({
  currentApp,
  currentPath,
  urls,
  canAccess,
  settings = [],
}: BuildNavigationOptions): NavigationConfig {
  const activeApp = appDefinitionsById[currentApp];

  const primaryItems = activeApp.pages
    .filter((page) => isAllowed(page, canAccess))
    .map((page) => ({
      id: page.id,
      label: page.label,
      href: page.path,
      icon: page.icon,
      active: currentPath === page.path,
    }));

  const orderedApps = activeApp.appOrder?.map((id) => appDefinitionsById[id]) ?? appDefinitions;

  const appItems = orderedApps
    .filter((app) => app.id !== currentApp)
    .filter((app) => isAllowed(app, canAccess))
    .map((app) => ({
      id: app.id,
      label: app.label,
      href: urls[app.urlKey],
      icon: app.icon,
      external: true,
    }));

  return {
    primary: [
      {
        id: currentApp,
        label: activeApp.label,
        items: primaryItems,
      },
    ],
    apps: [
      {
        id: "apps",
        label: "Apps",
        items: appItems,
      },
    ],
    settings: [
      {
        id: "settings",
        label: "Settings",
        items: settings,
      },
    ],
  };
}
