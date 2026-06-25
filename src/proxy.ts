import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

// Next.js 16 renamed the `middleware` convention to `proxy`. next-intl's
// `createMiddleware` factory still produces the correct handler.
export default createMiddleware(routing);

export const config = {
  // Match all pathnames except for:
  // - API routes (`/api`, `/trpc`)
  // - Next.js internals (`/_next`, `/_vercel`)
  // - files with an extension (e.g. `favicon.ico`, images, fonts)
  matcher: "/((?!api|trpc|_next|_vercel|.*\\..*).*)",
};
