"use client";

import { useEffect, useRef, useState, useTransition } from "react";
import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing, type Locale } from "@/i18n/routing";

/**
 * Custom locale dropdown. We don't use a native <select> because `<option>`
 * styling (background / highlight) is unreliable across browsers and OSes —
 * here we fully control the active + hover highlight to match the dark theme.
 */
export default function LocaleSwitcher() {
  const t = useTranslations("LocaleSwitcher");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Close on outside click or Escape.
  useEffect(() => {
    if (!open) return;
    function onPointerDown(e: PointerEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  function selectLocale(next: Locale) {
    setOpen(false);
    if (next === locale) return;
    // `pathname` is locale-agnostic, so the current page is preserved.
    startTransition(() => {
      router.replace(pathname, { locale: next });
    });
  }

  return (
    <div ref={ref} className="relative text-sm">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        disabled={isPending}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={t("label")}
        className="inline-flex items-center gap-2 rounded-md border border-border bg-surface px-3 py-1.5 text-foreground transition-colors hover:border-accent disabled:opacity-50"
      >
        <span>{t(locale as Locale)}</span>
        <span
          className={`text-muted transition-transform ${open ? "rotate-180" : ""}`}
          aria-hidden
        >
          ▾
        </span>
      </button>

      {open && (
        <ul
          role="listbox"
          className="absolute right-0 z-50 mt-1 w-28 overflow-hidden rounded-md border border-border bg-surface shadow-lg"
        >
          {routing.locales.map((cur) => {
            const active = cur === locale;
            return (
              <li key={cur} role="option" aria-selected={active}>
                <button
                  type="button"
                  onClick={() => selectLocale(cur)}
                  className={`flex w-full items-center justify-between px-3 py-2 text-left transition-colors ${
                    active
                      ? "bg-accent text-white"
                      : "text-foreground hover:bg-surface-2"
                  }`}
                >
                  {t(cur)}
                  {active && <span aria-hidden>✓</span>}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
