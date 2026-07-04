"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";

const links = [
  { href: "/", label: "home()" },
  { href: "/about", label: "about()" },
  { href: "/projects", label: "projects()" },
  { href: "/contact", label: "contact()" },
];

export function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <nav className={`sticky top-0 z-50 border-b border-base-800 transition-all duration-300 ${scrolled ? "bg-black py-2 backdrop-blur-sm" : "bg-black py-3"}`}>
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3 text-white">
          <Image
            src="/profile.jpg"
            alt="Kenneth Caducoy"
            width={40}
            height={40}
            className="h-10 w-10 rounded-full border border-base-800 object-cover"
          />
          <span
            style={{ fontFamily: "var(--font-pixel)" }}
            className="text-xs tracking-tight text-white sm:text-sm"
          >
            KD_
          </span>
        </Link>
        <div className="hidden items-center gap-6 md:flex">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`group relative font-mono text-[11px] uppercase tracking-[0.24em] transition-colors ${isActive ? "text-white" : "text-base-300 hover:text-white"}`}
              >
                {link.label}
                <span className={`absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-white transition-transform duration-200 group-hover:scale-x-100 ${isActive ? "scale-x-100" : ""}`} />
              </Link>
            );
          })}
          <a
            href="/KENNETH_DARON_CADUCOY_RESUME.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download
            className="inline-flex min-h-[44px] items-center justify-center rounded-full border border-base-800 bg-base-950/70 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.24em] text-base-100 transition-colors hover:border-white hover:text-white"
          >
            Resume ↓
          </a>
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen((value) => !value)}
          aria-label="Toggle navigation"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-base-800 bg-base-950/70 text-white transition-colors hover:border-white md:hidden"
        >
          {mobileOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen ? (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="border-t border-base-800 bg-black px-4 py-4 md:hidden"
          >
            <div className="mx-auto flex max-w-6xl flex-col gap-2">
              {links.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`min-h-[44px] rounded-none border border-transparent px-3 py-2 font-mono text-[11px] uppercase tracking-[0.24em] transition-colors ${isActive ? "border-base-800 bg-base-950 text-white" : "text-base-300 hover:border-base-800 hover:bg-base-950 hover:text-white"}`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <a
                href="/KENNETH_DARON_CADUCOY_RESUME.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download
                className="mt-1 inline-flex min-h-[44px] items-center justify-center rounded-full border border-base-800 bg-base-950/70 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.24em] text-base-100 transition-colors hover:border-white hover:text-white"
              >
                Resume ↓
              </a>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </nav>
  );
}
