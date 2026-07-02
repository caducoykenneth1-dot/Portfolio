import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col px-4 py-8 sm:px-6 lg:px-8">
      <section className="space-y-5 border-b border-base-800 pb-8">
        <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-base-500">about</p>
        <h1 className="text-3xl font-semibold text-white sm:text-4xl">Quiet systems, sharp interfaces.</h1>
        <p className="max-w-3xl text-sm leading-7 text-base-300">
          I am a product-minded developer focused on crafting thoughtful interfaces that balance clarity, speed, and long-term maintainability. My work spans frontend build systems, design systems, and the small interactions that make software feel calm and useful.
        </p>
        <p className="max-w-3xl text-sm leading-7 text-base-300">
          I enjoy building portfolios, internal tools, and launch-critical experiences with a strong emphasis on architecture, motion, and polished detail.
        </p>
        <Link href="/contact" className="inline-flex font-mono text-[11px] uppercase tracking-[0.24em] text-base-300 transition hover:text-white">
          start_a_conversation →
        </Link>
      </section>
    </main>
  );
}
