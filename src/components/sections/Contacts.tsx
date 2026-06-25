import { useTranslations } from "next-intl";
import SectionHeading from "@/components/ui/SectionHeading";
import { profile } from "@/data/profile";

export default function Contacts() {
  const t = useTranslations("Contacts");

  return (
    <section className="mx-auto w-full max-w-5xl px-6 py-16">
      <SectionHeading id="contacts" label={t("title")} />

      <div className="grid gap-12 lg:grid-cols-2">
        <p className="max-w-md text-sm leading-relaxed text-muted">
          {t("intro")}
        </p>

        <div className="space-y-4">
          <div className="rounded-lg border border-border bg-surface p-5">
            <h3 className="mb-3 font-bold text-foreground">
              {t("messageTitle")}
            </h3>
            <dl className="space-y-2 text-sm">
              <div className="flex justify-between gap-4">
                <dt className="text-muted">{t("discord")}</dt>
                <dd className="text-foreground">{profile.socials.discord}</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-muted">{t("email")}</dt>
                <dd>
                  <a
                    href={`mailto:${profile.socials.email}`}
                    className="text-accent hover:underline"
                  >
                    {profile.socials.email}
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
