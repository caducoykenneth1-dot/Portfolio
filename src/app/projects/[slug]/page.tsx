import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Badge } from "@/src/components/ui/Badge";
import { projects } from "@/src/lib/projects";

interface ProjectDetailPageProps {
  params: Promise<{ slug: string }>;
}

function findProject(slug: string) {
  return projects.find((project) => project.slug === slug) ?? null;
}

export async function generateMetadata({ params }: ProjectDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = findProject(slug);

  if (!project) {
    return { title: "Project not found" };
  }

  return {
    title: `${project.title} — Portfolio`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = findProject(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col px-4 py-8 sm:px-6 lg:px-8">
      <section className="space-y-4 border-b border-base-800 pb-8">
        <Link href="/projects" className="font-mono text-[11px] uppercase tracking-[0.24em] text-base-500 transition hover:text-white">
          ← back_to_projects
        </Link>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>
        <h1 className="text-3xl font-semibold text-white sm:text-4xl">{project.title}</h1>
        <p className="max-w-3xl text-sm leading-7 text-base-300">{project.description}</p>
        <div className="flex flex-wrap gap-3">
          {project.liveUrl ? (
            <a href={project.liveUrl} target="_blank" rel="noreferrer" className="font-mono text-[11px] uppercase tracking-[0.24em] text-base-300 transition hover:text-white">
              live_site →
            </a>
          ) : null}
        {project.githubUrl ? (
            <a href={project.githubUrl} target="_blank" rel="noreferrer" className="font-mon...">
                repository →
            </a>
            ) : null}
        </div>
      </section>
    </main>
  );
}
