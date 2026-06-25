import Image from "next/image";
import { useTranslations } from "next-intl";
import SectionHeading from "@/components/ui/SectionHeading";
import { AnchorButton } from "@/components/ui/Button";
import Tag from "@/components/ui/Tag";
import { projects } from "@/data/projects";

type ProjectText = { title: string; description: string };

// Deterministic gradient per card index, used when a project has no screenshot.
const gradients = [
  "from-violet-600/40 to-fuchsia-600/20",
  "from-sky-600/40 to-cyan-600/20",
  "from-emerald-600/40 to-teal-600/20",
  "from-amber-600/40 to-orange-600/20",
  "from-rose-600/40 to-pink-600/20",
];

export default function Projects() {
  const t = useTranslations("Projects");
  // Raw nested object keyed by project id. Cast the key because typed messages
  // only expose string leaves, not object branches.
  const items = t.raw("items" as never) as Record<string, ProjectText>;

  return (
    <section className="mx-auto w-full max-w-5xl px-6 py-16">
      <SectionHeading id="projects" label={t("title")} />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => {
          const text = items[project.id];
          return (
            <article
              key={project.id}
              className="flex flex-col overflow-hidden rounded-lg border border-border bg-surface transition-colors hover:border-accent/60"
            >
              {/* Banner: screenshot if provided, else a gradient placeholder */}
              <div className="relative aspect-video w-full">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={text.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                ) : (
                  <div
                    className={`flex size-full items-center justify-center bg-gradient-to-br ${gradients[i % gradients.length]}`}
                  >
                    <span className="px-4 text-center text-lg font-bold text-foreground/90">
                      {text.title}
                    </span>
                  </div>
                )}
              </div>

              <div className="flex flex-wrap items-center gap-2 border-b border-border px-4 py-3">
                {project.tags.map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </div>

              <div className="flex flex-1 flex-col gap-2 px-4 py-4">
                <div className="flex items-baseline justify-between gap-2">
                  <h3 className="font-bold text-foreground">{text.title}</h3>
                  <span className="shrink-0 text-xs text-muted">
                    {project.period}
                  </span>
                </div>
                <p className="flex-1 text-sm text-muted">{text.description}</p>
                {(project.liveUrl || project.repoUrl) && (
                  <div className="mt-2 flex gap-2">
                    {project.liveUrl && (
                      <AnchorButton href={project.liveUrl} variant="ghost">
                        {t("live")} →
                      </AnchorButton>
                    )}
                    {project.repoUrl && (
                      <AnchorButton href={project.repoUrl} variant="ghost">
                        {t("repo")} ↗
                      </AnchorButton>
                    )}
                  </div>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
