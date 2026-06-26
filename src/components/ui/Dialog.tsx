"use client";

import Image from "next/image";
import { useEffect, useRef, type ReactNode } from "react";
import { createPortal } from "react-dom";

/**
 * Lightweight accessible modal. Closes on Escape or backdrop click, locks body
 * scroll while open, and moves focus into the dialog.
 */
export default function Dialog({
  open,
  onClose,
  title,
  closeLabel,
  children,
  imageSrc,
  imageAlt = "",
}: {
  open: boolean;
  onClose: () => void;
  title: string;
  closeLabel: string;
  children: ReactNode;
  /** Optional avatar/illustration shown at the top instead of the ✓ icon. */
  imageSrc?: string;
  imageAlt?: string;
}) {
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    panelRef.current?.focus();

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, onClose]);

  if (!open || typeof document === "undefined") return null;

  // Portal to <body> so the fixed overlay is centered to the viewport and not
  // affected by transformed ancestors (e.g. the scroll-reveal wrapper).
  return createPortal(
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden
      />
      <div
        ref={panelRef}
        tabIndex={-1}
        role="dialog"
        aria-modal="true"
        aria-labelledby="dialog-title"
        className="relative z-10 w-full max-w-sm animate-rise rounded-xl border border-border bg-surface p-6 text-center shadow-2xl shadow-black/50 outline-none"
      >
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={80}
            height={80}
            className="mx-auto mb-4 size-20 rounded-2xl border border-border object-cover"
          />
        ) : (
          <div className="mx-auto mb-4 grid size-12 place-items-center rounded-full border border-accent/40 bg-accent/10 text-2xl text-accent">
            ✓
          </div>
        )}
        <h3
          id="dialog-title"
          className="mb-2 text-lg font-bold text-foreground"
        >
          {title}
        </h3>
        <p className="text-sm leading-relaxed text-muted">{children}</p>
        <button
          type="button"
          onClick={onClose}
          className="mt-6 inline-flex w-full items-center justify-center rounded-md bg-accent px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-accent-strong"
        >
          {closeLabel}
        </button>
      </div>
    </div>,
    document.body,
  );
}
