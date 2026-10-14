"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
import { ArrowUp, ArrowUpRight, MessageSquare, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons/CustomIcons";

/**
 * Editorial Footer Component
 * Inspired by douglus.site colophon and nexstudio.tech footer layout.
 * 
 * Features:
 * - Dynamic live time indicator
 * - Direct contact triggers (Email, WhatsApp, GitHub, LinkedIn)
 * - Semantic navigation links
 * - Smooth "Back to Top" scrolling interaction
 */
export default function Footer() {
  const [localTime, setLocalTime] = useState("");

  // Update live clock
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setLocalTime(
        now.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
        })
      );
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Smooth scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-[#08080a] border-t border-white/[0.08] pt-16 pb-12 mt-12">
      <div className="site-container">
        {/* Top Tier: Callout & Quick Connect */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/[0.08]">
          <div className="md:col-span-6 flex flex-col justify-between">
            <div>
              <span className="font-mono-code text-xs text-accent tracking-widest uppercase mb-3 block">
                Initiate Collaboration
              </span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
                Have a project or vision? Let&apos;s build it together.
              </h2>
              <p className="text-[#94949C] text-sm sm:text-base max-w-md">
                Specialized in high-touch web applications, responsive frontend architecture, and React Native mobile software.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={siteConfig.socials.email.url}
                className="btn-accent text-xs sm:text-sm"
                aria-label="Send email to start a conversation"
              >
                <Mail className="w-4 h-4" />
                <span>{siteConfig.socials.email.address}</span>
              </a>

              <a
                href={siteConfig.socials.whatsapp.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-xs sm:text-sm"
                aria-label="Connect via WhatsApp"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp Chat</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
              </a>
            </div>
          </div>

          {/* Navigation Links Column */}
          <div className="md:col-span-3">
            <span className="font-mono-code text-xs text-[#71717A] uppercase tracking-widest block mb-4">
              PAGES
            </span>
            <ul className="flex flex-col gap-3">
              {siteConfig.navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#A1A1AA] hover:text-white transition-colors duration-200 inline-flex items-center gap-2 group"
                  >
                    <span className="text-accent opacity-0 group-hover:opacity-100 transition-opacity">
                      →
                    </span>
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect & Social Channels Column */}
          <div className="md:col-span-3">
            <span className="font-mono-code text-xs text-[#71717A] uppercase tracking-widest block mb-4">
              Connect
            </span>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href={siteConfig.socials.github.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#A1A1AA] hover:text-white transition-colors duration-200 inline-flex items-center gap-2.5"
                  aria-label="Visit GitHub Profile"
                >
                  <GithubIcon className="w-4 h-4 text-white/70" />
                  <span>GitHub</span>
                  <ArrowUpRight className="w-3 h-3 opacity-50" />
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.socials.linkedin.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#A1A1AA] hover:text-white transition-colors duration-200 inline-flex items-center gap-2.5"
                  aria-label="Visit LinkedIn Profile"
                >
                  <LinkedinIcon className="w-4 h-4 text-white/70" />
                  <span>LinkedIn</span>
                  <ArrowUpRight className="w-3 h-3 opacity-50" />
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.socials.whatsapp.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#A1A1AA] hover:text-white transition-colors duration-200 inline-flex items-center gap-2.5"
                  aria-label="Send WhatsApp message"
                >
                  <MessageSquare className="w-4 h-4 text-white/70" />
                  <span>WhatsApp</span>
                  <ArrowUpRight className="w-3 h-3 opacity-50" />
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.socials.email.url}
                  className="text-sm text-[#A1A1AA] hover:text-white transition-colors duration-200 inline-flex items-center gap-2.5"
                  aria-label="Send email inquiry"
                >
                  <Mail className="w-4 h-4 text-white/70" />
                  <span>Direct Email</span>
                  <ArrowUpRight className="w-3 h-3 opacity-50" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Tier: Local Time, Colophon & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-[#71717A]">
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <span>© {siteConfig.footer.copyrightYear} {siteConfig.name}</span>
            <span className="hidden sm:inline-block">•</span>
            <span className="flex items-center gap-2 font-mono-code">
              <span className="h-1.5 w-1.5 rounded-full bg-accent inline-block"></span>
              <span>Local: {localTime || "12:00:00 PM"}</span>
            </span>
          </div>

          <div className="flex items-center gap-6">
            <span className="font-mono-code text-[11px] text-[#52525B]">
              {siteConfig.footer.colophon}
            </span>

            <button
              type="button"
              onClick={scrollToTop}
              className="group flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 hover:border-white/30 text-white/70 hover:text-white transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              aria-label="Scroll back to top of the page"
            >
              <span>Top</span>
              <ArrowUp className="w-3.5 h-3.5 transition-transform duration-200 group-hover:-translate-y-0.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
