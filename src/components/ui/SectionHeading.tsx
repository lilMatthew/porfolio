import { type ReactNode } from "react";

/**
 * Code-comment style section heading, e.g. `#projects`, with an optional
 * action rendered on the right (like the "View all →" link in the Figma).
 */
export default function SectionHeading({
  label,
  action,
  id,
}: {
  label: string;
  action?: ReactNode;
  id?: string;
}) {
  return (
    <div
      id={id}
      className="mb-10 flex items-center justify-between scroll-mt-24"
    >
      <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
        <span className="text-accent">#</span>
        {label}
      </h2>
      {action}
    </div>
  );
}
