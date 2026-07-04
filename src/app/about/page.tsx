"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SectionReveal } from "@/src/components/home/SectionReveal";

const headlineWords = ["The", "person", "behind", "the", "code."];

const wordVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const workPrinciples = [
  {
    title: "AI-assisted, not AI-replaced",
    body: "I lean heavily on tools like Claude, ChatGPT, and Lovable to prototype fast — but I still care about understanding what's actually being built, not just shipping whatever comes out.",
  },
  {
    title: "Prototype fast, refine harder",
    body: "I'd rather get something working quickly and spend the real time polishing it, instead of overplanning before writing a single line.",
  },
  {
    title: "Clean, readable code",
    body: "I care about writing code that doesn't confuse the next person reading it — including future me.",
  },
];

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="group inline-block">
      <h2 className="text-2xl font-semibold text-white sm:text-3xl">{children}</h2>
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="mt-2 h-px w-full origin-left bg-base-700"
      />
    </div>
  );
}

export default function AboutPage() {
  return (
    <main className="mx-auto flex w-full max-w-4xl flex-1 flex-col px-4 py-16 sm:px-6 lg:px-8">
      <section className="pb-16">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="mb-4 font-mono text-[11px] uppercase tracking-[0.24em] text-base-500"
        >
          // about
        </motion.p>

        <motion.h1
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap gap-x-3 text-4xl font-semibold leading-tight text-white sm:text-5xl"
        >
          {headlineWords.map((word, i) => (
            <motion.span key={i} variants={wordVariants} transition={{ duration: 0.4 }}>
              {word}
            </motion.span>
          ))}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="mt-6 max-w-xl text-lg leading-8 text-base-300"
        >
          Fourth-year Computer Science student, self-taught developer, and
          someone who genuinely enjoys the whole process — from a rough idea
          to something real people can actually use.
        </motion.p>
      </section>

      <SectionReveal delay={0.05}>
        <section className="border-t border-base-800 py-14">
          <SectionHeading>How it started</SectionHeading>
          <div className="mt-5 max-w-2xl space-y-5 text-base leading-8 text-base-300">
            <p>
              I got into development by watching my older cousin work. I
              looked up to him, and that curiosity turned into teaching myself
              how to build — mostly by stumbling through it, with AI tools as
              a constant companion rather than a shortcut around learning.
            </p>
            <p>
              I'm currently studying Computer Science at NORSU, and most of
              what I actually know came from just building things and figuring
              it out along the way.
            </p>
          </div>
        </section>
      </SectionReveal>

      <SectionReveal delay={0.1}>
        <section className="border-t border-base-800 py-14">
          <SectionHeading>What I enjoy</SectionHeading>
          <p className="mt-5 max-w-2xl text-base leading-8 text-base-300">
            I enjoy designing my work just as much as building the logic
            behind it — frontend and backend both scratch a different itch.
            But what actually keeps me motivated is seeing something I built
            genuinely help someone, even in a small way.
          </p>
        </section>
      </SectionReveal>

      <SectionReveal delay={0.15}>
        <section className="border-t border-base-800 py-14">
          <SectionHeading>How I work</SectionHeading>
          <div className="mt-6 space-y-4">
            {workPrinciples.map((item) => (
              <motion.div
                key={item.title}
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
                className="cursor-default rounded-lg border-l-2 border-base-700 py-2 pl-5 transition-colors hover:border-white"
              >
                <p className="text-base font-medium text-white">{item.title}</p>
                <p className="mt-1.5 max-w-xl text-sm leading-7 text-base-300">
                  {item.body}
                </p>
              </motion.div>
            ))}
          </div>
        </section>
      </SectionReveal>

      <SectionReveal delay={0.2}>
        <section className="border-t border-base-800 py-14">
          <SectionHeading>Outside of code</SectionHeading>
          <p className="mt-5 max-w-2xl text-base leading-8 text-base-300">
            I'm into gaming, and I'm currently learning WordPress to round out
            my skill set for future opportunities.
          </p>

          <Link
            href="/contact"
            className="group mt-8 inline-flex min-h-11 items-center gap-2 font-mono text-sm uppercase tracking-[0.2em] text-white transition-colors hover:text-base-300"
          >
            get_in_touch
            <ArrowRight
              size={16}
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          </Link>
        </section>
      </SectionReveal>
    </main>
  );
}