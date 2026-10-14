"use client";

import { useState } from "react";
import Image from "next/image";
import { ExternalLink, Smartphone, Monitor } from "lucide-react";

/**
 * Device Frame Component
 * Inspired by nexstudio.tech browser mockups and modern device showcases.
 * 
 * Supports:
 * - Browser Window frame with window controls & domain pill
 * - Mobile Phone frame with notch, status bar & realistic bevels
 * - Graceful fallback UI with interactive preview if image is not present
 */
export default function DeviceFrame({
  type = "browser",
  domain = "project.dev",
  title = "Project Preview",
  coverImage,
  projectSlug,
  className = "",
}) {
  const [imgError, setImgError] = useState(false);

  if (type === "mobile") {
    return (
      <div className={`relative max-w-[320px] mx-auto ${className}`}>
        <div className="mobile-mockup aspect-[9/18.5] bg-[#0c0c10] flex flex-col justify-between">
          {/* Dynamic Island / Notch */}
          <div className="mobile-notch flex items-center justify-center">
            <div className="w-2.5 h-2.5 rounded-full bg-[#181820] mr-2" />
            <div className="w-1.5 h-1.5 rounded-full bg-[#101018]" />
          </div>

          {/* Mobile Status Bar */}
          <div className="flex items-center justify-between px-6 pt-3 pb-2 text-[10px] text-white/50 font-mono-code z-10">
            <span>09:41</span>
            <div className="flex items-center gap-1.5">
              <span>5G</span>
              <div className="w-4 h-2 border border-white/50 rounded-xs p-[0.5px]">
                <div className="h-full w-full bg-white/70" />
              </div>
            </div>
          </div>

          {/* Screen Content */}
          <div className="relative flex-1 rounded-[24px] overflow-hidden bg-[#14141c] flex flex-col justify-center items-center p-4">
            {coverImage && !imgError ? (
              <div className="relative w-full h-full">
                <Image
                  src={coverImage}
                  alt={`${title} mobile preview`}
                  fill
                  className="object-cover"
                  onError={() => setImgError(true)}
                />
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center text-center p-4">
                <Smartphone className="w-10 h-10 text-accent/60 mb-3" />
                <h4 className="font-display text-white text-base font-semibold mb-1">
                  {title}
                </h4>
                <span className="font-mono-code text-[11px] text-[#94949C]">
                  Mobile Application
                </span>
                <div className="mt-4 flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/15 border border-accent/30 text-accent text-[11px] font-mono-code">
                  <span>Production Release</span>
                </div>
              </div>
            )}
          </div>

          {/* Bottom Home Indicator */}
          <div className="pt-2 pb-1 flex justify-center">
            <div className="w-28 h-1 rounded-full bg-white/30" />
          </div>
        </div>
      </div>
    );
  }

  // Default: Browser Window Mockup (nexstudio.tech inspired)
  return (
    <div className={`browser-mockup w-full ${className}`}>
      {/* Browser Bar */}
      <div className="browser-header">
        <div className="browser-dots">
          <span />
          <span />
          <span />
        </div>

        <div className="browser-domain-pill flex items-center gap-1.5">
          <span>{domain}</span>
          <ExternalLink className="w-2.5 h-2.5 opacity-50" />
        </div>

        <div className="w-10" />
      </div>

      {/* Screen Area */}
      <div className="relative aspect-[16/10] w-full bg-[#121216] overflow-hidden flex items-center justify-center">
        {coverImage && !imgError ? (
          <div className="relative w-full h-full">
            <Image
              src={coverImage}
              alt={`${title} desktop preview`}
              fill
              className="object-cover transition-transform duration-700 ease-out hover:scale-105"
              onError={() => setImgError(true)}
            />
          </div>
        ) : (
          <div className="relative w-full h-full flex flex-col justify-between p-6 sm:p-8 bg-gradient-to-br from-[#16161d] to-[#0c0c10]">
            {/* Ambient Background Graphic */}
            <div
              className="absolute inset-0 opacity-15 pointer-events-none"
              style={{
                backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.2) 1px, transparent 0)`,
                backgroundSize: "24px 24px",
              }}
            />

            <div className="flex items-center justify-between z-10">
              <span className="font-mono-code text-[11px] text-accent uppercase tracking-wider bg-accent/10 px-2.5 py-1 rounded-full border border-accent/25">
                Active Deployment
              </span>
              <span className="font-mono-code text-[11px] text-[#71717A]">
                Production System
              </span>
            </div>

            <div className="z-10 my-auto text-center py-6">
              <Monitor className="w-10 h-10 text-white/30 mx-auto mb-3" />
              <h4 className="font-display text-white text-xl sm:text-2xl font-bold mb-2">
                {title}
              </h4>
              <p className="text-[#94949C] text-xs sm:text-sm max-w-sm mx-auto">
                Responsive digital architecture engineered for production stability and performance.
              </p>
            </div>

            <div className="flex items-center justify-between text-[11px] font-mono-code text-[#71717A] border-t border-white/[0.06] pt-3 z-10">
              <span>Verified Architecture</span>
              <span className="text-emerald-400">● Live Platform</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
