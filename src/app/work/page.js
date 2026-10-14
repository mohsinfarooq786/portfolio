"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/work/ProjectCard";
import HeroBackground from "@/components/layout/HeroBackground";
import {
  LayoutGrid,
  Table as TableIcon,
  ArrowRight,
  ExternalLink,
  Smartphone,
} from "lucide-react";

const CATEGORIES = [
  "All",
  "Mobile Application",
  "Web Application",
  "Full-Stack System",
];

/**
 * Work / Projects Archive Route (/work)
 * Project-focused editorial grid and interactive archive table featuring category filtering,
 * view toggling, and instant navigation to project case studies.
 */
export default function WorkPage() {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [viewMode, setViewMode] = useState("grid"); // 'grid' | 'table'

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <div className="relative w-full pt-32 pb-24 sm:pt-40 sm:pb-32 overflow-hidden">
      {/* Art-Directed Multi-Layer Hero Background */}
      <HeroBackground />

      <div className="site-container">
        {/* Page Top Heading */}
        <div className="max-w-4xl mb-12 sm:mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono-code text-xs font-semibold text-accent tracking-widest uppercase">
              [WORK & ARCHIVE]
            </span>
            <span className="h-[1px] w-6 bg-accent/40" aria-hidden="true" />
            <span className="font-mono-code text-xs text-[#94949C] tracking-widest uppercase">
              {projects.length} PRODUCTION RELEASES
            </span>
          </div>

          <h1 className="font-display text-fluid-hero text-white tracking-tight leading-[1.05]">
            Engineered systems, tactile apps & creative web platforms.
          </h1>

          <p className="mt-6 text-fluid-lead text-[#A1A1AA] leading-relaxed max-w-2xl">
            Explore deep-dive case studies spanning mobile streaming media, animal & pet marketplaces, collaborative travel planning, on-demand island mobility, and multicategory classifieds.
          </p>
        </div>

        {/* Toolbar: Category Filters (Left) + View Mode Switcher (Right) */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 mb-12 border-b border-white/[0.08]">
          {/* Category Filters */}
          <div
            className="flex flex-wrap items-center gap-2.5"
            role="tablist"
            aria-label="Project categories"
          >
            {CATEGORIES.map((category) => {
              const isActive = selectedCategory === category;
              const count =
                category === "All"
                  ? projects.length
                  : projects.filter((p) => p.category === category).length;

              return (
                <button
                  key={category}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setSelectedCategory(category)}
                  className={`group flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-white text-black font-semibold shadow-lg shadow-white/10"
                      : "bg-white/[0.03] border border-white/[0.08] text-[#A1A1AA] hover:text-white hover:border-white/20"
                  }`}
                >
                  <span>{category}</span>
                  <span
                    className={`font-mono-code text-[10px] px-1.5 py-0.2 rounded-full ${
                      isActive
                        ? "bg-black/10 text-black font-bold"
                        : "bg-white/[0.06] text-[#71717A]"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* View Mode Toggle: Grid vs Table */}
          <div
            className="flex items-center gap-1.5 p-1 rounded-full bg-white/[0.03] border border-white/[0.08] self-start md:self-auto shrink-0"
            role="group"
            aria-label="Project display layout"
          >
            <button
              type="button"
              onClick={() => setViewMode("grid")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono-code transition-all duration-200 cursor-pointer ${
                viewMode === "grid"
                  ? "bg-white text-black font-semibold shadow-sm"
                  : "text-[#94949C] hover:text-white"
              }`}
              aria-pressed={viewMode === "grid"}
              title="Switch to Card Grid View"
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span>Grid</span>
            </button>

            <button
              type="button"
              onClick={() => setViewMode("table")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono-code transition-all duration-200 cursor-pointer ${
                viewMode === "table"
                  ? "bg-white text-black font-semibold shadow-sm"
                  : "text-[#94949C] hover:text-white"
              }`}
              aria-pressed={viewMode === "table"}
              title="Switch to Table / Archive View"
            >
              <TableIcon className="w-3.5 h-3.5" />
              <span>Table</span>
            </button>
          </div>
        </div>

        {/* Content Area: Grid View OR Table View */}
        {filteredProjects.length > 0 ? (
          viewMode === "grid" ? (
            /* 1. Grid of Fully-Clickable Project Cards */
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">
              {filteredProjects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                />
              ))}
            </div>
          ) : (
            /* 2. Interactive Projects Table: Every Row Navigates to Case Study on Click */
            <div className="w-full overflow-x-auto rounded-2xl border border-white/[0.08] bg-[#0c0c12]/80 backdrop-blur-md shadow-2xl">
              <table
                className="w-full text-left border-collapse"
                aria-label="Interactive Projects Archive Table"
              >
                <thead>
                  <tr className="border-b border-white/[0.08] text-[11px] font-mono-code uppercase tracking-wider text-[#71717A] bg-white/[0.02]">
                    <th scope="col" className="py-4 px-6">
                      #
                    </th>
                    <th scope="col" className="py-4 px-6 min-w-[280px]">
                      Project Name & Scope
                    </th>
                    <th scope="col" className="py-4 px-6">
                      Category
                    </th>
                    <th scope="col" className="py-4 px-6">
                      Platforms
                    </th>
                    <th scope="col" className="py-4 px-6">
                      Year
                    </th>
                    <th scope="col" className="py-4 px-6">
                      External
                    </th>
                    <th scope="col" className="py-4 px-6 text-right">
                      Case Study
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/[0.06]">
                  {filteredProjects.map((project, index) => {
                    const indexStr = index < 9 ? `0${index + 1}` : `${index + 1}`;
                    const platformStat =
                      project.stats?.find(
                        (s) => s.label === "Platforms" || s.label === "Platform"
                      )?.value || "Web & Mobile";

                    return (
                      <tr
                        key={project.id}
                        onClick={() => router.push(`/work/${project.slug}`)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter") {
                            router.push(`/work/${project.slug}`);
                          }
                        }}
                        tabIndex={0}
                        role="link"
                        aria-label={`Open ${project.title} case study`}
                        className="group hover:bg-white/[0.04] cursor-pointer transition-colors duration-200 focus:outline-none focus:bg-white/[0.06]"
                      >
                        {/* Index */}
                        <td className="py-5 px-6 font-mono-code text-xs text-accent font-semibold align-middle">
                          {indexStr}
                        </td>

                        {/* Project Name, Icon & Subtitle */}
                        <td className="py-5 px-6 align-middle">
                          <div className="flex items-center gap-4">
                            {project.iconImage && (
                              <div className="w-10 h-10 rounded-xl overflow-hidden bg-white/[0.04] border border-white/[0.08] shrink-0">
                                <Image
                                  src={project.iconImage}
                                  alt={`${project.title} icon`}
                                  width={40}
                                  height={40}
                                  className="w-full h-full object-cover"
                                />
                              </div>
                            )}
                            <div>
                              <Link
                                href={`/work/${project.slug}`}
                                onClick={(e) => e.stopPropagation()}
                                className="font-display text-base font-bold text-white group-hover:text-accent transition-colors block"
                              >
                                {project.title}
                              </Link>
                              <span className="text-xs text-[#94949C] line-clamp-1 max-w-sm font-normal mt-0.5">
                                {project.subtitle}
                              </span>
                            </div>
                          </div>
                        </td>

                        {/* Category */}
                        <td className="py-5 px-6 align-middle">
                          <span className="font-mono-code text-xs text-white/80 px-2.5 py-1 rounded bg-white/[0.03] border border-white/[0.06] whitespace-nowrap">
                            {project.category}
                          </span>
                        </td>

                        {/* Platforms */}
                        <td className="py-5 px-6 text-xs text-[#A1A1AA] font-mono-code align-middle whitespace-nowrap">
                          {platformStat}
                        </td>

                        {/* Year */}
                        <td className="py-5 px-6 font-mono-code text-xs text-[#71717A] align-middle">
                          {project.year}
                        </td>

                        {/* External Links */}
                        <td
                          className="py-5 px-6 align-middle"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <div className="flex items-center gap-2">
                            {project.liveUrl && (
                              <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-1.5 rounded-lg border border-white/10 hover:border-accent hover:bg-white/[0.06] text-white/70 hover:text-white transition-colors"
                                title="Visit Live Platform"
                                aria-label={`Visit ${project.title} live platform`}
                              >
                                <ExternalLink className="w-3.5 h-3.5 text-accent" />
                              </a>
                            )}
                            {project.playStoreUrl && (
                              <a
                                href={project.playStoreUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-1.5 rounded-lg border border-emerald-500/20 hover:border-emerald-400 bg-emerald-500/5 hover:bg-emerald-500/15 text-emerald-400 transition-colors"
                                title="Download on Google Play"
                                aria-label={`View ${project.title} on Google Play`}
                              >
                                <Smartphone className="w-3.5 h-3.5" />
                              </a>
                            )}
                            {project.appStoreUrl && (
                              <a
                                href={project.appStoreUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-1.5 rounded-lg border border-sky-500/20 hover:border-sky-400 bg-sky-500/5 hover:bg-sky-500/15 text-sky-400 transition-colors"
                                title="Download on Apple App Store"
                                aria-label={`View ${project.title} on Apple App Store`}
                              >
                                <ExternalLink className="w-3.5 h-3.5" />
                              </a>
                            )}
                          </div>
                        </td>

                        {/* Case Study Link Action */}
                        <td className="py-5 px-6 text-right align-middle whitespace-nowrap">
                          <Link
                            href={`/work/${project.slug}`}
                            onClick={(e) => e.stopPropagation()}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/10 group-hover:border-accent group-hover:bg-accent group-hover:text-white text-xs font-semibold text-white/80 transition-all duration-200"
                            aria-label={`Open ${project.title} case study`}
                          >
                            <span>Open</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </Link>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )
        ) : (
          <div className="p-16 rounded-2xl bg-white/[0.02] border border-white/[0.06] text-center">
            <p className="text-sm text-[#94949C]">
              No projects found in this category. Select &ldquo;All&rdquo; to view all records.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
