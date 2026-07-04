"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/src/components/ui/Button";

const phrases = [
  "I build polished interfaces that feel as deliberate as they look.",
  "I turn ideas into products people actually enjoy using.",
  "I care about clean code and even cleaner design.",
];

const TYPE_SPEED = 50;
const DELETE_SPEED = 50;
const PAUSE_AFTER_TYPE = 1800;
const PAUSE_AFTER_DELETE = 800;

export function Hero() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [phase, setPhase] = useState<"typing" | "pausing" | "deleting">("typing");
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (phase === "typing") {
      if (displayedText.length < currentPhrase.length) {
        timeout = setTimeout(() => {
          setDisplayedText(currentPhrase.slice(0, displayedText.length + 1));
        }, TYPE_SPEED);
      } else {
        timeout = setTimeout(() => setPhase("pausing"), PAUSE_AFTER_TYPE);
      }
    } else if (phase === "pausing") {
      timeout = setTimeout(() => setPhase("deleting"), 0);
    } else if (phase === "deleting") {
      if (displayedText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayedText(displayedText.slice(0, -1));
        }, DELETE_SPEED);
      } else {
        timeout = setTimeout(() => {
          setPhraseIndex((prev) => (prev + 1) % phrases.length);
          setPhase("typing");
        }, PAUSE_AFTER_DELETE);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayedText, phase, phraseIndex]);

  useEffect(() => {
    const blink = window.setInterval(() => {
      setShowCursor((value) => !value);
    }, 500);
    return () => window.clearInterval(blink);
  }, []);

  return (
    <section className="border-b border-base-800 px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }} className="space-y-5">
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }} className="font-mono text-[11px] uppercase tracking-[0.3em] text-base-500">
          available for freelance & product roles
        </motion.p>

        <h1 className="max-w-3xl min-h-[220px] text-4xl font-semibold leading-[0.95] text-white sm:min-h-[200px] sm:text-5xl md:min-h-[240px] md:text-6xl lg:min-h-[220px] lg:text-7xl">
          <span>{displayedText}</span>
          <span className={`ml-1 align-middle text-white ${showCursor ? "opacity-100" : "opacity-0"}`}>
            |
          </span>
        </h1>

        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: 0.16 }} className="flex flex-wrap gap-2 text-sm sm:text-base">
          <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-base-300">&gt; hello_world.tsx</span>
          <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-base-300">Developer • Product thinker • UI systems builder</span>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: 0.24 }} className="flex flex-col gap-3 sm:flex-row sm:gap-3">
          <Button href="/projects" className="min-h-[44px]">
            view_projects()
          </Button>
          <a
            href="/KENNETH_DARON_CADUCOY_RESUME.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download
            className="inline-flex min-h-[44px] items-center justify-center rounded-none border border-base-800 bg-transparent px-4 py-2 font-mono text-[11px] uppercase tracking-[0.24em] text-base-100 transition hover:border-white hover:bg-base-950"
          >
            resume ↓
          </a>
          <Button href="/contact" className="min-h-[44px]">
            send_message()
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
