import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { use } from "react";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import Header from "@/components/Header";

export default function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = use(params);
  // Keep the page statically rendered.
  setRequestLocale(locale as Locale);

  const t = useTranslations("Hero");
  const tFooter = useTranslations("Footer");

  return (
    <>
      <Header />

      <main className="flex flex-1 flex-col">
        {/* Hero — replace with your Figma design */}
        <section className="mx-auto flex w-full max-w-5xl flex-1 flex-col justify-center gap-6 px-6 py-24">
          <p className="text-sm font-medium text-zinc-500">{t("greeting")}</p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            {t("name")}
          </h1>
          <p className="text-xl text-zinc-500">{t("role")}</p>
          <p className="max-w-xl text-lg text-zinc-600 dark:text-zinc-400">
            {t("tagline")}
          </p>
          <div className="flex gap-4">
            <Link
              href="/#projects"
              className="rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background"
            >
              {t("ctaProjects")}
            </Link>
            <Link
              href="/#contact"
              className="rounded-full border border-black/10 px-5 py-2.5 text-sm font-medium dark:border-white/20"
            >
              {t("ctaContact")}
            </Link>
          </div>
        </section>

        {/* Section anchors — build these out from your Figma */}
        <section id="about" className="mx-auto w-full max-w-5xl px-6 py-24" />
        <section id="projects" className="mx-auto w-full max-w-5xl px-6 py-24" />
        <section
          id="experience"
          className="mx-auto w-full max-w-5xl px-6 py-24"
        />
        <section id="contact" className="mx-auto w-full max-w-5xl px-6 py-24" />
      </main>

      <footer className="border-t border-black/10 dark:border-white/10">
        <div className="mx-auto max-w-5xl px-6 py-6 text-sm text-zinc-500">
          © 2026 Portfolio. {tFooter("rights")}
        </div>
      </footer>
    </>
  );
}
