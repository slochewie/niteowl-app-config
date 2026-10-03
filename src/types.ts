export type NiteOwlAppId =
  | "console"
  | "tip-calculator"
  | "counter"
  | "network-status"
  | "inventory"
  | "smart-devices";

export type NiteOwlIconId =
  | "book-open"
  | "building-2"
  | "cable"
  | "calendar-days"
  | "gauge"
  | "hand-coins"
  | "history"
  | "landmark"
  | "layout-dashboard"
  | "network"
  | "panels-top-left"
  | "plug-zap"
  | "scale"
  | "scroll-text"
  | "seven-shifts"
  | "shield-check"
  | "square-terminal"
  | "user-circle"
  | "users";

export type AccessRequirement = {
  key: string;
};

export type AppPageDefinition = {
  id: string;
  label: string;
  path: string;
  icon: NiteOwlIconId;
  access?: AccessRequirement;
};

export type AppDefinition = {
  id: NiteOwlAppId;
  label: string;
  icon: NiteOwlIconId;
  urlKey: NiteOwlAppId;
  pages: AppPageDefinition[];
  appOrder?: NiteOwlAppId[];
  access?: AccessRequirement;
};
