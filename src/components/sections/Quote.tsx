import { useTranslations } from "next-intl";

export default function Quote() {
  const t = useTranslations("Quote");

  return (
    <section className="mx-auto w-full max-w-5xl px-6 py-12">
      <figure className="relative mx-auto max-w-2xl border border-border bg-surface px-8 py-8 text-center">
        <span className="absolute left-3 top-1 text-4xl text-accent">“</span>
        <blockquote className="text-lg font-medium text-foreground sm:text-xl">
          {t("text")}
        </blockquote>
        <figcaption className="mt-3 text-sm text-muted">
          — {t("author")} —
        </figcaption>
        <span className="absolute bottom-1 right-3 text-4xl text-accent">”</span>
      </figure>
    </section>
  );
}
