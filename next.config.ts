import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  /* config options here */
};

// Wires next-intl into the build. Points at `./src/i18n/request.ts` by default.
const withNextIntl = createNextIntlPlugin();

export default withNextIntl(nextConfig);
