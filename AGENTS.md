# Portfolio

Personal portfolio (attached to a CV). Next.js App Router + TypeScript + Tailwind CSS v4 + next-intl.

## i18n (next-intl)

- **Locales**: `vi` (default) and `en`. Configured in [src/i18n/routing.ts](src/i18n/routing.ts).
- **Routing**: locale-prefixed via the `[locale]` segment. `/` redirects to `/vi`.
- **Proxy** (Next 16's renamed middleware): [src/proxy.ts](src/proxy.ts) handles locale detection/redirects.
- **Messages**: JSON catalogs in [messages/](messages/) (`vi.json`, `en.json`), grouped by section namespace (`Nav`, `Hero`, `About`, ...).
- **Navigation**: import `Link`, `useRouter`, `usePathname`, `redirect` from [src/i18n/navigation.ts](src/i18n/navigation.ts) — NOT from `next/navigation` / `next/link` — so locale prefixes are preserved.
- **Type-safety**: [src/global.d.ts](src/global.d.ts) types `t()` keys and locales from `messages/en.json`.

### Adding a language
1. Add the code to `locales` in [src/i18n/routing.ts](src/i18n/routing.ts).
2. Add a matching `messages/<locale>.json` (copy `en.json`, translate values).
3. Add a label under the `LocaleSwitcher` namespace in every catalog.

### Adding translated text
- Add the key to **both** `messages/vi.json` and `messages/en.json`.
- Server components: `const t = useTranslations("Namespace")` then `t("key")`.
- Localized metadata: `getTranslations({ locale, namespace })` in `generateMetadata`.

Build/run: `npm run dev` · `npm run build` · `npm run lint`

<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->
