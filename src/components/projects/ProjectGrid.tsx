import { ProjectCard } from "@/src/components/projects/ProjectCard";
import type { ProjectRecord } from "@/src/server/models/Project";

interface ProjectGridProps {
  projects: ProjectRecord[];
}

export function ProjectGrid({ projects }: ProjectGridProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}
