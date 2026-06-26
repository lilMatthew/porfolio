import { useTranslations } from "next-intl";
import SectionHeading from "@/components/ui/SectionHeading";
import { AnchorButton } from "@/components/ui/Button";
import {
  BriefcaseIcon,
  ClockIcon,
  GraduationIcon,
  MapPinIcon,
} from "@/components/ui/icons";
import { profile } from "@/data/profile";

export default function About() {
  const t = useTranslations("About");

  const highlights = [
    { icon: <BriefcaseIcon />, label: t("hlRole"), value: profile.role },
    { icon: <ClockIcon />, label: t("hlExperience"), value: t("expValue") },
    { icon: <GraduationIcon />, label: t("hlEducation"), value: t("eduValue") },
    { icon: <MapPinIcon />, label: t("hlLocation"), value: profile.location },
  ];

  return (
    <section className="mx-auto w-full max-w-5xl px-6 py-16">
      <SectionHeading id="about" label={t("title")} />

      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <div className="flex flex-col gap-5">
          <p className="text-lg font-semibold text-foreground">
            {t("greeting", { name: profile.name })}
          </p>
          <p className="text-sm leading-relaxed text-muted">{t("body")}</p>
          <div>
            <AnchorButton href="#contacts" variant="ghost">
              {t("readMore")} →
            </AnchorButton>
          </div>
        </div>

        {/* Highlights card */}
        <div className="relative overflow-hidden rounded-xl border border-border bg-surface">
          <div aria-hidden className="accent-bar h-px w-full" />
          <ul className="divide-y divide-border">
            {highlights.map((h) => (
              <li
                key={h.label}
                className="group flex items-center gap-4 px-5 py-4 transition-colors hover:bg-surface-2"
              >
                <span className="grid size-9 shrink-0 place-items-center rounded-md border border-border bg-surface-2 text-accent transition-colors group-hover:border-accent/60">
                  {h.icon}
                </span>
                <div className="min-w-0">
                  <p className="text-xs text-muted">{h.label}</p>
                  <p className="truncate font-semibold text-foreground">
                    {h.value}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
