export type Project = {
  id: string;
  slug: string;
  title: string;
  description: string;
  tags: string[];
  featured: boolean;
  createdAt: string;
  liveUrl?: string | null;
  repoUrl?: string | null;
  imageUrl?: string | null;
};

export const projects: Project[] = [
  {
    id: "project-1",
    slug: "portfolio-redesign",
    title: "Portfolio Redesign",
    description: "A modern personal portfolio built with Next.js, Tailwind CSS, and subtle motion.",
    tags: ["Next.js", "Tailwind", "Animation"],
    featured: true,
    createdAt: "2026-06-01",
    liveUrl: "https://example.com",
    repoUrl: "https://github.com/your-username/portfolio",
  },
  {
    id: "project-2",
    slug: "startup-landing-page",
    title: "Startup Landing Page",
    description: "A landing page design focused on conversion, clarity, and product storytelling.",
    tags: ["React", "UX", "Design"],
    featured: true,
    createdAt: "2025-12-15",
    liveUrl: "https://example.com",
    repoUrl: "https://github.com/your-username/startup-landing",
  },
  {
    id: "project-3",
    slug: "dashboard-analytics",
    title: "Dashboard Analytics",
    description: "An analytics dashboard showcasing data visualization and interactive filters.",
    tags: ["Data", "UI", "Dashboard"],
    featured: true,
    createdAt: "2025-09-20",
    liveUrl: "https://example.com",
    repoUrl: "https://github.com/your-username/dashboard-analytics",
  },
  {
    id: "project-4",
    slug: "ecommerce-experience",
    title: "Ecommerce Experience",
    description: "A polished ecommerce experience with product cards, checkout flow, and responsive layout.",
    tags: ["Commerce", "React", "Mobile"],
    featured: true,
    createdAt: "2025-07-10",
    liveUrl: "https://example.com",
    repoUrl: "https://github.com/your-username/ecommerce-experience",
  },
  {
    id: "project-5",
    slug: "design-system-library",
    title: "Design System Library",
    description: "A reusable design system with tokens, components, and documentation for teams.",
    tags: ["Design System", "Components", "Accessibility"],
    featured: false,
    createdAt: "2025-05-05",
    liveUrl: "https://example.com",
    repoUrl: "https://github.com/your-username/design-system",
  },
];
