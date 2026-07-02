import { ContactRepository } from "@/src/server/repositories/ContactRepository";
import { contactSchema, type ContactFormData } from "@/src/lib/validators";
import type { ContactMessageRecord } from "@/src/server/models/ContactMessage";

export class ContactService {
  constructor(private readonly repository = new ContactRepository()) {}

  async submitMessage(input: ContactFormData): Promise<ContactMessageRecord> {
    const parsed = contactSchema.parse(input);
    return this.repository.create(parsed);
  }
}
