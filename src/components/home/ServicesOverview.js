"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { services } from "@/data/services";
import SectionHeading from "@/components/ui/SectionHeading";
import { ArrowUpRight, ArrowRight } from "lucide-react";

/**
 * Services Overview Section
 * Editorial numbered rows showcasing primary service disciplines.
 */
export default function ServicesOverview() {
  return (
    <section className="w-full py-20 sm:py-28 bg-[#08080a] border-y border-white/[0.06]" aria-label="Services Overview">
      <div className="site-container">
        <SectionHeading
          index="02"
          tag="SERVICES & CAPABILITIES"
          title="Engineered for Precision & Impact"
          subtitle="From high-concept creative web development to cross-platform React Native engineering."
        />

        {/* Numbered Service Cards with Glowing Gradient Hover Rim */}
        <div className="flex flex-col gap-5">
          {services.slice(0, 4).map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.15 }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="card-glow-interactive p-6 sm:p-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-start cursor-pointer group"
            >
              {/* Service Number */}
              <div className="md:col-span-1">
                <span className="font-mono-code text-sm font-bold text-accent">
                  {service.index}
                </span>
              </div>

              {/* Title & Subtitle */}
              <div className="md:col-span-5">
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-white group-hover:text-accent transition-colors duration-200">
                  {service.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-[#94949C]">
                  {service.subtitle}
                </p>
              </div>

              {/* Concise Description & Deliverables */}
              <div className="md:col-span-5">
                <p className="text-sm text-[#A1A1AA] leading-relaxed mb-4">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.deliverables.slice(0, 2).map((deliv) => (
                    <span
                      key={deliv}
                      className="font-mono-code text-[11px] px-2.5 py-1 rounded bg-white/[0.04] border border-white/[0.06] text-white/80"
                    >
                      • {deliv}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Trigger */}
              <div className="md:col-span-1 flex justify-end items-start pt-1">
                <Link
                  href="/services"
                  className="p-3 rounded-full border border-white/10 group-hover:border-accent group-hover:bg-accent group-hover:text-white text-white/60 transition-all duration-300"
                  aria-label={`Explore ${service.title} details`}
                >
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Services Pill */}
        <div className="mt-14 flex justify-center">
          <Link
            href="/services"
            className="group flex items-center gap-3 px-7 py-3.5 rounded-full border border-white/15 bg-white/[0.02] hover:border-white/40 hover:bg-white/[0.06] text-xs uppercase tracking-widest font-semibold text-white transition-all duration-300"
          >
            <span>Explore Full Service Offerings</span>
            <ArrowRight className="w-4 h-4 text-accent transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
