import { Hero } from "@/src/components/home/Hero";
import { FeaturedProjects } from "@/src/components/home/FeaturedProjects";
import { TechStack } from "@/src/components/home/TechStack";
import { AboutPreview } from "@/src/components/home/AboutPreview";
import { CallToAction } from "@/src/components/home/CallToAction";
import { SectionReveal } from "@/src/components/home/SectionReveal";
import { Section } from "@/src/components/layout/Section";
import { projects } from "@/src/lib/projects";

export default async function HomePage() {
  const featuredProjects = projects.filter((project) => project.featured).slice(0, 4);

  return (
    <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col px-4 py-8 sm:px-6 lg:px-8">
      <SectionReveal>
        <Section>
          <Hero />
        </Section>
      </SectionReveal>

      <SectionReveal>
        <Section>
          <FeaturedProjects projects={featuredProjects} />
        </Section>
      </SectionReveal>

      <SectionReveal delay={0.05}>
        <Section borderClassName="bg-base-800/40">
          <TechStack />
        </Section>
      </SectionReveal>

      <SectionReveal delay={0.1}>
        <Section>
          <AboutPreview />
        </Section>
      </SectionReveal>

      <SectionReveal delay={0.15}>
        <Section noBorder>
          <CallToAction />
        </Section>
      </SectionReveal>
    </main>
  );
}
