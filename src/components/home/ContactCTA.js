"use client";

import { motion } from "motion/react";
import { siteConfig } from "@/data/siteConfig";
import { Mail, MessageSquare, ArrowUpRight, Clock, Sparkles } from "lucide-react";

/**
 * Editorial Contact CTA Section
 * Inspired by nexstudio.tech ("Let's make something impossible to ignore").
 * 
 * Features:
 * - Large, confident editorial typography statement
 * - Fast inquiry paths via Email and WhatsApp
 * - Response time guarantee indicator (< 24 Hours)
 */
export default function ContactCTA() {
  return (
    <section className="w-full py-18 relative overflow-hidden" aria-label="Contact Call to Action">
      {/* Background Accent Glow */}
      <div
        className="absolute bottom-0 right-1/4 w-[500px] h-[300px] bg-accent/10 rounded-full blur-[140px] pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="site-container">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="card-glow-interactive p-8 sm:p-14 lg:p-20 relative cursor-pointer"
        >
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/15 border border-accent/30 text-accent text-xs font-mono-code mb-8">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Open for Q2/Q3 Bookings & Full-Time Contracts</span>
          </div>

          <div className="max-w-4xl">
            <h2 className="font-display text-fluid-section text-white tracking-tight leading-[1.1] mb-6">
              Let&apos;s build something <span className="text-accent underline decoration-white/20 underline-offset-8">impossible to ignore</span>.
            </h2>
            <p className="text-fluid-lead text-[#A1A1AA] max-w-2xl leading-relaxed mb-10">
              Whether you need a cutting-edge web platform, a React Native mobile application, or a design system overhaul, I am ready to collaborate.
            </p>

            {/* Direct Connect Buttons */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6">
              <a
                href={siteConfig.socials.email.url}
                className="btn-accent text-sm sm:text-base py-3.5 px-8"
                aria-label="Send direct email inquiry"
              >
                <Mail className="w-4 h-4" />
                <span>{siteConfig.socials.email.address}</span>
              </a>

              <a
                href={siteConfig.socials.whatsapp.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-sm sm:text-base py-3.5 px-8"
                aria-label="Direct WhatsApp message"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>Chat on WhatsApp</span>
                <ArrowUpRight className="w-4 h-4 opacity-60" />
              </a>
            </div>

            {/* Response Time & Commitment Footer */}
            <div className="mt-12 pt-8 border-t border-white/[0.08] flex flex-wrap items-center gap-6 text-xs text-[#71717A] font-mono-code">
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-accent" />
                <span>Average Response Time: &lt; 24 Hours</span>
              </span>
              <span>•</span>
              <span>Direct communication with the engineer</span>
              <span>•</span>
              <span>NDA-ready</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
