"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { MouseEvent } from "react";
import { FaGithub } from "react-icons/fa";
import type { Project } from "@/src/lib/projects";
import { Badge } from "@/src/components/ui/Badge";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.article
      whileHover={{ y: -4, scale: 1.01, borderColor: "#ffffff", boxShadow: "0 0 30px rgba(255,255,255,0.08)" }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="group overflow-hidden rounded-2xl border border-base-800 bg-base-950/80 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] transition-all duration-300 hover:border-white"
    >
      <div className="flex h-full flex-col">
        <Link
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-1 flex-col"
        >
          <div className="relative aspect-[3/2] overflow-hidden">
            <Image
              src={project.image}
              alt={`${project.title} preview`}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          </div>

          <div className="flex flex-1 flex-col p-5 sm:p-6">
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <Badge key={tag}>{tag}</Badge>
              ))}
            </div>

            <h3 className="mt-4 text-xl font-semibold text-white md:text-2xl">{project.title}</h3>
            <p className="mt-3 text-sm leading-7 text-base-300 md:text-base">{project.description}</p>

            <div className="mt-6 flex items-center justify-between gap-3">
              <span className="inline-flex min-h-11 items-center font-mono text-[11px] uppercase tracking-[0.24em] text-base-300 transition group-hover:text-white">
                view_live →
              </span>
            </div>
          </div>
        </Link>

        <div className="px-5 pb-5 sm:px-6 sm:pb-6">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${project.title} repository`}
            onClick={(event: MouseEvent<HTMLAnchorElement>) => event.stopPropagation()}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-base-800 bg-base-950/70 transition-colors hover:border-white hover:bg-black"
          >
            <FaGithub size={18} className="text-white" />
          </a>
        </div>
      </div>
    </motion.article>
  );
}