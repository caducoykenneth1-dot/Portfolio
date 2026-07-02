"use client";

import { useEffect, useState } from "react";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "", botcheck: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [cooldownSeconds, setCooldownSeconds] = useState(0);
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});

  useEffect(() => {
    if (cooldownSeconds <= 0) {
      return;
    }

    const timer = window.setTimeout(() => {
      setCooldownSeconds((current) => Math.max(0, current - 1));
    }, 1000);

    return () => window.clearTimeout(timer);
  }, [cooldownSeconds]);

  function validateForm() {
    const nextErrors: { name?: string; email?: string; message?: string } = {};

    if (!form.name.trim()) {
      nextErrors.name = "Name is required.";
    }

    if (!form.email.trim()) {
      nextErrors.email = "Email is required.";
    } else if (!emailPattern.test(form.email.trim())) {
      nextErrors.email = "Enter a valid email address.";
    }

    const messageLength = form.message.trim().length;
    if (!messageLength) {
      nextErrors.message = "Message is required.";
    } else if (messageLength < 10) {
      nextErrors.message = "Message must be at least 10 characters.";
    } else if (messageLength > 2000) {
      nextErrors.message = "Message cannot exceed 2000 characters.";
    }

    return nextErrors;
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("idle");

    if (cooldownSeconds > 0) {
      return;
    }

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});

    if (form.botcheck.trim()) {
      setStatus("success");
      setCooldownSeconds(30);
      return;
    }

    setStatus("loading");

    const formData = new FormData(event.currentTarget);
    formData.append("access_key", "WEB3FORMS_ACCESS_KEY_PLACEHOLDER");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const result = await res.json();

      if (result.success) {
        setStatus("success");
        event.currentTarget.reset();
        setForm({ name: "", email: "", message: "", botcheck: "" });
        setCooldownSeconds(30);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  const submitDisabled = status === "loading" || cooldownSeconds > 0;

  return (
    <form onSubmit={handleSubmit} className="space-y-4 border border-base-800 bg-base-950 p-5">
      <input
        type="text"
        name="botcheck"
        value={form.botcheck}
        onChange={(event) => setForm({ ...form, botcheck: event.target.value })}
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
      />

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="space-y-2 text-sm text-base-300">
          <span className="font-mono text-[10px] uppercase tracking-[0.24em]">name</span>
          <input
            name="name"
            value={form.name}
            onChange={(event) => setForm({ ...form, name: event.target.value })}
            className="w-full border border-base-800 bg-black px-3 py-2 text-white outline-none"
          />
          {errors.name && <p className="text-xs text-red-400">{errors.name}</p>}
        </label>
        <label className="space-y-2 text-sm text-base-300">
          <span className="font-mono text-[10px] uppercase tracking-[0.24em]">email</span>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={(event) => setForm({ ...form, email: event.target.value })}
            className="w-full border border-base-800 bg-black px-3 py-2 text-white outline-none"
          />
          {errors.email && <p className="text-xs text-red-400">{errors.email}</p>}
        </label>
      </div>
      <label className="block space-y-2 text-sm text-base-300">
        <span className="font-mono text-[10px] uppercase tracking-[0.24em]">message</span>
        <textarea
          name="message"
          value={form.message}
          onChange={(event) => setForm({ ...form, message: event.target.value })}
          className="min-h-32 w-full border border-base-800 bg-black px-3 py-2 text-white outline-none"
        />
        {errors.message && <p className="text-xs text-red-400">{errors.message}</p>}
      </label>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <button
          type="submit"
          disabled={submitDisabled}
          className="inline-flex items-center justify-center border border-base-800 bg-base-900 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.24em] text-white transition hover:border-white hover:bg-black disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "loading" ? "sending..." : submitDisabled ? "wait..." : "submit()"}
        </button>
        <div className="space-y-1 text-sm text-base-300">
          {status === "success" && (
            <p>
              Message sent. {cooldownSeconds > 0 ? `You can send another in ${cooldownSeconds}s.` : "Thank you."}
            </p>
          )}
          {status === "error" && <p>Please try again in a moment.</p>}
          {cooldownSeconds > 0 && status !== "success" && <p>You can send another message in {cooldownSeconds}s.</p>}
        </div>
      </div>
    </form>
  );
}
