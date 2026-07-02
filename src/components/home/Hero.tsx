"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/src/components/ui/Button";

const headline = "I build polished interfaces that feel as deliberate as they look.";

export function Hero() {
  const [displayedText, setDisplayedText] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let index = 0;
    const interval = window.setInterval(() => {
      setDisplayedText(headline.slice(0, index));
      index += 1;
      if (index > headline.length) {
        window.clearInterval(interval);
      }
    }, 28);

    const blink = window.setInterval(() => {
      setShowCursor((value) => !value);
    }, 500);

    return () => {
      window.clearInterval(interval);
      window.clearInterval(blink);
    };
  }, []);

  return (
    <section className="border-b border-base-800 px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }} className="space-y-5">
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }} className="font-mono text-[11px] uppercase tracking-[0.3em] text-base-300 [text-shadow:_0_1px_12px_rgb(0_0_0_/_60%)]">
          available for freelance & product roles
        </motion.p>
        <motion.h1 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: 0.08 }} className="max-w-3xl text-4xl font-semibold leading-[0.95] text-white sm:text-5xl md:text-6xl lg:text-7xl">
          <span>{displayedText}</span>
          <span className={`ml-1 align-middle text-white ${showCursor ? "opacity-100" : "opacity-0"}`}>|</span>
        </motion.h1>
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: 0.16 }} className="flex flex-wrap gap-2 text-sm sm:text-base">
          <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-base-300">&gt; hello_world.tsx</span>
          <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-base-300">Developer • Product thinker • UI systems builder</span>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: 0.24 }} className="flex flex-col gap-3 sm:flex-row sm:gap-3">
          
          <Button href="/contact" className="min-h-[44px]">send_message()</Button>
          <Button href="/projects" className="min-h-[44px]">view_projects()</Button>
          <a
            href="/KENNETH_DARON_CADUCOY_RESUME.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download    
            className="inline-flex min-h-[44px] items-center justify-center rounded-none border border-base-800 bg-transparent px-4 py-2 font-mono text-[11px] uppercase tracking-[0.24em] text-base-100 transition hover:border-white hover:bg-base-950"
          >
            resume ↓
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
