import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import LocaleSwitcher from "./LocaleSwitcher";

export default function Header() {
  const t = useTranslations("Nav");

  const links = [
    { href: "/", label: t("home") },
    { href: "/#about", label: t("about") },
    { href: "/#projects", label: t("projects") },
    { href: "/#experience", label: t("experience") },
    { href: "/#contact", label: t("contact") },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-black/10 bg-background/80 backdrop-blur dark:border-white/10">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-semibold">
          Portfolio
        </Link>
        <ul className="hidden gap-6 text-sm sm:flex">
          {links.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="hover:opacity-70">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <LocaleSwitcher />
      </nav>
    </header>
  );
}
