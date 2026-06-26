import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import LocaleSwitcher from "./LocaleSwitcher";
import MobileNav from "./MobileNav";

export default function Header() {
  const t = useTranslations("Nav");

  // In-page section anchors. Plain hash links so they scroll instantly without
  // triggering a locale route navigation (which adds a network round-trip).
  const links = [
    { href: "#home", label: t("home") },
    { href: "#projects", label: t("works") },
    { href: "#about", label: t("about") },
    { href: "#contacts", label: t("contacts") },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur relative">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2 font-bold">
          <span className="text-accent">❖</span>
          <span>{"<Portfolio/>"}</span>
        </Link>
        <ul className="hidden gap-7 text-sm text-muted sm:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="transition-colors hover:text-foreground"
              >
                <span className="text-accent">#</span>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-3">
          <LocaleSwitcher />
          <MobileNav />
        </div>
      </nav>
    </header>
  );
}
