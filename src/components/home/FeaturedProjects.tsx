import Link from "next/link";
import type { Project } from "@/src/lib/projects";
import { ProjectCard } from "@/src/components/projects/ProjectCard";

interface FeaturedProjectsProps {
  projects: Project[];
}

export function FeaturedProjects({ projects }: FeaturedProjectsProps) {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-base-500">
            // featured_projects
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-white sm:text-3xl">
            Selected work with a clear product lens.
          </h2>
        </div>
        <Link
          href="/projects"
          className="inline-flex min-h-[44px] items-center font-mono text-[11px] uppercase tracking-[0.24em] text-base-300 transition hover:text-white"
        >
          view_all →
        </Link>
      </div>

      {projects.length === 0 ? (
        <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-base-300">
          No projects yet
        </p>
      ) : (
        <div className="grid gap-4 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      )}
    </div>
  );
}