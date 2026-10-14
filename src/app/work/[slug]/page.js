import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import DeviceFrame from "@/components/work/DeviceFrame";
import HeroBackground from "@/components/layout/HeroBackground";
import { siteConfig } from "@/data/siteConfig";
import { ArrowLeft, ArrowUpRight, ExternalLink, ArrowRight, CheckCircle2, Smartphone } from "lucide-react";
import { GithubIcon } from "@/components/icons/CustomIcons";

/**
 * Generate Static Params for all projects
 */
export async function generateStaticParams() {
  return projects.map((p) => ({
    slug: p.slug,
  }));
}

/**
 * Generate Dynamic SEO Metadata
 */
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return { title: `Project Not Found — ${siteConfig.name}` };
  }

  return {
    title: `${project.title} — Case Study | ${siteConfig.name}`,
    description: project.description,
  };
}

/**
 * Dynamic Project Case Study Route (/work/[slug])
 * Comprehensive deep-dive covering problem scope, technical architecture, and metrics.
 */
export default async function ProjectCaseStudyPage({ params }) {
  const { slug } = await params;
  const projectIndex = projects.findIndex((p) => p.slug === slug);

  if (projectIndex === -1) {
    notFound();
  }

  const project = projects[projectIndex];
  const nextProject = projects[(projectIndex + 1) % projects.length];

  return (
    <article className="relative w-full pt-32 pb-24 sm:pt-40 sm:pb-32 overflow-hidden">
      {/* Art-Directed Multi-Layer Hero Background */}
      <HeroBackground />

      <div className="site-container">
        {/* Back Navigation Breadcrumb */}
        <div className="mb-10">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-xs font-mono-code text-[#94949C] hover:text-white transition-colors py-1.5 px-3 rounded-full bg-white/[0.03] border border-white/[0.08]"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Projects</span>
          </Link>
        </div>

        {/* Project Header */}
        <div className="max-w-4xl mb-12 sm:mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono-code text-xs font-semibold text-accent tracking-widest uppercase">
              [{project.category.toUpperCase()}]
            </span>
            <span className="h-[1px] w-6 bg-accent/40" aria-hidden="true" />
            <span className="font-mono-code text-xs text-[#94949C] tracking-widest uppercase">
              {project.year} RELEASES
            </span>
          </div>

          <h1 className="font-display text-fluid-hero text-white tracking-tight leading-[1.05]">
            {project.title}
          </h1>

          <p className="mt-4 text-fluid-lead text-accent font-medium">
            {project.subtitle}
          </p>

          <p className="mt-6 text-base sm:text-lg text-[#A1A1AA] leading-relaxed max-w-3xl">
            {project.description}
          </p>

          {/* Action CTAs */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-xs sm:text-sm"
              >
                <span>Launch Live Application</span>
                <ExternalLink className="w-4 h-4 text-black" />
              </a>
            )}

            {project.playStoreUrl && (
              <a
                href={project.playStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-xs sm:text-sm text-emerald-400 border-emerald-500/30 hover:border-emerald-400"
              >
                <Smartphone className="w-4 h-4 text-emerald-400" />
                <span>Download on Google Play</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
              </a>
            )}

            {project.appStoreUrl && (
              <a
                href={project.appStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-xs sm:text-sm text-sky-400 border-sky-500/30 hover:border-sky-400"
              >
                <ExternalLink className="w-4 h-4 text-sky-400" />
                <span>Download on App Store</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
              </a>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-xs sm:text-sm"
              >
                <GithubIcon className="w-4 h-4" />
                <span>View Repository</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
              </a>
            )}
          </div>
        </div>

        {/* Metadata Specification Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-8 border-y border-white/[0.08] mb-14">
          <div>
            <span className="font-mono-code text-[11px] text-[#71717A] uppercase block">Client / Partner</span>
            <span className="font-display text-sm font-semibold text-white mt-1 block">{project.client}</span>
          </div>
          <div>
            <span className="font-mono-code text-[11px] text-[#71717A] uppercase block">Role & Scope</span>
            <span className="font-display text-sm font-semibold text-white mt-1 block">{project.role}</span>
          </div>
          <div>
            <span className="font-mono-code text-[11px] text-[#71717A] uppercase block">Timeline</span>
            <span className="font-display text-sm font-semibold text-white mt-1 block">{project.timeline}</span>
          </div>
          <div>
            <span className="font-mono-code text-[11px] text-[#71717A] uppercase block">Release Year</span>
            <span className="font-display text-sm font-semibold text-white mt-1 block">{project.year}</span>
          </div>
        </div>

        {/* Main Showcase Device Frame */}
        <div className="mb-20 max-w-5xl mx-auto">
          <DeviceFrame
            type={project.mockupType}
            domain={project.mockupDomain}
            title={project.title}
            coverImage={project.coverImage}
            projectSlug={project.slug}
          />
        </div>

        {/* Impact & Performance Metrics */}
        {project.stats && (
          <div className="card-glow-interactive grid grid-cols-1 sm:grid-cols-3 gap-6 p-8 mb-20 cursor-pointer">
            {project.stats.map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <span className="font-mono-code text-xs text-[#71717A] uppercase tracking-wider mb-1">
                  {stat.label}
                </span>
                <span className="font-display text-2xl sm:text-3xl font-bold text-accent">
                  {stat.value}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* Case Study Content Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Main Narrative (Left) */}
          <div className="lg:col-span-8 flex flex-col gap-14">
            {/* Overview */}
            <div>
              <h2 className="font-display text-2xl font-bold text-white mb-4">
                Project Overview & Vision
              </h2>
              <p className="text-[#A1A1AA] text-base leading-relaxed">
                {project.overview}
              </p>
            </div>

            {/* The Technical Challenge */}
            <div className="card-glow-interactive p-8 cursor-pointer">
              <h2 className="font-display text-2xl font-bold text-white mb-4">
                The Technical Hurdle
              </h2>
              <p className="text-[#A1A1AA] text-base leading-relaxed">
                {project.challenges}
              </p>
            </div>

            {/* The Solution Architecture */}
            <div>
              <h2 className="font-display text-2xl font-bold text-white mb-4">
                Architecture & Engineering Solution
              </h2>
              <p className="text-[#A1A1AA] text-base leading-relaxed">
                {project.solution}
              </p>
            </div>

            {/* Key Features */}
            {project.keyFeatures && (
              <div>
                <h2 className="font-display text-2xl font-bold text-white mb-6">
                  Key Technical Capabilities
                </h2>
                <div className="flex flex-col gap-3">
                  {project.keyFeatures.map((feat, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 p-4 rounded-xl bg-white/[0.02] border border-white/[0.04]"
                    >
                      <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                      <span className="text-sm text-[#D4D4D8] leading-relaxed">
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Authentic Project Screenshots & Interface Gallery */}
            {project.gallery && project.gallery.length > 0 && (
              <div>
                <h2 className="font-display text-2xl font-bold text-white mb-6">
                  Verified Interface Screens & Gallery
                </h2>
                <div
                  className={`grid gap-4 sm:gap-6 ${
                    project.mockupType === "mobile"
                      ? "grid-cols-2 sm:grid-cols-3"
                      : "grid-cols-1 sm:grid-cols-2"
                  }`}
                >
                  {project.gallery.map((imgSrc, idx) => (
                    <div
                      key={idx}
                      className="group relative rounded-xl overflow-hidden border border-white/[0.08] bg-[#0c0c12] hover:border-white/20 transition-all duration-300"
                    >
                      <Image
                        src={imgSrc}
                        alt={`${project.title} screenshot ${idx + 1}`}
                        width={720}
                        height={480}
                        className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sticky Sidebar: Technologies & Toolchain (Right) */}
          <div className="lg:col-span-4">
            <div className="card-glow-interactive p-6 sticky top-28 cursor-pointer">
              <h3 className="font-display text-lg font-bold text-white mb-4 pb-3 border-b border-white/[0.06]">
                Technology Toolchain
              </h3>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((t) => (
                  <span
                    key={t}
                    className="font-mono-code text-xs px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.08] text-white"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="pt-4 border-t border-white/[0.06]">
                <span className="font-mono-code text-[11px] text-[#71717A] uppercase block mb-2">
                  Category Tagging
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono-code text-[11px] px-2 py-0.5 rounded bg-accent/10 text-accent"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Live Platform Links in Sidebar */}
              {(project.liveUrl || project.playStoreUrl || project.appStoreUrl) && (
                <div className="pt-5 mt-5 border-t border-white/[0.06]">
                  <span className="font-mono-code text-[11px] text-[#71717A] uppercase block mb-3">
                    Available Platforms
                  </span>
                  <div className="flex flex-col gap-2">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-between p-2.5 rounded-lg bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.08] text-xs text-white/90 transition-colors"
                      >
                        <span className="font-medium">Visit Official Website</span>
                        <ExternalLink className="w-3.5 h-3.5 text-accent" />
                      </a>
                    )}
                    {project.playStoreUrl && (
                      <a
                        href={project.playStoreUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-between p-2.5 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 text-xs text-emerald-300 transition-colors"
                      >
                        <span className="font-medium">Download on Google Play</span>
                        <Smartphone className="w-3.5 h-3.5 text-emerald-400" />
                      </a>
                    )}
                    {project.appStoreUrl && (
                      <a
                        href={project.appStoreUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-between p-2.5 rounded-lg bg-sky-500/10 hover:bg-sky-500/20 border border-sky-500/30 text-xs text-sky-300 transition-colors"
                      >
                        <span className="font-medium">Download on App Store</span>
                        <ExternalLink className="w-3.5 h-3.5 text-sky-400" />
                      </a>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Next Project Navigation (douglus.site / nexstudio.tech inspired) */}
        <div className="mt-24 pt-16 border-t border-white/[0.08]">
          <Link
            href={`/work/${nextProject.slug}`}
            className="card-glow-interactive group block p-8 sm:p-12 cursor-pointer"
          >
            <div className="flex items-center justify-between">
              <div>
                <span className="font-mono-code text-xs text-accent uppercase tracking-widest block mb-2">
                  Next Case Study →
                </span>
                <h3 className="font-display text-2xl sm:text-4xl font-bold text-white group-hover:text-accent transition-colors">
                  {nextProject.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#94949C] mt-2 font-mono-code">
                  {nextProject.category} · {nextProject.year}
                </p>
              </div>

              <div className="p-4 rounded-full border border-white/10 group-hover:border-accent group-hover:bg-accent group-hover:text-white transition-all">
                <ArrowRight className="w-5 h-5 text-white/70 group-hover:text-white" />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </article>
  );
}
