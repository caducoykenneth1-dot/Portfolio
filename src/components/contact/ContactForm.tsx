"use client";

import { useState } from "react";
import { contactSchema, type ContactFormData } from "@/src/lib/validators";

const API_URL = "https://api.web3forms.com/submit";
const ACCESS_KEY = "your_web3forms_access_key"; // replace with your actual Web3Forms access key

export function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    message: "",
  });
  const [honeypot, setHoneypot] = useState("");
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [feedback, setFeedback] = useState("");
  const [cooldown, setCooldown] = useState(0);

  const handleChange = (field: keyof ContactFormData) => (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [field]: event.target.value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (honeypot.trim().length > 0) {
      return;
    }

    const result = contactSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof ContactFormData, string>> = {};
      result.error.issues.forEach((issue) => {
        const key = issue.path[0] as keyof ContactFormData;
        fieldErrors[key] = issue.message;
      });
      setErrors(fieldErrors);
      setFeedback("Please fix the highlighted fields.");
      setStatus("error");
      return;
    }

    setStatus("sending");
    setFeedback("");

    try {
      const form = new FormData();
      form.append("access_key", ACCESS_KEY);
      form.append("subject", "New portfolio message");
      form.append("name", formData.name);
      form.append("email", formData.email);
      form.append("message", formData.message);
      form.append("botcheck", honeypot);

      const response = await fetch(API_URL, {
        method: "POST",
        body: form,
      });

      if (!response.ok) {
        throw new Error("Form submission failed.");
      }

      setStatus("success");
      setFeedback("Thanks for your message — I’ll get back to you soon.");
      setFormData({ name: "", email: "", message: "" });
      setCooldown(30);

      const interval = window.setInterval(() => {
        setCooldown((value) => {
          if (value <= 1) {
            window.clearInterval(interval);
            return 0;
          }
          return value - 1;
        });
      }, 1000);
    } catch (error) {
      setStatus("error");
      setFeedback("Something went wrong while sending your message. Please try again later.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 rounded-sm border border-base-800 bg-base-950/80 p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] sm:p-8">
      <input type="text" name="botcheck" value={honeypot} onChange={(event) => setHoneypot(event.target.value)} className="hidden" autoComplete="off" tabIndex={-1} />
      <div className="grid gap-6 sm:grid-cols-2">
        <label className="grid gap-2 text-sm text-base-200">
          <span className="font-medium text-base-100">Name</span>
          <input
            type="text"
            value={formData.name}
            onChange={handleChange("name")}
            className="rounded-none border border-base-700 bg-black px-3 py-3 text-sm text-white outline-none transition focus:border-white focus:ring-1 focus:ring-white/20"
            placeholder="Your name"
          />
          {errors.name ? <span className="text-xs text-rose-400">{errors.name}</span> : null}
        </label>

        <label className="grid gap-2 text-sm text-base-200">
          <span className="font-medium text-base-100">Email</span>
          <input
            type="email"
            value={formData.email}
            onChange={handleChange("email")}
            className="rounded-none border border-base-700 bg-black px-3 py-3 text-sm text-white outline-none transition focus:border-white focus:ring-1 focus:ring-white/20"
            placeholder="you@example.com"
          />
          {errors.email ? <span className="text-xs text-rose-400">{errors.email}</span> : null}
        </label>
      </div>

      <label className="grid gap-2 text-sm text-base-200">
        <span className="font-medium text-base-100">Message</span>
        <textarea
          value={formData.message}
          onChange={handleChange("message")}
          rows={6}
          className="rounded-none border border-base-700 bg-black px-3 py-3 text-sm text-white outline-none transition focus:border-white focus:ring-1 focus:ring-white/20"
          placeholder="Tell me a bit about your project or what you want to build."
        />
        {errors.message ? <span className="text-xs text-rose-400">{errors.message}</span> : null}
      </label>

      {feedback ? (
        <div className={`rounded-sm border px-4 py-3 text-sm ${status === "success" ? "border-emerald-500 bg-emerald-500/10 text-emerald-100" : "border-rose-500 bg-rose-500/10 text-rose-100"}`}>
          {feedback}
        </div>
      ) : null}

      <button
        type="submit"
        disabled={status === "sending" || cooldown > 0}
        className="inline-flex min-h-[44px] items-center justify-center rounded-none border border-base-800 bg-white/5 px-6 py-3 text-sm uppercase tracking-[0.24em] text-white transition hover:border-white hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {cooldown > 0 ? `Send again in ${cooldown}s` : status === "sending" ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
