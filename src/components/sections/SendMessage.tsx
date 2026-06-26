import { useTranslations } from "next-intl";
import SectionHeading from "@/components/ui/SectionHeading";
import ContactForm from "@/components/ui/ContactForm";

export default function SendMessage() {
  const t = useTranslations("SendMessage");

  return (
    <section className="mx-auto w-full max-w-5xl px-6 py-16">
      <SectionHeading id="message" label={t("title")} />

      <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2">
        <p className="max-w-md text-sm leading-relaxed text-muted">
          {t("intro")}
        </p>
        <ContactForm />
      </div>
    </section>
  );
}
