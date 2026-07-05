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
    <div className="flex shrink-0 items-center gap-2 sm:gap-3">
      <span className="text-xs sm:text-sm text-base-400">{item.icon}</span>
      <span className="whitespace-nowrap font-semibold text-xs sm:text-sm md:text-base text-base-100">{item.name}</span>
    </div>
  );
}

export function TechStack() {
  const looped = [...techItems, ...techItems];

  return (
    <>
      <div className="mb-10">
        <p className="mb-2 font-mono text-[11px] uppercase tracking-[0.24em] text-base-500">
          // stack
        </p>
        <h2 className="text-3xl font-semibold text-white md:text-4xl">Tech Stack</h2>
      </div>

      <div className="group relative overflow-hidden px-4 sm:left-1/2 sm:right-1/2 sm:-mx-[50vw] sm:w-screen">
        <div className="relative left-0 right-0 h-px w-full bg-base-800 sm:left-1/2 sm:right-1/2 sm:-mx-[50vw] sm:w-screen" />
        <div className="flex w-max min-w-full animate-marquee items-center gap-3 sm:gap-5 md:gap-8 py-3 sm:py-4 md:py-6 group-hover:[animation-play-state:paused]">
          {looped.map((item, i) => (
            <TechCard key={`${item.name}-${i}`} item={item} />
          ))}
        </div>
        <div className="relative left-0 right-0 h-px w-full bg-base-800 sm:left-1/2 sm:right-1/2 sm:-mx-[50vw] sm:w-screen" />
      </div>
    </>
  );
}