"use client";

import { useState } from "react";

export function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [pending, setPending] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setPending(true);
    setStatus("idle");

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (response.ok) {
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } else {
      setStatus("error");
    }

    setPending(false);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 border border-base-800 bg-base-950 p-5">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="space-y-2 text-sm text-base-300">
          <span className="font-mono text-[10px] uppercase tracking-[0.24em]">name</span>
          <input
            value={form.name}
            onChange={(event) => setForm({ ...form, name: event.target.value })}
            className="w-full border border-base-800 bg-black px-3 py-2 text-white outline-none"
            required
          />
        </label>
        <label className="space-y-2 text-sm text-base-300">
          <span className="font-mono text-[10px] uppercase tracking-[0.24em]">email</span>
          <input
            type="email"
            value={form.email}
            onChange={(event) => setForm({ ...form, email: event.target.value })}
            className="w-full border border-base-800 bg-black px-3 py-2 text-white outline-none"
            required
          />
        </label>
      </div>
      <label className="block space-y-2 text-sm text-base-300">
        <span className="font-mono text-[10px] uppercase tracking-[0.24em]">message</span>
        <textarea
          value={form.message}
          onChange={(event) => setForm({ ...form, message: event.target.value })}
          className="min-h-32 w-full border border-base-800 bg-black px-3 py-2 text-white outline-none"
          required
        />
      </label>
      <div className="flex items-center gap-3">
        <button type="submit" disabled={pending} className="inline-flex items-center justify-center border border-base-800 bg-base-900 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.24em] text-white transition hover:border-white hover:bg-black disabled:cursor-not-allowed disabled:opacity-60">
          {pending ? "sending..." : "submit()"}
        </button>
        {status === "success" && <p className="text-sm text-base-300">Message received.</p>}
        {status === "error" && <p className="text-sm text-base-300">Please try again in a moment.</p>}
      </div>
    </form>
  );
}
