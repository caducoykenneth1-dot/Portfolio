import { prisma } from "@/src/lib/prisma";
import type { ProjectRecord } from "@/src/server/models/Project";

export class ProjectRepository {
  async findAll(): Promise<ProjectRecord[]> {
    return prisma.project.findMany({
      orderBy: { createdAt: "desc" },
    }) as Promise<ProjectRecord[]>;
  }

  async findFeatured(limit = 4): Promise<ProjectRecord[]> {
    return prisma.project.findMany({
      where: { featured: true },
      take: limit,
      orderBy: { createdAt: "desc" },
    }) as Promise<ProjectRecord[]>;
  }

  async findBySlug(slug: string): Promise<ProjectRecord | null> {
    return prisma.project.findUnique({
      where: { slug },
    }) as Promise<ProjectRecord | null>;
  }
}
