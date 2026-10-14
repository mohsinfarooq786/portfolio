"use client";

import { motion } from "motion/react";
import { technicalCapabilities, developmentPhilosophy } from "@/data/skills";
import SectionHeading from "@/components/ui/SectionHeading";

/**
 * Technical Capabilities & Engineering Philosophy
 * Editorial layout highlighting deep engineering principles and modern stacks.
 */
export default function CapabilitiesSection() {
  return (
    <section className="w-full py-20 sm:py-28" aria-label="Capabilities and Philosophy">
      <div className="site-container">
        <SectionHeading
          index="03"
          tag="DISCIPLINE & STACK"
          title="Architectural Rigor, Creative Execution"
          subtitle="How I approach system design, state machines, performance profiling, and design fidelity."
        />

        {/* Part 1: Engineering Philosophy Pillars with Glowing Gradient Borders */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {developmentPhilosophy.map((pillar, idx) => (
            <motion.div
              key={pillar.index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.15 }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="card-glow-interactive p-6 flex flex-col justify-between cursor-pointer"
            >
              <div>
                <span className="font-mono-code text-xs text-accent uppercase tracking-wider block mb-4">
                  Principle {pillar.index}
                </span>
                <h3 className="font-display text-lg font-bold text-white mb-3">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#94949C] leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Part 2: Editorial Capability Matrix with Glowing Gradient Borders */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {technicalCapabilities.map((cap, idx) => (
            <motion.div
              key={cap.category}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.15 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="card-glow-interactive p-8 cursor-pointer"
            >
              <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-2">
                {cap.category}
              </h3>
              <p className="text-xs sm:text-sm text-[#94949C] mb-6">
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
                    <span className="font-mono-code text-[10px] text-accent/80 px-2 py-0.5 rounded bg-accent/10">
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
