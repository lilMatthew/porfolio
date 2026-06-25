import { useTranslations } from "next-intl";
import SectionHeading from "@/components/ui/SectionHeading";
import Tag from "@/components/ui/Tag";
import { DottedGrid } from "@/components/ui/Decorations";
import { skills } from "@/data/skills";

export default function Skills() {
  const t = useTranslations("Skills");
  // Raw map of category id -> label. Cast the key because typed messages only
  // expose string leaves, not object branches.
  const categories = t.raw("categories" as never) as Record<string, string>;

  return (
    <section className="mx-auto w-full max-w-5xl px-6 py-16">
      <SectionHeading id="skills" label={t("title")} />

      <div className="relative grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <DottedGrid className="absolute -left-10 top-0 hidden lg:grid" />
        {skills.map((group) => (
          <div
            key={group.category}
            className="rounded-lg border border-border bg-surface p-5"
          >
            <h3 className="mb-3 font-bold text-foreground">
              {categories[group.category]}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <Tag key={item}>{item}</Tag>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
