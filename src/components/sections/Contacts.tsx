import { useTranslations } from "next-intl";
import SectionHeading from "@/components/ui/SectionHeading";
import { profile } from "@/data/profile";

export default function Contacts() {
  const t = useTranslations("Contacts");

  const rows = [
    {
      label: t("email"),
      value: profile.socials.email,
      href: `mailto:${profile.socials.email}`,
    },
    {
      label: t("phone"),
      value: profile.socials.phone,
      href: `tel:${profile.socials.phone.replace(/\s/g, "")}`,
    },
    { label: t("github"), value: profile.socials.github, href: profile.socials.github },
    {
      label: t("linkedin"),
      value: profile.socials.linkedin,
      href: profile.socials.linkedin,
    },
  ];

  return (
    <section className="mx-auto w-full max-w-5xl px-6 py-16">
      <SectionHeading id="contacts" label={t("title")} />

      <div className="grid gap-12 lg:grid-cols-2">
        <p className="max-w-md text-sm leading-relaxed text-muted">
          {t("intro")}
        </p>

        <div className="rounded-lg border border-border bg-surface p-5">
          <h3 className="mb-3 font-bold text-foreground">{t("messageTitle")}</h3>
          <dl className="space-y-2 text-sm">
            {rows.map((row) => (
              <div key={row.label} className="flex justify-between gap-4">
                <dt className="text-muted">{row.label}</dt>
                <dd className="truncate">
                  <a
                    href={row.href}
                    target={row.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="text-accent hover:underline"
                  >
                    {row.value}
                  </a>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
