"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function AboutPreview() {
  return (
    <div>
      <div className="mx-auto max-w-4xl">
        <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.24em] text-base-500">
          // about_preview
        </p>

        <p className="max-w-2xl text-2xl font-medium leading-snug text-white sm:text-3xl">
          I'm a developer who enjoys turning product ideas into thoughtful
          interfaces —{" "}
          <span className="text-base-400">
            with a strong focus on clarity, motion, and maintainable systems.
          </span>
        </p>

        <Link
          href="/about"
          className="group mt-6 inline-flex min-h-[44px] items-center gap-2 font-mono text-sm uppercase tracking-[0.2em] text-white transition-colors hover:text-base-300"
        >
          read_more
          <ArrowRight
            size={16}
            className="transition-transform duration-200 group-hover:translate-x-1"
          />
        </Link>
      </div>
    </div>
  );
}