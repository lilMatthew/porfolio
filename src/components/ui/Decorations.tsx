/**
 * Decorative background elements from the Figma: a dotted grid and an outlined
 * square. Purely visual — marked aria-hidden.
 */

export function DottedGrid({
  rows = 5,
  cols = 5,
  className = "",
}: {
  rows?: number;
  cols?: number;
  className?: string;
}) {
  const dots = Array.from({ length: rows * cols });
  return (
    <div
      aria-hidden
      className={`grid w-fit gap-2 ${className}`}
      style={{ gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))` }}
    >
      {dots.map((_, i) => (
        <span key={i} className="size-1 rounded-full bg-border" />
      ))}
    </div>
  );
}

export function SquareOutline({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={`size-16 border border-accent/40 ${className}`}
    />
  );
}
