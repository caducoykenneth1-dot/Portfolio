import Link from "next/link";
import { motion } from "framer-motion";
import type { ProjectRecord } from "@/src/server/models/Project";
import { Badge } from "@/src/components/ui/Badge";

interface ProjectCardProps {
  project: ProjectRecord;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.article
      whileHover={{ y: -4, borderColor: "#ffffff" }}
      transition={{ duration: 0.2 }}
      className="border border-base-800 bg-base-950/80 p-5 shadow-[0_0_0_1px_rgba(255,255,255,0.02)]"
    >
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <Badge key={tag}>{tag}</Badge>
        ))}
      </div>
      <h3 className="mt-4 text-xl font-semibold text-white md:text-2xl">{project.title}</h3>
      <p className="mt-3 text-sm leading-7 text-base-300 md:text-base">{project.description}</p>
      <Link href={`/projects/${project.slug}`} className="mt-5 inline-flex min-h-[44px] items-center font-mono text-[11px] uppercase tracking-[0.24em] text-base-300 transition hover:text-white">
        read_more →
      </Link>
    </motion.article>
  );
}
