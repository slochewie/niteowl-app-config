import type { AppDefinition } from "./types.ts";

export const appDefinitions: AppDefinition[] = [
  {
    id: "console",
    label: "Console",
    icon: "square-terminal",
    urlKey: "console",
    appOrder: ["counter", "tip-calculator", "network-status"],
    pages: [
      { id: "dashboard", label: "Dashboard", path: "/", icon: "layout-dashboard" },
      { id: "schedules", label: "Schedules", path: "/schedules", icon: "calendar-days" },
    ],
  },
  {
    id: "tip-calculator",
    label: "Tip Calculator",
    icon: "hand-coins",
    urlKey: "tip-calculator",
    appOrder: ["console", "counter", "network-status"],
    pages: [
      { id: "claims", label: "Claims", path: "/claims", icon: "landmark" },
      { id: "tips", label: "Tips", path: "/tips", icon: "hand-coins" },
      { id: "weight-presets", label: "Weight Presets", path: "/weight-presets", icon: "scale" },
      { id: "seven-shifts", label: "7Shifts Schedule", path: "/seven-shifts", icon: "seven-shifts", access: { key: "tip-calculator:seven-shifts-navigation" } },
      { id: "reports", label: "Reports", path: "/reports", icon: "scroll-text" },
      { id: "assignments", label: "Assignments", path: "/assignments", icon: "users" },
    ],
  },
  {
    id: "counter",
    label: "Counter",
    icon: "gauge",
    urlKey: "counter",
    appOrder: ["console", "tip-calculator", "network-status"],
    pages: [
      { id: "counter", label: "Counter", path: "/", icon: "gauge" },
      { id: "assignments", label: "Assignments", path: "/assignments", icon: "users", access: { key: "counter:manage-assignments" } },
    ],
  },
  {
    id: "network-status",
    label: "Network Status",
    icon: "network",
    urlKey: "network-status",
    appOrder: ["console", "counter", "tip-calculator"],
    pages: [
      { id: "network-status", label: "Network Status", path: "/", icon: "network" },
      { id: "devices", label: "Devices", path: "/devices", icon: "cable" },
      { id: "zones", label: "Zones", path: "/zones", icon: "panels-top-left" },
      { id: "toast-readiness", label: "Toast Readiness", path: "/toast-readiness", icon: "shield-check" },
      { id: "assignments", label: "Assignments", path: "/assignments", icon: "users" },
    ],
  },
];

export const appDefinitionsById = Object.fromEntries(
  appDefinitions.map((app) => [app.id, app]),
) as Record<AppDefinition["id"], AppDefinition>;
