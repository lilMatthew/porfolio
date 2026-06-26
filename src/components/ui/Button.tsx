import { type ComponentProps } from "react";
import { Link } from "@/i18n/navigation";

type Variant = "primary" | "ghost";

const base =
  "inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition-colors";

const variants: Record<Variant, string> = {
  primary: "bg-accent text-white hover:bg-accent-strong",
  ghost:
    "border border-border bg-surface text-foreground hover:border-accent hover:text-accent",
};

/** Shared button class string — reuse for non-button elements that need the look. */
export function buttonClass(variant: Variant = "ghost", className = "") {
  return `${base} ${variants[variant]} ${className}`;
}

/** Anchor/link-styled button. Uses the locale-aware `Link`. */
export function LinkButton({
  variant = "ghost",
  className = "",
  ...props
}: { variant?: Variant } & ComponentProps<typeof Link>) {
  return (
    <Link className={`${base} ${variants[variant]} ${className}`} {...props} />
  );
}

/** Plain external/anchor button (for hrefs outside the locale router). */
export function AnchorButton({
  variant = "ghost",
  className = "",
  ...props
}: { variant?: Variant } & ComponentProps<"a">) {
  return (
    <a className={`${base} ${variants[variant]} ${className}`} {...props} />
  );
}
