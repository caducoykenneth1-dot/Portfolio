import { prisma } from "@/src/lib/prisma";
import type { ContactMessageRecord } from "@/src/server/models/ContactMessage";

export class ContactRepository {
  async create(data: { name: string; email: string; message: string }): Promise<ContactMessageRecord> {
    return prisma.contactMessage.create({
      data,
    }) as Promise<ContactMessageRecord>;
  }
}
