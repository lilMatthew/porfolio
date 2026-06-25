import { createNavigation } from "next-intl/navigation";
import { routing } from "./routing";

// Lightweight wrappers around Next.js' navigation APIs that are aware of the
// current locale and the routing configuration. Always import `Link`,
// `useRouter`, `usePathname`, `redirect` and `getPathname` from here instead of
// `next/navigation` / `next/link` so locale prefixes are handled for you.
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
