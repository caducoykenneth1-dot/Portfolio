export interface ProjectRecord {
  id: string;
  slug: string;
  title: string;
  description: string;
  imageUrl: string | null;
  liveUrl: string | null;
  repoUrl: string | null;
  tags: string[];
  featured: boolean;
  createdAt: Date;
}
