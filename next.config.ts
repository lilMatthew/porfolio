import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  // Keep nodemailer (used by the contact Server Action) out of the bundle so it
  // loads as a normal Node module at runtime.
  serverExternalPackages: ["nodemailer"],
};

// Wires next-intl into the build. Points at `./src/i18n/request.ts` by default.
const withNextIntl = createNextIntlPlugin();

export default withNextIntl(nextConfig);
