"use client";

import * as SiIcons from "react-icons/si";
import { Code2 } from "lucide-react";

type TechItem = {
  name: string;
  icon: React.ReactNode;
};

const mk = (iconName: string): React.ReactNode => {
  // @ts-ignore - access by key on namespace; if missing, fall back to Code2
  const Icon = SiIcons[iconName];
  return Icon ? <Icon /> : <Code2 />;
};

const techItems: TechItem[] = [
  { name: "TypeScript", icon: mk("SiTypescript") },
  { name: "JavaScript", icon: mk("SiJavascript") },
  { name: "PHP", icon: mk("SiPhp") },
  { name: "HTML", icon: mk("SiHtml5") },
  { name: "CSS", icon: mk("SiCss") },
  { name: "C++", icon: mk("SiCplusplus") },
  { name: "React", icon: mk("SiReact") },
  { name: "Next.js", icon: mk("SiNextdotjs") },
  { name: "Twig", icon: <Code2 /> },
  { name: "Tailwind CSS", icon: mk("SiTailwindcss") },
  { name: "Framer Motion", icon: mk("SiFramer") },
  { name: "Symfony", icon: mk("SiSymfony") },
  { name: "Doctrine ORM", icon: <Code2 /> },
  { name: "Prisma", icon: mk("SiPrisma") },
  { name: "Supabase", icon: mk("SiSupabase") },
  { name: "PostgreSQL", icon: mk("SiPostgresql") },
  { name: "Git", icon: mk("SiGit") },
  { name: "GitHub", icon: mk("SiGithub") },
  { name: "Docker", icon: mk("SiDocker") },
  { name: "VS Code", icon: <Code2 /> },
  { name: "Vercel", icon: mk("SiVercel") },
  { name: "ChatGPT", icon: mk("SiOpenai") },
  { name: "Claude", icon: <Code2 /> },
  { name: "Lovable", icon: <Code2 /> },
];

function TechCard({ item }: { item: TechItem }) {
  return (
    <div className="flex shrink-0 items-center gap-3 rounded-xl border border-base-800 bg-base-950/60 px-5 py-3 mx-2">
      <span className="text-xl text-base-300">{item.icon}</span>
      <span className="whitespace-nowrap font-mono text-sm text-base-200">{item.name}</span>
    </div>
  );
}

export function TechStack() {
  const looped = [...techItems, ...techItems];

  return (
    <section className="relative overflow-hidden py-16">
      <div className="mb-10 px-4 sm:px-6 lg:px-8">
        <p className="mb-2 font-mono text-[11px] uppercase tracking-[0.24em] text-base-500">
          // stack
        </p>
        <h2 className="text-3xl font-semibold text-white md:text-4xl">Tech Stack</h2>
      </div>

      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-black to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-black to-transparent" />

      <div className="group flex overflow-hidden">
        <div className="flex animate-marquee group-hover:[animation-play-state:paused]">
          {looped.map((item, i) => (
            <TechCard key={`${item.name}-${i}`} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
