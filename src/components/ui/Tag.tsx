/** Small tech-stack chip used in project cards and the skills grid. */
export default function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block rounded border border-border bg-surface-2 px-2 py-1 text-xs text-muted">
      {children}
    </span>
  );
}
