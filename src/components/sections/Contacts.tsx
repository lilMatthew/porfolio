import { useTranslations } from "next-intl";
import SectionHeading from "@/components/ui/SectionHeading";
import { buttonClass } from "@/components/ui/Button";
import EmailLink from "@/components/ui/EmailLink";
import {
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
  PhoneIcon,
} from "@/components/ui/icons";
import { profile } from "@/data/profile";

export default function Contacts() {
  const t = useTranslations("Contacts");

  const rows = [
    {
      icon: <MailIcon />,
      label: t("email"),
      value: profile.socials.email,
      href: `mailto:${profile.socials.email}`,
      isEmail: true,
    },
    {
      icon: <PhoneIcon />,
      label: t("phone"),
      value: profile.socials.phone,
      href: `tel:${profile.socials.phone.replace(/\s/g, "")}`,
    },
    {
      icon: <GitHubIcon />,
      label: t("github"),
      value: profile.socials.github,
      href: profile.socials.github,
    },
    {
      icon: <LinkedInIcon />,
      label: t("linkedin"),
      value: profile.socials.linkedin,
      href: profile.socials.linkedin,
    },
  ];

  const rowClass =
    "group flex items-center gap-4 px-5 py-4 transition-colors hover:bg-surface-2";

  const rowInner = (row: (typeof rows)[number]) => (
    <>
      <span className="grid size-9 shrink-0 place-items-center rounded-md border border-border bg-surface-2 text-accent transition-colors group-hover:border-accent/60">
        {row.icon}
      </span>
      <div className="min-w-0 flex-1">
        <p className="text-xs text-muted">{row.label}</p>
        <p className="truncate text-foreground transition-colors group-hover:text-accent">
          {row.value}
        </p>
      </div>
      <span className="text-muted transition-transform group-hover:translate-x-1 group-hover:text-accent">
        →
      </span>
    </>
  );

  return (
    <section className="mx-auto w-full max-w-5xl px-6 py-16">
      <SectionHeading id="contacts" label={t("title")} />

      <div className="grid gap-10 lg:grid-cols-2">
        <div className="flex flex-col gap-5">
          <p className="max-w-md text-sm leading-relaxed text-muted">
            {t("intro")}
          </p>
          <div>
            <EmailLink
              email={profile.socials.email}
              copiedLabel={t("copied")}
              className={buttonClass("primary")}
            >
              {t("email")} →
            </EmailLink>
          </div>
        </div>

        <div className="overflow-hidden rounded-xl border border-border bg-surface">
          <div className="border-b border-border px-5 py-3">
            <h3 className="font-bold text-foreground">{t("messageTitle")}</h3>
          </div>
          <ul className="divide-y divide-border">
            {rows.map((row) => (
              <li key={row.label}>
                {row.isEmail ? (
                  <EmailLink
                    email={profile.socials.email}
                    copiedLabel={t("copied")}
                    className={rowClass}
                  >
                    {rowInner(row)}
                  </EmailLink>
                ) : (
                  <a
                    href={row.href}
                    target={row.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className={rowClass}
                  >
                    {rowInner(row)}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
