"use client";

import { useActionState, useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import { sendMessage, type ContactState } from "@/app/actions/contact";
import Dialog from "@/components/ui/Dialog";

const initialState: ContactState = { status: "idle" };

export default function ContactForm() {
  const t = useTranslations("SendMessage");
  const [state, action, pending] = useActionState(sendMessage, initialState);
  const formRef = useRef<HTMLFormElement>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  // On success: clear the fields and open the thank-you dialog.
  useEffect(() => {
    if (state.status === "success") {
      formRef.current?.reset();
      setDialogOpen(true);
    }
  }, [state]);

  const fieldClass =
    "w-full rounded-md border border-border bg-surface-2 px-3 py-2 text-sm text-foreground placeholder:text-muted outline-none transition-colors focus:border-accent";

  return (
    <form
      ref={formRef}
      action={action}
      className="flex flex-col gap-4 rounded-xl border border-border bg-surface p-5"
    >
      <div className="flex flex-col gap-1.5">
        <label htmlFor="cf-email" className="text-xs text-muted">
          {t("emailLabel")}
        </label>
        <input
          id="cf-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder={t("emailPlaceholder")}
          className={fieldClass}
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="cf-message" className="text-xs text-muted">
          {t("messageLabel")}
        </label>
        <textarea
          id="cf-message"
          name="message"
          required
          rows={5}
          maxLength={5000}
          placeholder={t("messagePlaceholder")}
          className={`${fieldClass} resize-y`}
        />
      </div>

      <button
        type="submit"
        disabled={pending}
        className="inline-flex w-fit items-center gap-2 rounded-md bg-accent px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-accent-strong disabled:cursor-not-allowed disabled:opacity-60"
      >
        {pending ? t("sending") : `${t("send")} →`}
      </button>

      <p aria-live="polite" className="min-h-5 text-sm">
        {state.status === "invalid" && (
          <span className="text-amber-400">{t("invalid")}</span>
        )}
        {state.status === "error" && (
          <span className="text-rose-400">{t("error")}</span>
        )}
      </p>

      <Dialog
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
        title={t("dialogTitle")}
        closeLabel={t("dialogClose")}
        imageSrc="/thank-you.jpg"
        imageAlt={t("dialogTitle")}
      >
        {t("dialogMessage")}
      </Dialog>
    </form>
  );
}
