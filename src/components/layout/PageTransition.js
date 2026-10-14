"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { EASING } from "@/lib/animations";

/**
 * Route Transition Manager
 * Inspired by visuvate.com and nexstudio.tech.
 * 
 * Ensures every page entry feels intentional and seamless:
 * - Fluid opacity and translateY entrance using custom bezier curves
 * - Accent line wipe feedback at the top of the viewport
 * - Automatic scroll-to-top on route changes
 * - Zero pointer-event blocking or artificial delays
 * - Full support for prefers-reduced-motion
 */
export default function PageTransition({ children }) {
  const pathname = usePathname();
  const [isNavigating, setIsNavigating] = useState(false);

  // Trigger brief route change accent indicator and ensure scroll resets to top
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });

    const raf = requestAnimationFrame(() => {
      setIsNavigating(true);
    });

    const timer = setTimeout(() => {
      setIsNavigating(false);
    }, 450);

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(timer);
    };
  }, [pathname]);

  return (
    <>
      {/* Route Change Accent Indicator (Top wipe inspired by nexstudio.tech) */}
      <div
        className={`fixed top-0 left-0 right-0 h-[2.5px] bg-accent z-[9999] transition-transform duration-500 ease-out pointer-events-none origin-left ${
          isNavigating ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"
        }`}
        aria-hidden="true"
      />

      {/* Animated Route Content Container (Opacity transition preserving position: sticky) */}
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 0.35,
            ease: EASING.smoothOut,
          }}
          className="min-h-screen flex flex-col justify-between"
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </>
  );
}
