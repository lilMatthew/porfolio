import Image from "next/image";
import { useTranslations } from "next-intl";
import { LinkButton } from "@/components/ui/Button";
import { DottedGrid, SquareOutline } from "@/components/ui/Decorations";
import { profile } from "@/data/profile";

export default function Hero() {
  const t = useTranslations("Hero");

  return (
    <section
      id="home"
      className="mx-auto grid w-full max-w-5xl scroll-mt-24 items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:py-28"
    >
      {/* Left: copy */}
      <div className="flex flex-col gap-6">
        <h1 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
          {t.rich("headline", {
            name: profile.name,
            hl: (chunks) => <span className="text-accent">{chunks}</span>,
          })}
        </h1>
        <p className="max-w-md text-muted">{t("subtitle")}</p>
        <div>
          <LinkButton href="/#contacts" variant="primary">
            {t("cta")} ↓
          </LinkButton>
        </div>
      </div>

      {/* Right: photo + decorations */}
      <div className="relative flex justify-center lg:justify-end">
        <SquareOutline className="absolute -left-2 top-8 hidden lg:block" />
        <DottedGrid
          className="absolute -bottom-2 right-0 hidden lg:grid"
          rows={4}
          cols={5}
        />
        <div className="relative">
          <Image
            src="/portfolio/hero-photo.png"
            alt={profile.name}
            width={320}
            height={420}
            priority
            className="relative z-10 h-auto w-[260px] object-contain sm:w-[320px]"
          />
          <div className="relative z-10 -mt-4 flex w-fit items-center gap-2 border border-border bg-surface px-3 py-2 text-xs">
            <span className="size-2 rounded-full bg-accent" />
            <span className="text-muted">{t("currentlyWorking")}</span>
            <span className="font-semibold text-foreground">
              {t("currentProject")}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
