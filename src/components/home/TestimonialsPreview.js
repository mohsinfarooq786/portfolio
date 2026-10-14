"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { testimonials } from "@/data/testimonials";
import SectionHeading from "@/components/ui/SectionHeading";
import { Quote, ArrowRight, ArrowUpRight } from "lucide-react";

/**
 * Testimonials Preview Section
 * Editorial showcase of client & collaborator feedback.
 */
export default function TestimonialsPreview() {
  return (
    <section className="w-full py-20 sm:py-28 bg-[#08080a] border-t border-white/[0.06]" aria-label="Client Testimonials Preview">
      <div className="site-container">
        <SectionHeading
          index="04"
          tag="ENDORSEMENTS & COLLABORATIONS"
          title="Reputation Built on Tangible Outcomes"
          subtitle="Reflections from team leads, product owners, and founders on engineering velocity and design craft."
        />

        {/* Editorial Testimonial Cards with Glowing Gradient Rim */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.slice(0, 2).map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.15 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="card-glow-interactive p-8 sm:p-10 flex flex-col justify-between cursor-pointer"
            >
              <div>
                <Quote className="w-8 h-8 text-accent/50 mb-6" />
                <p className="text-base sm:text-lg text-white/90 leading-relaxed font-normal mb-8 italic">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              <div className="flex items-center justify-between pt-6 border-t border-white/[0.06]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent/20 border border-accent/40 flex items-center justify-center font-display font-bold text-sm text-accent">
                    {item.avatar}
                  </div>
                  <div>
                    <h4 className="font-display text-sm font-bold text-white">
                      {item.author}
                    </h4>
                    <span className="text-xs text-[#94949C] block">
                      {item.role} · {item.company}
                    </span>
                  </div>
                </div>

                {item.projectSlug && (
                  <Link
                    href={`/work/${item.projectSlug}`}
                    className="text-xs text-[#71717A] hover:text-white flex items-center gap-1 font-mono-code transition-colors"
                  >
                    <span>{item.project}</span>
                    <ArrowUpRight className="w-3 h-3 text-accent" />
                  </Link>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Testimonials */}
        <div className="mt-12 flex justify-center">
          <Link
            href="/testimonials"
            className="group flex items-center gap-3 px-6 py-3 rounded-full border border-white/15 bg-white/[0.02] hover:border-white/40 hover:bg-white/[0.06] text-xs uppercase tracking-widest font-semibold text-white transition-all duration-300"
          >
            <span>Read All Endorsements</span>
            <ArrowRight className="w-4 h-4 text-accent transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
