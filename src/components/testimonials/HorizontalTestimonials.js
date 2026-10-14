"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform, useSpring } from "motion/react";
import { testimonials } from "@/data/testimonials";
import { Quote, ArrowUpRight, CheckCircle, ArrowLeft, ArrowRight, Sparkles } from "lucide-react";

export default function HorizontalTestimonials() {
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [maxScrollDistance, setMaxScrollDistance] = useState(1200);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const updateScrollDistance = () => {
      if (trackRef.current) {
        const trackWidth = trackRef.current.scrollWidth;
        const viewportWidth = window.innerWidth;
        const rightOffset = viewportWidth < 640 ? 40 : 120;
        const distance = Math.max(0, trackWidth - viewportWidth + rightOffset);
        setMaxScrollDistance(distance);
      }
    };

    updateScrollDistance();

    let observer;
    if (typeof ResizeObserver !== "undefined" && trackRef.current) {
      observer = new ResizeObserver(() => {
        updateScrollDistance();
      });
      observer.observe(trackRef.current);
    }

    window.addEventListener("resize", updateScrollDistance);
    return () => {
      if (observer) observer.disconnect();
      window.removeEventListener("resize", updateScrollDistance);
    };
  }, []);

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    mass: 0.2,
  });

  const xTransform = useTransform(smoothProgress, [0, 1], [0, -maxScrollDistance]);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      const total = testimonials.length;
      const idx = Math.min(
        total - 1,
        Math.max(0, Math.round(latest * (total - 1)))
      );
      setCurrentIndex(idx);
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  const scrollToCard = (index) => {
    if (!containerRef.current) return;
    const clampedIndex = Math.max(0, Math.min(testimonials.length - 1, index));
    const rect = containerRef.current.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const containerTop = rect.top + scrollTop;
    const scrollableDistance = containerRef.current.offsetHeight - window.innerHeight;

    if (scrollableDistance > 0) {
      const targetScrollY =
        containerTop + (clampedIndex / (testimonials.length - 1)) * scrollableDistance;

      window.scrollTo({
        top: targetScrollY,
        behavior: "smooth",
      });
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      scrollToCard(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < testimonials.length - 1) {
      scrollToCard(currentIndex + 1);
    }
  };

  return (
    <div
      ref={containerRef}
      className="relative h-[180vh] sm:h-[200vh] w-full"
      aria-label="Pinned Horizontal Testimonials Showcase"
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-center pt-20 sm:pt-24 pb-8">
        <div className="site-container w-full mb-5 sm:mb-7">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/[0.08]">
            <div className="flex items-center gap-3">
              <span className="font-mono-code text-xs text-accent uppercase tracking-widest flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span className="font-mono-code text-[1rem]">Testimonials</span>
              </span>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5 mr-3">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => scrollToCard(i)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${i === currentIndex
                      ? "w-7 bg-orange-500"
                      : "w-2 bg-white/20 hover:bg-white/40"
                      }`}
                    aria-label={`Jump to review ${i + 1}`}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={handlePrev}
                disabled={currentIndex === 0}
                className={`inline-flex items-center gap-2 px-3 py-2 rounded-lg border text-xs font-mono-code transition-all duration-200 ${currentIndex === 0
                  ? "border-white/5 text-white/20 cursor-not-allowed bg-transparent"
                  : "border-white/15 bg-white/[0.04] text-white hover:border-accent hover:bg-accent hover:text-white active:scale-95"
                  }`}
                aria-label="Scroll left to previous testimonial"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Prev</span>
              </button>

              <button
                type="button"
                onClick={handleNext}
                disabled={currentIndex === testimonials.length - 1}
                className={`inline-flex items-center gap-2 px-3 py-2 rounded-lg border text-xs font-mono-code transition-all duration-200 ${currentIndex === testimonials.length - 1
                  ? "border-white/5 text-white/20 cursor-not-allowed bg-transparent"
                  : "border-white/15 bg-white/[0.04] text-white hover:border-accent hover:bg-accent hover:text-white active:scale-95"
                  }`}
                aria-label="Scroll right to next testimonial"
              >
                <span className="hidden sm:inline">Next</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        <div className="relative w-full">
          {currentIndex > 0 && (
            <button
              type="button"
              onClick={handlePrev}
              className="hidden sm:flex absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-white items-center justify-center hover:border-accent hover:bg-accent hover:text-white transition-all duration-200 shadow-2xl active:scale-95"
              aria-label="Scroll left to previous review"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
          )}

          {currentIndex < testimonials.length - 1 && (
            <button
              type="button"
              onClick={handleNext}
              className="hidden sm:flex absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-white items-center justify-center hover:border-accent hover:bg-accent hover:text-white transition-all duration-200 shadow-2xl active:scale-95"
              aria-label="Scroll right to next review"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          )}

          <div className="w-full pl-[clamp(1rem,3.5vw,3.5rem)]">
            <motion.div
              ref={trackRef}
              style={{ x: xTransform }}
              className="flex gap-6 sm:gap-8 items-stretch will-change-transform pr-16"
            >
              {testimonials.map((item, idx) => (
                <div
                  key={item.id}
                  className="card-glow-interactive shrink-0 w-[85vw] sm:w-[500px] lg:w-[560px] p-7 sm:p-10 flex flex-col justify-between cursor-pointer"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <Quote className="w-7 h-7 text-accent/60" />
                      <span className="font-mono-code text-xs text-[#71717A]">
                        REFERENCE 0{idx + 1} · {item.year}
                      </span>
                    </div>

                    <p className="font-display text-base sm:text-lg lg:text-xl text-white font-medium leading-relaxed italic mb-6">
                      &ldquo;{item.quote}&rdquo;
                    </p>
                  </div>

                  <div className="pt-6 border-t border-white/[0.08] flex items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="w-20 h-16 rounded-full bg-accent/20 border border-accent/40 flex items-center justify-center font-display font-bold text-accent text-sm">
                        {item.avatar}
                      </div>
                      <div>
                        <div className="flex items-center gap-1.5">
                          <h4 className="font-display text-base font-bold text-white">
                            {item.author}
                          </h4>
                          {item.verified && (
                            <CheckCircle className="w-3.5 h-3.5 text-accent" />
                          )}
                        </div>
                        <span className="text-xs text-[#94949C] block mt-0.5">
                          {item.role} · {item.company}
                        </span>
                      </div>
                    </div>

                    {item.projectSlug && (
                      <Link
                        href={`/work/${item.projectSlug}`}
                        className="hidden sm:flex items-center gap-1 text-xs text-accent hover:underline font-mono-code"
                      >
                        <span>{item.project}</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </Link>
                    )}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
