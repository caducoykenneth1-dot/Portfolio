import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { ContactForm } from "@/src/components/contact/ContactForm";

const details = [
  {
    href: "mailto:caducoykenneth1@gmail.com",
    label: "caducoykenneth1@gmail.com",
    icon: <Mail size={16} strokeWidth={1.5} />,
  },
  {
    href: "https://github.com/caducoykenneth1-dot",
    label: "github.com/caducoykenneth1-dot",
    icon: <FaGithub size={16} />,
  },
  {
    href: "https://www.linkedin.com/in/caducoy-kenneth-d-47943840b/",
    label: "linkedin.com/in/caducoy-kenneth-d-47943840b/",
    icon: <FaLinkedin size={16} />,
  },
];

export default function ContactPage() {
  return (
    <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col px-4 py-8 sm:px-6 lg:px-8">
      <section className="space-y-4 border-b border-base-800 pb-8">
        <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-base-500">contact</p>
        <h1 className="text-3xl font-semibold text-white sm:text-4xl">Reach out</h1>
        <p className="max-w-2xl text-sm leading-7 text-base-300">
          If you need a thoughtful frontend build, a polished portfolio, or a product experience that feels considered from the first click to the last, send a note.
        </p>
        <div className="flex flex-col gap-2">
          {details.map((detail) => (
            <a
              key={detail.label}
              href={detail.href}
              target={detail.href.startsWith("mailto:") ? undefined : "_blank"}
              rel={detail.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
              className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.24em] text-base-300 transition hover:text-white"
            >
              {detail.icon}
              <span>{detail.label}</span>
            </a>
          ))}
        </div>
      </section>
      <div className="py-8">
        <ContactForm />
      </div>
    </main>
  );
}