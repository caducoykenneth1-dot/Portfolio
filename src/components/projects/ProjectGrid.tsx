import { ProjectCard } from "@/src/components/projects/ProjectCard";
import type { Project } from "@/src/lib/projects";

interface ProjectGridProps {
  projects: Project[];
}

export function ProjectGrid({ projects }: ProjectGridProps) {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      {projects.map((project) => (
        <ProjectCard key={project.slug} project={project} />
      ))}
    </div>
  );
}
