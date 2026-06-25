import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  // All locales supported by the app.
  locales: ["vi", "en"],

  // Used when no locale matches (e.g. `/about` -> `/vi/about`).
  defaultLocale: "vi",
});

export type Locale = (typeof routing.locales)[number];
