# @niteowl/app-config

Shared data/configuration package for the NiteOwl web applications.

This repository owns application IDs, labels, icon IDs, page definitions, navigation ordering, URL keys, default deployment URL resolution, and declarative access requirements. It does not fetch Better Auth sessions or permissions itself and it does not render UI.

A consuming application resolves its authenticated user's capabilities, gets the default URL map for the current hostname with `getDefaultAppUrls` (or supplies an explicit URL map when needed), calls `buildNavigation`, and passes the resulting model to `@niteowl/ui`.

## Current applications

- Console
- Tip Calculator
- Counter
- Network Status

Tip Calculator is the first migration target for the shared navigation/app-shell work.
