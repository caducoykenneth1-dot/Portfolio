import Link from "next/link";

export function CallToAction() {
  return (
    <section className="space-y-4 border-t border-base-800 px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
      <h2 className="font-mono text-[11px] uppercase tracking-[0.24em] text-base-300">// next_step</h2>
      <p className="max-w-2xl text-sm leading-7 text-base-300 sm:text-base">Got a project in mind?</p>
      <Link href="/contact" className="inline-flex min-h-[44px] items-center border border-base-800 bg-base-900 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.24em] text-white transition hover:border-white hover:bg-black">
        contact_me()
      </Link>
    </section>
  );
}
