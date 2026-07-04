export type Project = {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
  image: string;
};

export const projects: Project[] = [
  {
    slug: "sibulan-market-pay",
    title: "Sibulan Market Pay",
    description:
      "A digital payment solution built for local market vendors in Sibulan, streamlining transactions and giving small sellers a simple, reliable way to accept payments.",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    liveUrl: "https://sibulan-market-pay-qyaf.vercel.app/",
    githubUrl: "https://github.com/caducoykenneth1-dot/sibulan-market-pay",
    featured: true,
    image: "/projects/sibulan-market-pay.png",
  },
  {
    slug: "kapid-portal",
    title: "Kapid Portal",
    description:
      "A web portal designed to centralize information and streamline access for its users, built with a focus on clarity and ease of navigation.",
    tags: ["Next.js", "TypeScript"],
    liveUrl: "https://kapid-portal.vercel.app/",
    githubUrl: "https://github.com/caducoykenneth1-dot/kapid-portal",
    featured: true,
    image: "/projects/kapid-portal.png",
  },
];