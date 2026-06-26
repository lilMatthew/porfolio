"use client";

import { useState, type ReactNode } from "react";

/**
 * Email link that keeps the native `mailto:` behaviour (opens a mail client if
 * one is configured) but ALSO copies the address to the clipboard and shows a
 * transient confirmation — so a click always gives feedback, even when no mail
 * app is installed.
 */
export default function EmailLink({
  email,
  className = "",
  children,
  copiedLabel,
}: {
  email: string;
  className?: string;
  children: ReactNode;
  copiedLabel: string;
}) {
  const [copied, setCopied] = useState(false);

  const handleClick = () => {
    if (typeof navigator === "undefined" || !navigator.clipboard) return;
    navigator.clipboard
      .writeText(email)
      .then(() => {
        setCopied(true);
        window.setTimeout(() => setCopied(false), 2000);
      })
      .catch(() => {});
  };

  return (
    <a
      href={`mailto:${email}`}
      onClick={handleClick}
      className={`relative ${className}`}
    >
      {children}
      {copied && (
        <span className="pointer-events-none absolute -top-9 left-1/2 z-20 -translate-x-1/2 whitespace-nowrap rounded-md border border-border bg-surface-2 px-2 py-1 text-xs text-foreground shadow-lg">
          {copiedLabel}
        </span>
      )}
    </a>
  );
}
