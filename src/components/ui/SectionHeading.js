"use client";

import { motion } from "motion/react";
import { fadeInUpVariants } from "@/lib/animations";

/**
 * Editorial Section Heading
 * Inspired by pamidordesign.co and nexstudio.tech.
 * 
 * Features:
 * - Monospace section index indicator (e.g. 01 / SELECTED WORK)
 * - Large, confident editorial display typography
 * - Crisp horizontal divider rule with accent dot
 */
export default function SectionHeading({
  index = "01",
  tag = "SECTION",
  title,
  subtitle,
  className = "",
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      className={`w-full mb-12 sm:mb-16 ${className}`}
    >
      {/* Topline Index & Category Tag */}
      <div className="flex items-center gap-3 mb-3">
        <span className="font-mono-code text-xs font-semibold text-accent tracking-widest uppercase">
          [{index}]
        </span>
        <span className="h-[1px] w-6 bg-accent/40" aria-hidden="true" />
        <span className="font-mono-code text-xs text-[#94949C] tracking-widest uppercase">
          {tag}
        </span>
      </div>

      {/* Main Editorial Headline & Supporting Statement */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <h2 className="font-display text-fluid-section text-white tracking-tight max-w-2xl">
          {title}
        </h2>
        {subtitle && (
          <p className="text-[#94949C] text-sm sm:text-base max-w-md pb-1">
            {subtitle}
          </p>
        )}
      </div>

      {/* Editorial Horizontal Divider */}
      <div className="editorial-divider" aria-hidden="true">
        <div className="divider-line" />
        <div className="divider-dot" />
        <div className="divider-line" />
      </div>
    </motion.div>
  );
}
