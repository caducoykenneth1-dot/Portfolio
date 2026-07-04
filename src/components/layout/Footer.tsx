import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const socials = [
  {
    href: "https://github.com/caducoykenneth1-dot",
    label: "GitHub",
    icon: <FaGithub size={18} className="text-white" />,
  },
  {
    href: "https://www.linkedin.com/in/caducoy-kenneth-d-47943840b/",
    label: "LinkedIn",
    icon: <FaLinkedin size={18} className="text-white" />,
  },
  {
    href: "mailto:caducoykenneth1@gmail.com",
    label: "Email",
    icon: <Mail size={18} strokeWidth={1.5} className="text-white" />,
  },
];

export function Footer() {
  return (
    <footer className="border-t border-base-800 bg-black">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-6 text-sm text-base-300 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-base-500">
          built with next.js + web3forms
        </p>
        <div className="flex items-center gap-3">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target={social.href.startsWith("mailto:") ? undefined : "_blank"}
              rel={social.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
              aria-label={social.label}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-base-800 bg-base-950/70 transition-colors hover:border-white hover:bg-black"
            >
              {social.icon}
            </a>
          ))}
        </div>
        <p className="text-base-300">© 2026 — available for thoughtful product work.</p>
      </div>
    </footer>
  );
}