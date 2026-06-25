@AGENTS.md
# Claude Next.js App Router Rules

## Tech Stack & Core Architecture
- Next.js 15+ (App Router), TypeScript, Tailwind CSS, Shadcn UI, Radix UI.
- Favor React Server Components (RSC) by default for data fetching and SEO.
- Limit 'use client' to small interactive leaves; never use it for layout/fetching.
- Keep CLAUDE.md under 200 lines to preserve context window boundaries.

## Next.js Modern Specifics
- Always await dynamic route params and searchParams (e.g., `const { id } = await params`).
- Prefer Server Actions over API Routes for mutations; validate with Zod.
- Use 'nuqs' for URL search parameter state management when client state is needed.
- Implement streaming and layout load states using Suspense and loading.tsx.
- Use generateMetadata for dynamic SEO and include localized canonical tags.

## Internationalization (MANDATORY)
- i18n with **next-intl** is REQUIRED. The app ships in `vi` (default) and `en` — see [src/i18n/routing.ts](src/i18n/routing.ts).
- NEVER hardcode user-facing text in components. Every visible string MUST come from a translation key via `useTranslations` / `getTranslations`.
- When adding any new text, add the key to BOTH [messages/vi.json](messages/vi.json) AND [messages/en.json](messages/en.json) (same key, translated value). Never leave a locale missing a key.
- ALWAYS import `Link`, `useRouter`, `usePathname`, `redirect` from [src/i18n/navigation.ts](src/i18n/navigation.ts) — never from `next/link` or `next/navigation` — so locale prefixes are preserved.
- Localized SEO: build metadata via `getTranslations` in `generateMetadata` (see the `Metadata` namespace).
- Adding a locale: update `locales` in routing, add `messages/<locale>.json`, add its `LocaleSwitcher` label in every catalog.

## Code Style & Formatting
- Code: Use TypeScript with strict types. Avoid 'any' type completely; use 'unknown'.
- Components: Use functional components, explicit TS interfaces, and destructure props.
- Functions: Prefer early returns for readability and clean control flows.
- Naming: Prefix event functions with 'handle' (e.g., handleClick, handleKeyDown).
- UI: Use Tailwind utility classes; do not use raw CSS style tags.

## Build and Testing Commands
- Install: `npm install` (or pnpm/bun equivalent)
- Build/Lint: `npm run build` or `next lint`
- Test: Use `npm run test` (Vitest/Jest) for unit flows before changing code.
