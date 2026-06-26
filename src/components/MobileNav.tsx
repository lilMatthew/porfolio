"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

/**
 * Hamburger menu for small screens. The desktop nav is hidden below the `sm`
 * breakpoint, so this gives mobile users access to the same section anchors.
 */
export default function MobileNav() {
  const t = useTranslations("Nav");
  const [open, setOpen] = useState(false);

  const links = [
    { href: "#home", label: t("home") },
    { href: "#projects", label: t("works") },
    { href: "#about", label: t("about") },
    { href: "#contacts", label: t("contacts") },
  ];

  return (
    <div className="sm:hidden">
      <button
        type="button"
        aria-label="Menu"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="grid size-9 place-items-center rounded-md border border-border bg-surface text-foreground transition-colors hover:border-accent hover:text-accent"
      >
        {open ? "✕" : "☰"}
      </button>

      {open && (
        <div className="absolute inset-x-0 top-full border-b border-border bg-background/95 backdrop-blur">
          <ul className="mx-auto flex max-w-5xl flex-col px-6 py-2">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-sm text-muted transition-colors hover:text-foreground"
                >
                  <span className="text-accent">#</span>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
