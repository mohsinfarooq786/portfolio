"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "motion/react";
import DeviceFrame from "@/components/work/DeviceFrame";
import { ArrowUpRight, ExternalLink, ArrowRight, Smartphone } from "lucide-react";
import { GithubIcon } from "@/components/icons/CustomIcons";
import { projectImageHoverVariants } from "@/lib/animations";

export default function ProjectCard({ project, index }) {
  const router = useRouter();
  const indexStr = index < 9 ? `0${index + 1}` : `${index + 1}`;

  const handleCardClick = (e) => {
    if (e.target.closest("a") || e.target.closest("button")) {
      return;
    }
    router.push(`/work/${project.slug}`);
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.15 }}
      transition={{ duration: 0.6, delay: (index % 2) * 0.12 }}
      onClick={handleCardClick}
      onKeyDown={(e) => {
        if (e.key === "Enter" && !e.target.closest("a")) {
          router.push(`/work/${project.slug}`);
        }
      }}
      tabIndex={0}
      role="link"
      aria-label={`View ${project.title} case study`}
      className="card-glow-interactive group flex flex-col justify-between p-6 sm:p-8 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
    >
      <div>
        <div className="flex items-center justify-between pb-4 border-b border-white/[0.06] mb-6">
          <div className="flex items-center gap-3">
            <span className="font-mono-code text-xs font-semibold text-accent">
              {indexStr}
            </span>
            <span className="h-3 w-[1px] bg-white/20" />
            <span className="font-mono-code text-xs text-[#94949C] uppercase">
              {project.category}
            </span>
          </div>

          <span className="font-mono-code text-xs text-[#71717A]">
            {project.year}
          </span>
        </div>

        <Link
          href={`/work/${project.slug}`}
          className="block mb-6 overflow-hidden rounded-xl focus:outline-none"
          aria-label={`View ${project.title} preview and case study`}
        >
          <motion.div
            variants={projectImageHoverVariants}
            initial="rest"
            whileHover="hover"
          >
            <DeviceFrame
              type={project.mockupType}
              domain={project.mockupDomain}
              title={project.title}
              coverImage={project.coverImage}
              projectSlug={project.slug}
            />
          </motion.div>
        </Link>

        <div className="mb-4">
          <Link
            href={`/work/${project.slug}`}
            className="group/title inline-block focus:outline-none"
          >
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-white group-hover/title:text-accent transition-colors duration-200">
              {project.title}
            </h3>
          </Link>
          <p className="mt-1 font-mono-code text-xs text-accent/90">
            {project.subtitle}
          </p>
          <p className="mt-3 text-sm text-[#A1A1AA] leading-relaxed">
            {project.shortDescription}
          </p>
        </div>

        <div className="flex flex-wrap gap-1.5 my-6">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="font-mono-code text-[11px] px-2.5 py-1 rounded bg-white/[0.03] border border-white/[0.06] text-white/80"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="pt-4 border-t border-white/[0.06] flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-3">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-1.5 text-xs text-white/70 hover:text-white transition-colors"
              aria-label={`Visit live site for ${project.title}`}
            >
              <ExternalLink className="w-3.5 h-3.5 text-accent" />
              <span>Visit Site</span>
            </a>
          )}

          {project.playStoreUrl && (
            <a
              href={project.playStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-1.5 text-xs text-white/70 hover:text-white transition-colors"
              aria-label={`View ${project.title} on Google Play`}
            >
              <Smartphone className="w-3.5 h-3.5 text-emerald-400" />
              <span>Google Play</span>
            </a>
          )}

          {project.appStoreUrl && (
            <a
              href={project.appStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-1.5 text-xs text-white/70 hover:text-white transition-colors"
              aria-label={`View ${project.title} on Apple App Store`}
            >
              <ExternalLink className="w-3.5 h-3.5 text-sky-400" />
              <span>App Store</span>
            </a>
          )}

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-1.5 text-xs text-white/70 hover:text-white transition-colors"
              aria-label={`View source code for ${project.title} on GitHub`}
            >
              <GithubIcon className="w-3.5 h-3.5 text-white/70" />
              <span>Code</span>
            </a>
          )}
        </div>

        <Link
          href={`/work/${project.slug}`}
          className="flex items-center gap-1.5 text-xs font-semibold text-white group-hover:text-accent transition-colors"
          aria-label={`Read ${project.title} case study`}
        >
          <span>Case Study</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
        </Link>
      </div>
    </motion.article>
  );
}
