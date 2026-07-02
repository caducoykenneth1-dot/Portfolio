import Link from "next/link";
import type { Project } from "@/src/lib/projects";
import { ProjectCard } from "@/src/components/projects/ProjectCard";

interface FeaturedProjectsProps {
  projects: Project[];
}

export function FeaturedProjects({ projects }: FeaturedProjectsProps) {
  return (
    <section className="relative overflow-hidden px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
      <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.9) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.9) 1px, transparent 1px)", backgroundSize: "36px 36px" }} />
      <div className="relative z-10 space-y-6 rounded-none border border-base-800 bg-black/80 p-4 sm:p-6 md:p-8">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-base-500">// featured_projects</p>
            <h2 className="mt-2 text-2xl font-semibold text-white sm:text-3xl">Selected work with a clear product lens.</h2>
          </div>
          <Link href="/projects" className="inline-flex min-h-[44px] items-center font-mono text-[11px] uppercase tracking-[0.24em] text-base-300 transition hover:text-white">
            view_all →
          </Link>
        </div>

        {projects.length === 0 ? (
          <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-base-300">No projects yet</p>
        ) : (
          <div className="grid gap-4 md:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
