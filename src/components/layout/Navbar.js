"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { siteConfig } from "@/data/siteConfig";
import { EASING } from "@/lib/animations";
import { ArrowUpRight, Menu, X, Mail } from "lucide-react";

/**
 * Global Navigation Bar
 * Inspired by douglus.site desktop & mobile navigation experience.
 * 
 * Features:
 * - Fixed position with subtle frosted backdrop-blur and border separation
 * - Editorial typography with active-link underline animations
 * - Live availability status indicator
 * - Tactile mobile drawer menu with staggered editorial links
 * - Full accessibility attributes (aria-labels, role, keyboard focus)
 */
export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Track scroll position to subtly adjust navbar opacity and border
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile drawer on route navigation (React recommended pattern for state sync)
  const [prevPathname, setPrevPathname] = useState(pathname);
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setIsMobileMenuOpen(false);
  }

  // Comprehensive multi-platform scroll lock for mobile menu (iOS Safari, Android Chrome, touchscreens)
  useEffect(() => {
    if (isMobileMenuOpen) {
      // Record existing document styles to cleanly restore on close
      const originalBodyOverflow = document.body.style.overflow;
      const originalHtmlOverflow = document.documentElement.style.overflow;
      const originalPosition = document.body.style.position;
      const originalTop = document.body.style.top;
      const originalWidth = document.body.style.width;
      const currentScrollY = window.scrollY;

      // Lock position fixed to eliminate iOS rubber-banding and background scroll leakage
      document.body.style.position = "fixed";
      document.body.style.top = `-${currentScrollY}px`;
      document.body.style.width = "100%";
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";

      return () => {
        // Restore previous styling when drawer closes
        document.body.style.position = originalPosition;
        document.body.style.top = originalTop;
        document.body.style.width = originalWidth;
        document.body.style.overflow = originalBodyOverflow;
        document.documentElement.style.overflow = originalHtmlOverflow;
        // Seamlessly restore previous scroll position
        window.scrollTo(0, currentScrollY);
      };
    }
  }, [isMobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${isScrolled || isMobileMenuOpen
        ? "bg-[#0a0a0b] backdrop-blur-xl border-b border-white/[0.08] py-2.5 sm:py-3.5 shadow-xl shadow-black/40"
        : "bg-transparent py-3 sm:py-5"
        }`}
    >
      <div className="site-container flex items-center justify-between">
        {/* Personal Branding / Logo */}
        <Link
          href="/home"
          className="group flex items-center gap-2 sm:gap-2.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-md"
          aria-label={`${siteConfig.name} - Home`}
        >
          <div className="flex flex-col">
            <span className="font-display text-base sm:text-lg font-bold tracking-tight text-white transition-colors duration-200 group-hover:text-accent leading-tight">
              {siteConfig.name.toUpperCase()}
            </span>
            {/* Role subtitle now clearly visible on all screen sizes */}
            <span className="text-[9px] sm:text-[10px] uppercase tracking-wider sm:tracking-widest text-[#94949C] block whitespace-nowrap leading-tight mt-0.5">
              {siteConfig.shortRole}
            </span>
          </div>

          {/* Availability Status Dot (Desktop) */}
          <div className="hidden lg:flex items-center gap-1.5 ml-2 px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/[0.08]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-[11px] font-mono-code text-white/70">Available Q2/Q3</span>
          </div>
        </Link>

        {/* Desktop Navigation Links (douglus.site inspired) */}
        <nav
          className="hidden md:flex items-center gap-8"
          aria-label="Main Navigation"
        >
          {siteConfig.navLinks.map((link) => {
            const isActive =
              pathname === link.href ||
              (link.href === "/work" && pathname.startsWith("/work"));

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link-editorial text-sm tracking-wide ${isActive ? "is-active text-white" : "text-[#A1A1AA]"
                  }`}
                aria-current={isActive ? "page" : undefined}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Right Action: Let's Talk CTA (Desktop) */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href={siteConfig.socials.email.url}
            className="group flex items-center gap-2 px-4 py-2 rounded-full border border-white/15 bg-white/[0.03] text-xs font-medium text-white transition-all duration-300 hover:border-white/40 hover:bg-white/[0.08] hover:text-white"
            aria-label="Send direct email inquiry"
          >
            <Mail className="w-3.5 h-3.5 text-accent transition-transform duration-300 group-hover:scale-110" />
            <span>Let&apos;s Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5 opacity-60 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
          </a>
        </div>

        {/* Mobile Action Controls with Balanced Touch Target Padding */}
        <div className="md:hidden flex items-center gap-2">
          <a
            href={siteConfig.socials.email.url}
            className="flex items-center justify-center p-2 rounded-full border border-white/15 bg-white/[0.04] text-white hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            aria-label="Send quick email inquiry"
          >
            <Mail className="w-4 h-4 text-accent" />
          </a>

          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex items-center justify-center p-2 rounded-full border border-white/15 bg-white/[0.05] text-white hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <X className="w-4 h-4 text-white" />
            ) : (
              <Menu className="w-4 h-4 text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Fullscreen Navigation Overlay (douglus.site style) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3, ease: EASING.smoothOut }}
            className="fixed inset-x-0 top-[53px] sm:top-[65px] bottom-0 h-[calc(100dvh-53px)] sm:h-[calc(100dvh-65px)] bg-[#0A0A0B] backdrop-blur-2xl z-40 md:hidden border-t border-white/10 overflow-y-auto overscroll-contain"
            style={{ WebkitOverflowScrolling: "touch", touchAction: "pan-y" }}
          >
            {/* Inner Content Container:
                - min-h-full: fills the available height when content is short
                - flex flex-col justify-between: keeps footer fixed at bottom when content does not overflow
                - when content overflows (small screens): smoothly expands and whole navbar is scrollable */}
            <div className="min-h-full flex flex-col justify-between p-6 sm:p-10 pb-[calc(1.5rem+env(safe-area-inset-bottom,0px))]">
              {/* Mobile Navigation List with Staggered Entrance */}
              <nav className="flex flex-col gap-4 sm:gap-6 pt-2" aria-label="Mobile Navigation">
                {siteConfig.navLinks.map((link, idx) => {
                  const isActive =
                    pathname === link.href ||
                    (link.href === "/work" && pathname.startsWith("/work"));

                  return (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.35,
                        delay: idx * 0.06,
                        ease: EASING.smoothOut,
                      }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`group flex items-baseline justify-between text-2xl sm:text-3xl font-display font-bold py-2 border-b border-white/[0.06] ${isActive ? "text-accent" : "text-white/90 hover:text-white"
                          }`}
                      >
                        <span className="flex items-center gap-3">
                          <span className={`font-mono-code text-xs tracking-wider transition-colors ${isActive ? "text-accent" : "text-[#71717A] group-hover:text-accent"}`}>
                            0{idx + 1}
                          </span>
                          <span>{link.name}</span>
                        </span>
                        <ArrowUpRight
                          className={`w-5 h-5 transition-transform duration-300 ${isActive
                            ? "text-accent"
                            : "opacity-40 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1"
                            }`}
                        />
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>

              {/* Mobile Footer Status & Contact Links */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: 0.35 }}
                className="mt-8 pt-6 border-t border-white/10 flex flex-col gap-4 shrink-0"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase tracking-wider text-[#71717A]">
                    Availability
                  </span>
                  <span className="flex items-center gap-1.5 text-xs text-emerald-400 font-mono-code">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 inline-block animate-pulse"></span>
                    Open to Opportunities
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-2">
                  <a
                    href={siteConfig.socials.email.url}
                    className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-accent text-white font-medium text-xs tracking-wide hover:bg-accent-hover transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Email Me</span>
                  </a>
                  <a
                    href={siteConfig.socials.whatsapp.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl border border-white/15 bg-white/5 text-white font-medium text-xs tracking-wide hover:bg-white/10 transition-colors"
                  >
                    <span>WhatsApp</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
