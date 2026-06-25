import { useTranslations } from "next-intl";
import { profile } from "@/data/profile";

export default function Footer() {
  const t = useTranslations("Footer");

  const socials = [
    { label: "GitHub", href: profile.socials.github },
    { label: "LinkedIn", href: profile.socials.linkedin },
    { label: "Twitter", href: profile.socials.twitter },
  ];

  return (
    <footer className="mt-8 border-t border-border">
      <div className="mx-auto flex max-w-5xl flex-col gap-6 px-6 py-10 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex flex-col gap-2">
          <span className="flex items-center gap-2 font-bold">
            <span className="text-accent">❖</span>
            {profile.name}
          </span>
          <p className="text-sm text-muted">{t("tagline")}</p>
        </div>

        <div className="flex flex-col gap-2">
          <span className="text-sm font-semibold text-foreground">
            {t("media")}
          </span>
          <ul className="flex gap-4 text-sm text-muted">
            {socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-accent"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <p className="mx-auto max-w-5xl px-6 py-4 text-center text-xs text-muted">
          © 2026 {profile.name}. {t("rights")} · {t("madeBy", { name: profile.name })}
        </p>
      </div>
    </footer>
  );
}
