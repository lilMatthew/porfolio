import { useTranslations } from "next-intl";
import { AnchorButton } from "@/components/ui/Button";
import { profile } from "@/data/profile";

export default function Hero() {
  const t = useTranslations("Hero");

  const stats = [
    { value: profile.stats.years, label: t("statYears") },
    { value: profile.stats.projects, label: t("statProjects") },
    { value: profile.stats.stack, label: t("statStack") },
  ];

  return (
    <section id="home" className="relative scroll-mt-24 overflow-hidden">
      {/* Decorative background */}
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-grid" />
      <div
        aria-hidden
        className="glow pointer-events-none absolute -top-24 left-1/2 size-[460px] -translate-x-1/2"
      />

      <div className="relative mx-auto grid w-full max-w-5xl grid-cols-1 items-center gap-12 px-6 py-20 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:py-28">
        {/* Left: copy */}
        <div className="flex min-w-0 flex-col gap-6 animate-rise">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1 text-xs text-muted backdrop-blur">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-pulse-ring rounded-full bg-emerald-400" />
              <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
            </span>
            {t("available")}
          </span>

          <h1 className="text-3xl font-bold leading-tight tracking-tight break-words sm:text-4xl lg:text-5xl">
            {t.rich("headline", {
              name: profile.name,
              hl: (chunks) => <span className="text-gradient">{chunks}</span>,
            })}
          </h1>

          <p className="max-w-md text-muted">{t("subtitle")}</p>

          <div className="flex flex-wrap gap-3">
            <AnchorButton href="#contacts" variant="primary">
              {t("cta")} ↓
            </AnchorButton>
            <AnchorButton href="#projects" variant="ghost">
              {t("viewWork")} →
            </AnchorButton>
          </div>

          {/* Stats */}
          <dl className="mt-2 flex flex-wrap gap-x-8 gap-y-4">
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col">
                <dt className="order-2 text-xs text-muted">{s.label}</dt>
                <dd className="order-1 text-xl font-bold text-foreground sm:text-2xl">
                  {s.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Right: code window */}
        <div className="min-w-0 animate-float lg:justify-self-end">
          <CodeWindow />
        </div>
      </div>
    </section>
  );
}

/** A faux editor window showing the developer profile as a TS object. */
function CodeWindow() {
  const t = useTranslations("Hero");

  return (
    <div className="w-full max-w-md overflow-hidden rounded-xl border border-border bg-surface shadow-2xl shadow-black/40">
      {/* Title bar */}
      <div className="flex items-center gap-2 border-b border-border bg-surface-2 px-4 py-3">
        <span className="size-3 rounded-full bg-rose-500/80" />
        <span className="size-3 rounded-full bg-amber-500/80" />
        <span className="size-3 rounded-full bg-emerald-500/80" />
        <span className="ml-2 text-xs text-muted">developer.ts</span>
      </div>

      {/* Code body */}
      <pre className="overflow-x-auto p-5 text-[13px] leading-relaxed">
        <code>
          <span className="text-accent">const</span>{" "}
          <span className="text-sky-300">developer</span>{" "}
          <span className="text-muted">= {"{"}</span>
          {"\n"}
          <span className="text-muted"> name: </span>
          <span className="text-emerald-300">&quot;{profile.name}&quot;</span>
          <span className="text-muted">,</span>
          {"\n"}
          <span className="text-muted"> role: </span>
          <span className="text-emerald-300">&quot;{profile.role}&quot;</span>
          <span className="text-muted">,</span>
          {"\n"}
          <span className="text-muted"> stack: [</span>
          {profile.stack.map((item, i) => (
            <span key={item}>
              <span className="text-emerald-300">&quot;{item}&quot;</span>
              {i < profile.stack.length - 1 && (
                <span className="text-muted">, </span>
              )}
            </span>
          ))}
          <span className="text-muted">],</span>
          {"\n"}
          <span className="text-muted"> available: </span>
          <span className="text-amber-300">true</span>
          <span className="text-muted">,</span>
          {"\n"}
          <span className="text-muted">{"}"}</span>
          <span className="ml-0.5 inline-block w-2 animate-blink bg-accent">
            &nbsp;
          </span>
        </code>
      </pre>

      {/* Currently-working footer pill */}
      <div className="flex flex-wrap items-center gap-x-2 gap-y-1 border-t border-border px-5 py-3 text-xs">
        <span className="size-2 shrink-0 rounded-full bg-accent" />
        <span className="text-muted">{t("currentlyWorking")}</span>
        <span className="font-semibold text-foreground">
          {t("currentProject")}
        </span>
      </div>
    </div>
  );
}
