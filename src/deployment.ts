import type { AppUrlMap } from "./navigation.ts";

const MCCARTHYS_SUFFIX = ".mccarthysirishpub.com";

export type NiteOwlDeployment = "mccarthys" | "niteowl";

export function getDeploymentForHostname(hostname: string): NiteOwlDeployment {
  const normalized = hostname.trim().toLowerCase();

  return normalized === "mccarthysirishpub.com" || normalized.endsWith(MCCARTHYS_SUFFIX)
    ? "mccarthys"
    : "niteowl";
}

export function getDefaultAppUrls(hostname: string): AppUrlMap {
  if (getDeploymentForHostname(hostname) === "mccarthys") {
    return {
      console: "https://console.mccarthysirishpub.com/",
      "tip-calculator": "https://tip-calculator.mccarthysirishpub.com",
      counter: "https://counter.mccarthysirishpub.com",
      "network-status": "https://unifi.mccarthysirishpub.com",
    };
  }

  return {
    console: "https://console.niteowl.dev/",
    "tip-calculator": "https://tip-calculator.niteowl.dev",
    counter: "https://counter.niteowl.dev",
    "network-status": "https://unifi.niteowl.dev",
  };
}
