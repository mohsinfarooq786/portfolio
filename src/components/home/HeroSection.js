"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { siteConfig } from "@/data/siteConfig";
import { EASING, fadeInUpVariants } from "@/lib/animations";
import {
  ArrowDownRight,
  ArrowUpRight,
  MessageSquare,
  Mail,
  Sparkles,
  Code2,
  Smartphone,
  Layers,
  Terminal,
  Workflow,
  Server,
  Database,
  Boxes,
  ShoppingBag,
  Globe,
  Flame,
  Zap,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons/CustomIcons";
import HeroBackground from "@/components/layout/HeroBackground";
import { profile } from "@/components/assets/images";

/**
 * Production-Tested Engineering Skills Dataset
 * Categorized stack spanning modern frontend, mobile, backend runtimes, database systems, and CMS.
 */
const coreSkills = [
  {
    name: "React",
    detail: "UI & Component State",
    icon: Code2,
    color: "text-cyan-400",
  },
  {
    name: "Next.js",
    detail: "App Router & SSR",
    icon: Layers,
    color: "text-white",
  },
  {
    name: "React Native",
    detail: "iOS & Android Apps",
    icon: Smartphone,
    color: "text-emerald-400",
  },
  {
    name: "Django",
    detail: "Python & REST APIs",
    icon: Terminal,
    color: "text-emerald-500",
  },
  {
    name: "Express.js",
    detail: "RESTful Microservices",
    icon: Workflow,
    color: "text-amber-400",
  },
  {
    name: "Node.js",
    detail: "Backend Server Runtimes",
    icon: Server,
    color: "text-lime-400",
  },
  {
    name: "SQL",
    detail: "PostgreSQL & MySQL",
    icon: Database,
    color: "text-accent",
  },
  {
    name: "MongoDB",
    detail: "NoSQL Document Stores",
    icon: Boxes,
    color: "text-teal-400",
  },
  {
    name: "Shopify",
    detail: "Custom Themes & Liquid",
    icon: ShoppingBag,
    color: "text-emerald-400",
  },
  {
    name: "WordPress",
    detail: "Headless CMS & Plugins",
    icon: Globe,
    color: "text-sky-400",
  },
  {
    name: "Firebase",
    detail: "Realtime DB & Auth",
    icon: Flame,
    color: "text-amber-500",
  },
  {
    name: "Supabase",
    detail: "Postgres BaaS & Edge APIs",
    icon: Zap,
    color: "text-emerald-400",
  },
];

export default function HeroSection() {
  return (
    <section className="relative w-full pt-32 pb-12 sm:pt-40 overflow-hidden" aria-label="Introduction Hero">
      {/* Art-Directed Multi-Layer Hero Background */}
      <HeroBackground />

      <div className="site-container">
        {/* Top Hero Tier: Two-Column Editorial Grid (Content on Left, Screen-Height Portrait & 4 Rings on Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center min-h-[calc(100vh-140px)]">
          {/* Left Column: Heading, Bio, CTAs & Channels */}
          <div className="lg:col-span-12 flex flex-col justify-center z-10">
            {/* Availability Badge */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.05 }}
              variants={fadeInUpVariants}
              custom={0.05}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] backdrop-blur-md mb-8 w-fit"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="font-mono-code text-xs text-white/90 tracking-wide">
                {siteConfig.availability.badge}
              </span>
            </motion.div>

            {/* Large Editorial Headline */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.05 }}
              variants={fadeInUpVariants}
              custom={0.15}
              className="max-w-5xl"
            >
              <h1 className="font-display text-fluid-hero text-white tracking-tight leading-[1.08]">
                Engineering fluid{" "}
                <span className="inline-block px-2.5 py-0.5 sm:px-4 sm:py-1 rounded-lg sm:rounded-xl bg-red-500 text-white font-extrabold mx-1 sm:mx-1.5 align-baseline shadow-md shadow-emerald-400/25 -rotate-1 hover:rotate-0 transition-transform duration-300 whitespace-nowrap">
                  web systems
                </span>{" "}
                & high-performance mobile apps.
              </h1>
            </motion.div>

            {/* Supporting Statement & Bio */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.05 }}
              variants={fadeInUpVariants}
              custom={0.25}
              className="mt-7 max-w-xl"
            >
              <p className="text-fluid-lead text-[#A1A1AA] font-normal leading-relaxed">
                {siteConfig.bio.description}
              </p>
            </motion.div>

            {/* Action Buttons & Socials */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.05 }}
              variants={fadeInUpVariants}
              custom={0.35}
              className="mt-10 flex flex-col sm:flex-row sm:items-center gap-6"
            >
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/work"
                  className="btn-primary"
                  aria-label="View selected portfolio projects"
                >
                  <span>View My Work</span>
                  <ArrowDownRight className="w-4 h-4 text-black" />
                </Link>

                <a
                  href={siteConfig.socials.email.url}
                  className="btn-secondary"
                  aria-label="Initiate direct email contact"
                >
                  <Mail className="w-4 h-4 text-accent" />
                  <span>Let&apos;s Talk</span>
                  <ArrowUpRight className="w-4 h-4 opacity-60" />
                </a>
              </div>

              {/* Social Channels Integration */}
              <div className="flex items-center gap-4 text-sm text-[#71717A] pl-0 sm:pl-4 sm:border-l sm:border-white/10">
                <a
                  href={siteConfig.socials.github.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                  aria-label="GitHub profile"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href={siteConfig.socials.linkedin.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                  aria-label="LinkedIn profile"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <a
                  href={siteConfig.socials.whatsapp.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                  aria-label="WhatsApp profile"
                >
                  <MessageSquare className="w-4 h-4" />
                </a>
                <a
                  href={siteConfig.socials.email.url}
                  className="hover:text-white transition-colors"
                  aria-label="Email contact"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Core Tech Stack & Specialized Skills Showcase */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.15 }}
          variants={fadeInUpVariants}
          custom={0.45}
          className="mt-14 pt-8 border-t border-white/[0.08]"
        >
          {/* Stack Section Label */}
          <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
            <div className="flex items-center gap-2.5">
              <span className="font-mono-code text-xs text-accent uppercase tracking-widest font-semibold">
                [TECH STACK & SKILLS]
              </span>
              <span className="h-3 w-[1px] bg-white/20" />
              <span className="font-mono-code text-xs text-[#94949C]">
                12 CORE TECHNOLOGIES & FRAMEWORKS
              </span>
            </div>
            <span className="font-mono-code text-[11px] text-[#71717A] hidden sm:inline">
              Hover cards for radiant glow
            </span>
          </div>

          {/* 12-Skill Interactive Cards Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-3.5">
            {coreSkills.map((skill) => {
              const IconComponent = skill.icon;
              return (
                <div
                  key={skill.name}
                  className="card-glow-interactive p-3.5 sm:p-4 flex items-center gap-3 cursor-pointer"
                >
                  <div className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center shrink-0">
                    <IconComponent className={`w-4 h-4 ${skill.color}`} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="block font-display text-sm font-bold text-white truncate">
                      {skill.name}
                    </span>
                    <span className="text-[11px] text-[#71717A] font-mono-code truncate block">
                      {skill.detail}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
