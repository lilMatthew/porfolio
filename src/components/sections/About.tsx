import Image from "next/image";
import { useTranslations } from "next-intl";
import SectionHeading from "@/components/ui/SectionHeading";
import { LinkButton } from "@/components/ui/Button";
import { DottedGrid } from "@/components/ui/Decorations";
import { profile } from "@/data/profile";

export default function About() {
  const t = useTranslations("About");

  return (
    <section className="mx-auto w-full max-w-5xl px-6 py-16">
      <SectionHeading id="about" label={t("title")} />

      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div className="flex flex-col gap-5">
          <p className="text-lg font-semibold text-foreground">
            {t("greeting", { name: profile.name })}
          </p>
          <p className="text-sm leading-relaxed text-muted">{t("body")}</p>
          <div>
            <LinkButton href="/#contacts" variant="ghost">
              {t("readMore")} →
            </LinkButton>
          </div>
        </div>

        <div className="relative flex justify-center lg:justify-end">
          <DottedGrid className="absolute -top-4 left-0 hidden lg:grid" />
          <Image
            src="/portfolio/about-photo.png"
            alt={profile.name}
            width={320}
            height={420}
            className="relative z-10 h-auto w-[240px] object-contain sm:w-[300px]"
          />
        </div>
      </div>
    </section>
  );
}
