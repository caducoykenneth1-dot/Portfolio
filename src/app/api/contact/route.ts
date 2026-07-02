import { NextResponse } from "next/server";
import { ContactService } from "@/src/server/services/ContactService";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const service = new ContactService();
    await service.submitMessage(body);
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid payload" }, { status: 400 });
  }
}
