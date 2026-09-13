import type { AppDefinition } from "./types.ts";

export const appDefinitions: AppDefinition[] = [
  {
    id: "console",
    label: "Console",
    icon: "square-terminal",
    urlKey: "console",
    pages: [],
  },
  {
    id: "tip-calculator",
    label: "Tip Calculator",
    icon: "hand-coins",
    urlKey: "tip-calculator",
    pages: [
      { id: "claims", label: "Claims", path: "/claims", icon: "landmark" },
      { id: "tips", label: "Tips", path: "/tips", icon: "hand-coins" },
      {
        id: "weight-presets",
        label: "Weight Presets",
        path: "/weight-presets",
        icon: "scale",
      },
      {
        id: "seven-shifts",
        label: "7Shifts Schedule",
        path: "/seven-shifts",
        icon: "seven-shifts",
        access: { key: "tip-calculator:seven-shifts-navigation" },
      },
      { id: "reports", label: "Reports", path: "/reports", icon: "scroll-text" },
      {
        id: "assignments",
        label: "Assignments",
        path: "/assignments",
        icon: "users",
      },
    ],
  },
  {
    id: "counter",
    label: "Counter",
    icon: "gauge",
    urlKey: "counter",
    pages: [
      { id: "counter", label: "Counter", path: "/", icon: "gauge" },
      {
        id: "assignments",
        label: "Assignments",
        path: "/assignments",
        icon: "users",
        access: { key: "counter:manage-assignments" },
      },
    ],
  },
  {
    id: "network-status",
    label: "Network Status",
    icon: "network",
    urlKey: "network-status",
    pages: [],
  },
];

export const appDefinitionsById = Object.fromEntries(
  appDefinitions.map((app) => [app.id, app]),
) as Record<AppDefinition["id"], AppDefinition>;
