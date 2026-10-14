"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { projects } from "@/data/projects";
import SectionHeading from "@/components/ui/SectionHeading";
import DeviceFrame from "@/components/work/DeviceFrame";
import { EASING } from "@/lib/animations";
import { ArrowUpRight, ArrowRight } from "lucide-react";

/**
 * Selected Projects Showcase
 * Direct visual reference: pamidordesign.co & gallery-play.be
 * 
 * Features:
 * - Interactive editorial project list with live expanding showcase
 * - Tactile row hover states with animated "Jump To Project" pill buttons
 * - High-fidelity device previews (Desktop Browser & Mobile Phone frames)
 * - View All Projects pill navigation button with live project count
 */
export default function SelectedProjects() {
  const featuredProjects = projects.filter((p) => p.featured);
  const [activeProjectId, setActiveProjectId] = useState(featuredProjects[0]?.id);

  const activeProject =
    featuredProjects.find((p) => p.id === activeProjectId) || featuredProjects[0];

  return (
    <section className="w-full py-20 sm:py-28" aria-label="Selected Projects">
      <div className="site-container">
        {/* Section Heading */}
        <SectionHeading
          index="01"
          tag="SELECTED WORK"
          title="Featured Projects & Case Studies"
          subtitle="A curated selection of production mobile applications, travel platforms, and digital marketplaces."
        />

        {/* Desktop Split View: Interactive Editorial List (Left) + Device Preview (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Editorial Project Rows (pamidordesign.co inspired) */}
          <div className="lg:col-span-6 flex flex-col divide-y divide-white/[0.08]">
            {featuredProjects.map((project, idx) => {
              const isActive = project.id === activeProjectId;

              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  onMouseEnter={() => setActiveProjectId(project.id)}
                  onClick={() => setActiveProjectId(project.id)}
                  className={`group py-7 cursor-pointer transition-all duration-300 rounded-xl px-2 ${isActive ? "opacity-100 bg-white/[0.02]" : "opacity-60 hover:opacity-90"
                    }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-4 sm:gap-6">
                      {/* Project Index */}
                      <span className="font-mono-code text-xs text-[#71717A] group-hover:text-accent transition-colors pt-1">
                        0{idx + 1}
                      </span>

                      <div>
                        {/* Title & Category */}
                        <Link
                          href={`/work/${project.slug}`}
                          className="group/title inline-block focus:outline-none"
                        >
                          <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white group-hover:text-accent group-hover/title:text-accent transition-colors duration-200">
                            {project.title}
                          </h3>
                        </Link>

                        <div className="flex flex-wrap items-center gap-3 mt-2 text-xs text-[#94949C]">
                          <span className="font-mono-code text-accent/90">
                            {project.category}
                          </span>
                          <span>•</span>
                          <span>{project.year}</span>
                          <span>•</span>
                          <span className="hidden sm:inline">
                            {project.role}
                          </span>
                        </div>

                        {/* Short Description */}
                        <p className="mt-3 text-sm text-[#A1A1AA] max-w-md line-clamp-2 leading-relaxed">
                          {project.shortDescription}
                        </p>

                        {/* Tech Pills */}
                        <div className="flex flex-wrap gap-2 mt-4">
                          {project.technologies.slice(0, 3).map((tech) => (
                            <span
                              key={tech}
                              className="font-mono-code text-[11px] px-2.5 py-0.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-white/70"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Jump To Project Button (pamidordesign.co inspired) */}
                    <Link
                      href={`/work/${project.slug}`}
                      className="shrink-0 flex items-center justify-center p-3 rounded-full border border-white/10 bg-white/[0.03] text-white/70 group-hover:border-accent group-hover:bg-accent group-hover:text-white transition-all duration-300 focus:outline-none"
                      aria-label={`View ${project.title} case study`}
                    >
                      <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
                    </Link>
                  </div>

                  {/* Inline Mobile Preview for Small Screens */}
                  <div className="mt-6 lg:hidden block">
                    <Link
                      href={`/work/${project.slug}`}
                      className="block focus:outline-none"
                      aria-label={`View ${project.title} case study`}
                    >
                      <DeviceFrame
                        type={project.mockupType}
                        domain={project.mockupDomain}
                        title={project.title}
                        coverImage={project.coverImage}
                        projectSlug={project.slug}
                      />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Right Column: Live Sticky Showcase Preview on Desktop */}
          <div className="hidden lg:block lg:col-span-6 sticky top-28">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProject.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.45, ease: EASING.smoothOut }}
                className="card-glow-interactive flex flex-col gap-6 p-6 cursor-pointer"
              >
                {/* Active Showcase Header */}
                <div className="flex items-center justify-between pb-3 border-b border-white/[0.06]">
                  <div>
                    <span className="font-mono-code text-xs text-accent uppercase tracking-wider">
                      {activeProject.category}
                    </span>
                    <h4 className="font-display text-xl text-white font-bold">
                      {activeProject.title}
                    </h4>
                  </div>

                  <Link
                    href={`/work/${activeProject.slug}`}
                    className="flex items-center gap-1.5 text-xs text-white/80 hover:text-white px-3 py-1.5 rounded-full bg-white/[0.05] border border-white/10 hover:border-white/30 transition-all"
                  >
                    <span>Read Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5 text-accent" />
                  </Link>
                </div>

                <Link
                  href={`/work/${activeProject.slug}`}
                  className="block focus:outline-none"
                  aria-label={`View ${activeProject.title} case study`}
                >
                  <DeviceFrame
                    type={activeProject.mockupType}
                    domain={activeProject.mockupDomain}
                    title={activeProject.title}
                    coverImage={activeProject.coverImage}
                    projectSlug={activeProject.slug}
                  />
                </Link>

                {activeProject.stats && activeProject.stats.length > 0 && (
                  <div className="grid grid-cols-3 gap-3 pt-3 border-t border-white/[0.06]">
                    {activeProject.stats.map((stat) => (
                      <div key={stat.label} className="flex flex-col">
                        <span className="text-[11px] text-[#71717A] font-mono-code uppercase">
                          {stat.label}
                        </span>
                        <span className="font-display text-base font-bold text-white">
                          {stat.value}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* View All Projects Button (douglus.site pill-navigation inspired) */}
        <div className="mt-16 flex justify-center">
          <Link
            href="/work"
            className="group flex items-center gap-4 px-8 py-4 rounded-full border border-white/15 bg-white/[0.03] hover:border-white/40 hover:bg-white/[0.08] transition-all duration-300"
            aria-label="View all projects in archive"
          >
            <span className="text-xs uppercase tracking-widest font-semibold text-white">
              View All Projects
            </span>
            <span className="font-mono-code text-xs font-bold px-2 py-0.5 rounded-full bg-accent text-white transition-transform group-hover:scale-105">
              0{projects.length}
            </span>
            <ArrowRight className="w-4 h-4 text-white/70 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
