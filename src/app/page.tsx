import { Hero } from "@/src/components/home/Hero";
import { FeaturedProjects } from "@/src/components/home/FeaturedProjects";
import { TechStack } from "@/src/components/home/TechStack";
import { AboutPreview } from "@/src/components/home/AboutPreview";
import { CallToAction } from "@/src/components/home/CallToAction";
import { SectionReveal } from "@/src/components/home/SectionReveal";
import { ProjectService } from "@/src/server/services/ProjectService";

export default async function HomePage() {
  const service = new ProjectService();
  const projects = await service.getHomepageProjects();

  return (
    <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col px-4 py-8 sm:px-6 lg:px-8">
      <Hero />
      <SectionReveal>
        <FeaturedProjects projects={projects} />
      </SectionReveal>
      <SectionReveal delay={0.05}>
        <TechStack />
      </SectionReveal>
      <SectionReveal delay={0.1}>
        <AboutPreview />
      </SectionReveal>
      <SectionReveal delay={0.15}>
        <CallToAction />
      </SectionReveal>
    </main>
  );
}
