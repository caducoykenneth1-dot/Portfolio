"use client";

import { motion } from "framer-motion";

export function GlowBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
    >
      {/* Hero glow - top center */}
      <motion.div
        animate={{ opacity: [0.1, 0.18, 0.1] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-1/2 top-0 h-[700px] w-[1400px] -translate-x-1/2 -translate-y-1/3 rounded-full bg-white blur-[200px]"
      />

      {/* Mid-page glow */}
      <motion.div
        animate={{ opacity: [0.08, 0.14, 0.08] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute left-1/2 top-[1400px] h-[600px] w-[1300px] -translate-x-1/2 rounded-full bg-white blur-[200px]"
      />

      {/* Bottom glow */}
      <motion.div
        animate={{ opacity: [0.08, 0.14, 0.08] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute left-1/2 top-[2600px] h-[600px] w-[1300px] -translate-x-1/2 rounded-full bg-white blur-[200px]"
      />
    </div>
  );
}