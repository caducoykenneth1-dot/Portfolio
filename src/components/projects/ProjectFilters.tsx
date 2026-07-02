"use client";

import { useMemo, useState } from "react";
import type { ProjectRecord } from "@/src/server/models/Project";
import { ProjectGrid } from "@/src/components/projects/ProjectGrid";

interface ProjectFiltersProps {
  projects: ProjectRecord[];
}

export function ProjectFilters({ projects }: ProjectFiltersProps) {
  const [selectedTag, setSelectedTag] = useState<string>("all");

  const tags = useMemo(() => {
    const set = new Set<string>();
    projects.forEach((project) => project.tags.forEach((tag) => set.add(tag)));
    return ["all", ...Array.from(set)];
  }, [projects]);

  const filteredProjects = useMemo(() => {
    if (selectedTag === "all") return projects;
    return projects.filter((project) => project.tags.includes(selectedTag));
  }, [projects, selectedTag]);

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <button
            key={tag}
            type="button"
            onClick={() => setSelectedTag(tag)}
            className={`border px-3 py-2 font-mono text-[10px] uppercase tracking-[0.24em] ${selectedTag === tag ? "border-white bg-white text-black" : "border-base-800 bg-base-950 text-base-300"}`}
          >
            {tag}
          </button>
        ))}
      </div>
      <ProjectGrid projects={filteredProjects} />
    </div>
  );
}
