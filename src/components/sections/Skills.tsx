import { useTranslations } from "next-intl";
import SectionHeading from "@/components/ui/SectionHeading";
import Tag from "@/components/ui/Tag";
import { skills } from "@/data/skills";

export default function Skills() {
  const t = useTranslations("Skills");
  // Raw map of category id -> label. Cast the key because typed messages only
  // expose string leaves, not object branches.
  const categories = t.raw("categories" as never) as Record<string, string>;

  return (
    <section className="mx-auto w-full max-w-5xl px-6 py-16">
      <SectionHeading id="skills" label={t("title")} />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((group) => (
          <div
            key={group.category}
            className="group relative overflow-hidden rounded-xl border border-border bg-surface p-5 transition-colors hover:border-accent/60"
          >
            <div
              aria-hidden
              className="accent-bar absolute inset-x-0 top-0 h-px opacity-0 transition-opacity group-hover:opacity-100"
            />
            <div className="mb-4 flex items-center justify-between">
              <h3 className="flex items-center gap-2 font-bold text-foreground">
                <span className="text-accent">#</span>
                {categories[group.category]}
              </h3>
              <span className="font-mono text-xs text-muted">
                {String(group.items.length).padStart(2, "0")}
              </span>
            </div>
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
