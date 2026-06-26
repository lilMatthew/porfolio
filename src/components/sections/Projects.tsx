import { useTranslations } from "next-intl";
import SectionHeading from "@/components/ui/SectionHeading";
import { AnchorButton } from "@/components/ui/Button";
import Tag from "@/components/ui/Tag";
import { projects } from "@/data/projects";

type ProjectText = { title: string; description: string };

// Deterministic accent gradient per card index, used for the header band.
const gradients = [
  "from-violet-600/30 via-fuchsia-600/10",
  "from-sky-600/30 via-cyan-600/10",
  "from-emerald-600/30 via-teal-600/10",
  "from-amber-600/30 via-orange-600/10",
  "from-rose-600/30 via-pink-600/10",
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
              className="group relative flex flex-col overflow-hidden rounded-xl border border-border bg-surface transition-all duration-300 hover:-translate-y-1 hover:border-accent/60 hover:shadow-xl hover:shadow-accent/5"
            >
              {/* Header band with index + title */}
              <div
                className={`relative flex h-28 flex-col justify-between bg-gradient-to-br to-transparent p-4 ${gradients[i % gradients.length]}`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-muted">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-mono text-xs text-muted">
                    {project.period}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-foreground transition-colors group-hover:text-accent">
                  {text.title}
                </h3>
              </div>

              <div className="flex flex-1 flex-col gap-3 p-4">
                <p className="flex-1 text-sm text-muted">{text.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Tag key={tag}>{tag}</Tag>
                  ))}
                </div>

                {(project.liveUrl || project.repoUrl) && (
                  <div className="mt-1 flex gap-2">
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
