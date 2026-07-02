import { ProjectRepository } from "@/src/server/repositories/ProjectRepository";
import type { ProjectRecord } from "@/src/server/models/Project";

export class ProjectService {
  constructor(private readonly repository = new ProjectRepository()) {}

  async getHomepageProjects(): Promise<ProjectRecord[]> {
    try {
      return await this.repository.findFeatured(4);
    } catch {
      return [];
    }
  }

  async getAllProjects(): Promise<ProjectRecord[]> {
    try {
      return await this.repository.findAll();
    } catch {
      return [];
    }
  }

  async getProjectDetail(slug: string): Promise<ProjectRecord | null> {
    try {
      return await this.repository.findBySlug(slug);
    } catch {
      return null;
    }
  }
}
