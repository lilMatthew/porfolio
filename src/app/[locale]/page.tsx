import { setRequestLocale } from "next-intl/server";
import { use } from "react";
import type { Locale } from "@/i18n/routing";
import Header from "@/components/Header";
import Hero from "@/components/sections/Hero";
import Quote from "@/components/sections/Quote";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import About from "@/components/sections/About";
import Contacts from "@/components/sections/Contacts";
import Footer from "@/components/sections/Footer";

export default function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = use(params);
  // Keep the page statically rendered.
  setRequestLocale(locale as Locale);

  return (
    <>
      <Header />
      <main className="flex flex-1 flex-col">
        <Hero />
        <Quote />
        <Projects />
        <Skills />
        <About />
        <Contacts />
      </main>
      <Footer />
    </>
  );
}
