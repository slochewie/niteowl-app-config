export type NiteOwlAppId =
  | "console"
  | "tip-calculator"
  | "counter"
  | "network-status";

export type NiteOwlIconId =
  | "book-open"
  | "building-2"
  | "calendar-days"
  | "gauge"
  | "hand-coins"
  | "landmark"
  | "layout-dashboard"
  | "network"
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
  access?: AccessRequirement;
};
