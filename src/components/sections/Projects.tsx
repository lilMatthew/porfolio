import Image from "next/image";
import { useTranslations } from "next-intl";
import SectionHeading from "@/components/ui/SectionHeading";
import { AnchorButton } from "@/components/ui/Button";
import Tag from "@/components/ui/Tag";
import { Link } from "@/i18n/navigation";
import { projects } from "@/data/projects";

type ProjectText = { title: string; description: string };

export default function Projects() {
  const t = useTranslations("Projects");
  // Raw nested object keyed by project id. Cast the key because typed messages
  // only expose string leaves, not object branches.
  const items = t.raw("items" as never) as Record<string, ProjectText>;

  return (
    <section className="mx-auto w-full max-w-5xl px-6 py-16">
      <SectionHeading
        id="projects"
        label={t("title")}
        action={
          <Link
            href="/#projects"
            className="text-sm text-accent hover:underline"
          >
            {t("viewAll")} →
          </Link>
        }
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => {
          const text = items[project.id];
          return (
            <article
              key={project.id}
              className="flex flex-col overflow-hidden rounded-lg border border-border bg-surface transition-colors hover:border-accent/60"
            >
              <div className="relative aspect-video w-full">
                <Image
                  src={project.image}
                  alt={text.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>

              <div className="flex flex-wrap gap-2 border-b border-border px-4 py-3">
                {project.tags.map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </div>

              <div className="flex flex-1 flex-col gap-2 px-4 py-4">
                <h3 className="font-bold text-foreground">{text.title}</h3>
                <p className="flex-1 text-sm text-muted">{text.description}</p>
                <div className="mt-2 flex gap-2">
                  {project.liveUrl && (
                    <AnchorButton href={project.liveUrl} variant="ghost">
                      {t("live")} →
                    </AnchorButton>
                  )}
                  {project.cachedUrl && (
                    <AnchorButton href={project.cachedUrl} variant="ghost">
                      {t("cached")} ↓
                    </AnchorButton>
                  )}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
