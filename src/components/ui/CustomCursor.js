"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

/**
 * Editorial Interactive Custom Cursor
 * Inspired by douglus.site, pamidordesign.co, and nexstudio.tech.
 * 
 * Features:
 * - Dual-layer architecture: zero-latency precision inner dot + elastic trailing aura follower
 * - Contextual morphing: expands into a glowing halo over links/buttons and a luxury lens over cards
 * - Tactile spring compression on mousedown / click
 * - Automatically activates only on desktop fine-pointer devices (pointer: fine)
 * - Zero interference with user interactions (pointer-events: none)
 */
export default function CustomCursor() {
  const [isMounted, setIsMounted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isCardHovered, setIsCardHovered] = useState(false);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Raw instantaneous cursor coordinates
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Smooth trailing spring physics for outer aura follower
  const springConfig = { damping: 26, stiffness: 300, mass: 0.16 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  useEffect(() => {
    const raf = requestAnimationFrame(() => {
      setIsMounted(true);
    });

    const mediaQuery = window.matchMedia("(pointer: fine)");
    if (!mediaQuery.matches) {
      return () => cancelAnimationFrame(raf);
    }

    document.body.classList.add("custom-cursor-active");

    const onMouseMove = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const onMouseDown = () => setIsMouseDown(true);
    const onMouseUp = () => setIsMouseDown(false);
    const onMouseEnter = () => setIsVisible(true);
    const onMouseLeave = () => setIsVisible(false);

    // Contextual hover target inspector
    const onMouseOver = (e) => {
      const target = e.target;
      if (!target) return;

      const isInteractive =
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.getAttribute("role") === "button";

      const isCard =
        target.closest(".card-glow-interactive") ||
        target.closest(".cursor-pointer");

      setIsHovered(Boolean(isInteractive));
      setIsCardHovered(Boolean(isCard && !isInteractive));
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    document.addEventListener("mouseenter", onMouseEnter);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseover", onMouseOver);

    return () => {
      document.body.classList.remove("custom-cursor-active");
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mouseenter", onMouseEnter);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseover", onMouseOver);
    };
  }, [cursorX, cursorY, isVisible]);

  if (!isMounted) return null;

  return (
    <>
      {/* 1. Instant Precision Inner Dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[999999]"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isMouseDown ? 0.6 : isHovered ? 1.5 : isCardHovered ? 1.25 : 1,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ duration: 0.15 }}
        aria-hidden="true"
      >
        <div className="w-2.5 h-2.5 rounded-full bg-accent shadow-[0_0_12px_rgba(255,87,34,0.95)]" />
      </motion.div>

      {/* 2. Smooth Trailing Ambient Aura Follower Ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[999998]"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isMouseDown
            ? 0.8
            : isHovered
            ? 1.55
            : isCardHovered
            ? 1.85
            : 1,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ duration: 0.2 }}
        aria-hidden="true"
      >
        <div
          className={`rounded-full transition-all duration-300 flex items-center justify-center ${
            isHovered
              ? "w-11 h-11 border border-accent/80 bg-accent/15 backdrop-blur-[2px] shadow-[0_0_24px_rgba(255,87,34,0.45)]"
              : isCardHovered
              ? "w-14 h-14 border border-white/40 bg-white/[0.08] backdrop-blur-[3px] shadow-[0_0_30px_rgba(255,255,255,0.2)]"
              : "w-8 h-8 border border-accent/40 bg-accent/[0.04]"
          }`}
        >
          {isCardHovered && (
            <span className="font-mono-code text-[8px] text-accent font-bold tracking-widest uppercase">
              VIEW
            </span>
          )}
        </div>
      </motion.div>
    </>
  );
}
