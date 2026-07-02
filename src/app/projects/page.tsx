import { ProjectFilters } from "@/src/components/projects/ProjectFilters";
import { projects } from "@/src/lib/projects";

export default async function ProjectsPage() {
  return (
    <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col px-4 py-8 sm:px-6 lg:px-8">
      <section className="space-y-4 border-b border-base-800 pb-8">
        <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-base-500">selected work</p>
        <h1 className="text-3xl font-semibold text-white sm:text-4xl">Projects</h1>
        <p className="max-w-2xl text-sm leading-7 text-base-300">
          A compact archive of product and interface work, organized by the systems and stories behind each launch.
        </p>
      </section>
      <div className="py-8">
        <ProjectFilters projects={projects} />
      </div>
    </main>
  );
}
