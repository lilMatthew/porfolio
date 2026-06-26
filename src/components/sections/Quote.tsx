import { useTranslations } from "next-intl";

export default function Quote() {
  const t = useTranslations("Quote");

  return (
    <section className="mx-auto w-full max-w-5xl px-6 py-12">
      <figure className="relative mx-auto max-w-2xl overflow-hidden rounded-xl border border-border bg-surface px-8 py-10 text-center">
        <div aria-hidden className="accent-bar absolute inset-x-0 top-0 h-px" />
        <span className="absolute left-4 top-2 font-serif text-5xl leading-none text-accent/40">
          “
        </span>
        <blockquote className="text-lg font-medium text-foreground sm:text-xl">
          {t("text")}
        </blockquote>
        <figcaption className="mt-4 text-sm text-muted">
          — {t("author")} —
        </figcaption>
        <span className="absolute bottom-2 right-4 font-serif text-5xl leading-none text-accent/40">
          ”
        </span>
      </figure>
    </section>
  );
}
