import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function NotFound() {
  const t = useTranslations("Nav");

  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-4 px-6 py-24 text-center">
      <h1 className="text-6xl font-bold">404</h1>
      <Link
        href="/"
        className="rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background"
      >
        {t("home")}
      </Link>
    </main>
  );
}
