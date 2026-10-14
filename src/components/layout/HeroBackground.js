"use client";

/**
 * Atmospheric Hero Section Background
 * 
 * Provides an art-directed backdrop for hero sections across all pages:
 * - Subtle ambient radial spotlight (warm sunset ember & emerald hue)
 * - Fine engineering dot grid with organic radial mask falloff
 * - Soft horizon border glow to anchor typography and CTAs
 * - Completely non-intrusive (pointer-events-none, hardware accelerated)
 */
export default function HeroBackground({ className = "", accent = "default" }) {
  return (
    <div
      className={`absolute inset-0 overflow-hidden pointer-events-none -z-10 ${className}`}
      aria-hidden="true"
    >
      {/* 1. Ambient Overhead Spotlight Mesh */}
      <div
        className="absolute -top-[20%] left-1/2 -translate-x-1/2 w-[90vw] max-w-[1200px] h-[550px] rounded-full blur-[130px] opacity-60"
        style={{
          background:
            accent === "emerald"
              ? "radial-gradient(circle, rgba(16, 185, 129, 0.22) 0%, rgba(255, 87, 34, 0.12) 45%, transparent 75%)"
              : "radial-gradient(circle, rgba(255, 87, 34, 0.20) 0%, rgba(16, 185, 129, 0.10) 45%, transparent 75%)",
        }}
      />

      {/* 2. Secondary Ambient Glow for Depth */}
      <div
        className="absolute top-[10%] -left-[10%] w-[500px] h-[350px] bg-accent/10 rounded-full blur-[140px] opacity-40"
      />
      <div
        className="absolute top-[15%] -right-[10%] w-[500px] h-[350px] bg-emerald-500/10 rounded-full blur-[140px] opacity-40"
      />

      {/* 3. Subtle Engineering Architectural Grid Matrix */}
      <div
        className="absolute inset-0 opacity-[0.14]"
        style={{
          backgroundImage: `
            radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.5) 1px, transparent 0),
            linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: "32px 32px, 96px 96px, 96px 96px",
          maskImage: "radial-gradient(ellipse 70% 60% at 50% 25%, #000 20%, transparent 85%)",
          WebkitMaskImage: "radial-gradient(ellipse 70% 60% at 50% 25%, #000 20%, transparent 85%)",
        }}
      />

      {/* 4. Top Header Vignette Transition */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#0a0a0b] via-[#0a0a0b]/60 to-transparent" />

      {/* 5. Bottom Horizon Falloff */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#0a0a0b] to-transparent" />
    </div>
  );
}
