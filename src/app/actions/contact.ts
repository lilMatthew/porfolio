"use server";

import nodemailer from "nodemailer";
import { z } from "zod";

/**
 * Contact-form Server Action. Validates input with Zod and delivers the message
 * to the owner's inbox via Gmail SMTP (Nodemailer).
 *
 * Required env vars (set them in `.env.local` and on Vercel):
 *   GMAIL_USER          — the Gmail address that sends the mail
 *   GMAIL_APP_PASSWORD  — a 16-char Google "App Password" (needs 2FA enabled)
 *   CONTACT_TO          — (optional) recipient; defaults to GMAIL_USER
 */

const schema = z.object({
  email: z.string().email(),
  message: z.string().trim().min(1).max(5000),
});

export type ContactStatus = "idle" | "success" | "invalid" | "error";
export type ContactState = { status: ContactStatus };

export async function sendMessage(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const parsed = schema.safeParse({
    email: formData.get("email"),
    message: formData.get("message"),
  });

  if (!parsed.success) return { status: "invalid" };

  const user = process.env.GMAIL_USER;
  const pass = process.env.GMAIL_APP_PASSWORD;
  if (!user || !pass) {
    console.error("Contact form: GMAIL_USER / GMAIL_APP_PASSWORD not set.");
    return { status: "error" };
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user, pass },
    });

    await transporter.sendMail({
      from: `"Portfolio Contact" <${user}>`,
      to: process.env.CONTACT_TO ?? user,
      replyTo: parsed.data.email,
      subject: `Portfolio — new message from ${parsed.data.email}`,
      text: parsed.data.message,
    });

    return { status: "success" };
  } catch (err) {
    console.error("Contact form: failed to send mail.", err);
    return { status: "error" };
  }
}
