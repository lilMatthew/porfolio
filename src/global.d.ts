import { routing } from "@/i18n/routing";
import messages from "../messages/en.json";

// Gives `useTranslations`, `t()` keys, `getTranslations`, locales, etc. full
// type-safety and autocompletion based on the English message catalog.
declare module "next-intl" {
  interface AppConfig {
    Locale: (typeof routing.locales)[number];
    Messages: typeof messages;
  }
}
