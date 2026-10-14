import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import { siteConfig } from "@/data/siteConfig";
import { technicalCapabilities, developmentPhilosophy, careerTimeline } from "@/data/skills";
import HeroBackground from "@/components/layout/HeroBackground";
import { ArrowUpRight, Mail, MessageSquare, Terminal, Layers, Cpu, Compass } from "lucide-react";

export const metadata = {
  title: `About — ${siteConfig.name}`,
  description: `Learn about ${siteConfig.name}'s engineering background, development philosophy, and technical strengths in web and mobile systems.`,
};

/**
 * About Page Route (/about-us)
 * Editorial profile presenting engineering background, philosophy, technical proficiencies, and career timeline.
 */
export default function AboutPage() {
  return (
    <div className="relative w-full pt-32 pb-24 sm:pt-40 sm:pb-32 overflow-hidden">
      {/* Art-Directed Multi-Layer Hero Background */}
      <HeroBackground />

      <div className="site-container">
        {/* Page Top Heading */}
        <div className="max-w-4xl mb-16 sm:mb-24">
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono-code text-xs font-semibold text-accent tracking-widest uppercase">
              [ABOUT]
            </span>
            <span className="h-[1px] w-6 bg-accent/40" aria-hidden="true" />
            <span className="font-mono-code text-xs text-[#94949C] tracking-widest uppercase">
              BACKGROUND & DISCIPLINE
            </span>
          </div>

          <h1 className="font-display text-fluid-hero text-white tracking-tight leading-[1.05]">
            Bridging expressive art direction and robust software architecture.
          </h1>

          <p className="mt-8 text-fluid-lead text-[#A1A1AA] leading-relaxed max-w-3xl">
            {siteConfig.bio.description}
          </p>
        </div>

        {/* Section 1: Personal Background & Engineering Story */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 py-16 border-t border-white/[0.08]">
          <div className="lg:col-span-5">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
              The Intersection of Design Sensitivity and Code Precision
            </h2>
            <div className="mt-6 flex flex-col gap-3 font-mono-code text-xs text-[#94949C]">
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-accent" />
                <span>Primary Stacks: React Native, Next.js, TypeScript</span>
              </div>
              <div className="flex items-center gap-2">
                <Layers className="w-4 h-4 text-emerald-400" />
                <span>Focus: Micro-Interactions & Hardware Acceleration</span>
              </div>
              <div className="flex items-center gap-2">
                <Cpu className="w-4 h-4 text-amber-400" />
                <span>Optimization: Zero Layout Shift & Sub-30ms Latency</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col gap-6 text-[#A1A1AA] text-base leading-relaxed">
            <p>
              I began programming with a deep fascination for interactive media and computer graphics. Over the years, I realized that true engineering excellence is not just about building functional software—it is about creating software that feels natural and fluid in the user&apos;s hands.
            </p>
            <p>
              In modern web development, I leverage the Next.js App Router, strict TypeScript contracts, and Motion for React to construct responsive digital environments. In mobile application development, I utilize React Native and Reanimated to achieve 60/120fps gesture fluidity, coupled with SQLite offline storage engines to ensure resilience without active internet connectivity.
            </p>
            <p>
              I work with founders, design ateliers, and engineering teams as an end-to-end collaborator—turning complex design briefs into clean, scalable codebases that are a joy to maintain.
            </p>
          </div>
        </div>

        {/* Section 2: Development Philosophy */}
        <div className="py-20 border-t border-white/[0.08]">
          <SectionHeading
            index="02"
            tag="CORE PILLARS"
            title="Development Philosophy & Problem Solving"
            subtitle="The foundational engineering principles that guide every pull request and architectural choice."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {developmentPhilosophy.map((pillar) => (
              <div
                key={pillar.index}
                className="card-glow-interactive p-8 cursor-pointer"
              >
                <span className="font-mono-code text-xs text-accent font-semibold uppercase tracking-wider block mb-3">
                  Pillar {pillar.index}
                </span>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-3">
                  {pillar.title}
                </h3>
                <p className="text-sm text-[#94949C] leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Section 3: Technical Capabilities Matrix */}
        <div className="py-20 border-t border-white/[0.08]">
          <SectionHeading
            index="03"
            tag="TOOLCHAIN & PROFICIENCIES"
            title="Selected Technologies & Stack Mastery"
            subtitle="Curated languages, libraries, and frameworks battle-tested in real production environments."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {technicalCapabilities.map((cap) => (
              <div
                key={cap.category}
                className="card-glow-interactive p-8 cursor-pointer"
              >
                <h3 className="font-display text-xl font-bold text-white mb-2">
                  {cap.category}
                </h3>
                <p className="text-xs text-[#71717A] mb-6">
                  {cap.headline}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-white/[0.06]">
                  {cap.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center justify-between p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.04]"
                    >
                      <span className="text-xs font-medium text-white/90">
                        {skill.name}
                      </span>
                      <span className="font-mono-code text-[10px] text-accent px-2 py-0.5 rounded bg-accent/10">
                        {skill.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 4: Professional Experience / Career Milestones */}
        <div className="py-20 border-t border-white/[0.08]">
          <SectionHeading
            index="04"
            tag="TRAJECTORY"
            title="Career Timeline & Selected Milestones"
            subtitle="A structured overview of professional engagements and engineering roles."
          />

          <div className="flex flex-col divide-y divide-white/[0.08]">
            {careerTimeline.map((item, idx) => (
              <div
                key={item.period}
                className="py-10 grid grid-cols-1 md:grid-cols-12 gap-6 items-start"
              >
                <div className="md:col-span-3">
                  <span className="font-mono-code text-xs text-accent font-semibold tracking-wider block">
                    {item.period}
                  </span>
                  <span className="text-xs text-[#71717A] block mt-1">
                    {item.location}
                  </span>
                </div>

                <div className="md:col-span-4">
                  <h3 className="font-display text-xl font-bold text-white">
                    {item.role}
                  </h3>
                  <span className="text-xs text-[#94949C] block mt-1">
                    {item.company}
                  </span>
                </div>

                <div className="md:col-span-5">
                  <p className="text-sm text-[#A1A1AA] leading-relaxed mb-4">
                    {item.description}
                  </p>
                  <ul className="flex flex-col gap-2">
                    {item.highlights.map((h, i) => (
                      <li
                        key={i}
                        className="text-xs text-[#94949C] flex items-start gap-2"
                      >
                        <span className="text-accent mt-0.5">•</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 5: Direct Contact Callout */}
        <div className="card-glow-interactive mt-16 p-10 sm:p-14 flex flex-col md:flex-row md:items-center justify-between gap-8 cursor-pointer">
          <div>
            <span className="font-mono-code text-xs text-accent tracking-widest uppercase block mb-2">
              Start an Engagement
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white">
              Interested in collaborating or discussing an upcoming build?
            </h2>
            <p className="text-sm text-[#94949C] mt-2 max-w-xl">
              I am available for select contract development, high-performance mobile apps, and technical consultation.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 shrink-0">
            <a
              href={siteConfig.socials.email.url}
              className="btn-accent"
              aria-label="Send direct email"
            >
              <Mail className="w-4 h-4" />
              <span>{siteConfig.socials.email.address}</span>
            </a>

            <a
              href={siteConfig.socials.whatsapp.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
              aria-label="Chat on WhatsApp"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              <span>WhatsApp</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
