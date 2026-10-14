import Link from "next/link";
import { testimonials } from "@/data/testimonials";
import SectionHeading from "@/components/ui/SectionHeading";
import HeroBackground from "@/components/layout/HeroBackground";
import HorizontalTestimonials from "@/components/testimonials/HorizontalTestimonials";
import { siteConfig } from "@/data/siteConfig";
import { Quote, ArrowUpRight, CheckCircle, Mail, MessageSquare } from "lucide-react";

export const metadata = {
  title: `Testimonials — ${siteConfig.name}`,
  description: `Client reviews, collaborator endorsements, and engineering feedback for ${siteConfig.name}.`,
};

export default function TestimonialsPage() {
  return (
    <div className="relative w-full pt-28 pb-16 sm:pt-36 sm:pb-24">
      <HeroBackground />

      <div className="site-container">
        <div className="max-w-4xl mb-10 sm:mb-14">
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono-code text-xs font-semibold text-accent tracking-widest uppercase">
              [ENDORSEMENTS]
            </span>
            <span className="h-[1px] w-6 bg-accent/40" aria-hidden="true" />
            <span className="font-mono-code text-xs text-[#94949C] tracking-widest uppercase">
              CLIENT & COLLABORATOR FEEDBACK
            </span>
          </div>

          <h1 className="font-display text-fluid-hero text-white tracking-tight leading-[1.05]">
            Credibility measured through trust, velocity & craftsmanship.
          </h1>

          <p className="mt-6 text-fluid-lead text-[#A1A1AA] leading-relaxed max-w-2xl">
            A collection of reviews from technical leaders, product partners, and founders on engineering velocity and design craft.
          </p>
        </div>
      </div>

      <HorizontalTestimonials />

      <div className="site-container pt-14">

        <div className="card-glow-interactive p-10 sm:p-14 text-center max-w-3xl mx-auto cursor-pointer">
          <span className="font-mono-code text-xs text-accent uppercase tracking-widest block mb-3">
            Your Project Next
          </span>
          <h2 className="font-display text-2xl sm:text-4xl font-bold text-white mb-4">
            Ready to bring your next product to life?
          </h2>
          <p className="text-sm sm:text-base text-[#94949C] leading-relaxed mb-8 max-w-xl mx-auto">
            From initial technical scoping to production deployment, I work closely with your team to deliver standout results.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={siteConfig.socials.email.url}
              className="btn-accent"
              aria-label="Send email inquiry"
            >
              <Mail className="w-4 h-4" />
              <span>Email {siteConfig.socials.email.address}</span>
            </a>

            <a
              href={siteConfig.socials.whatsapp.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
              aria-label="Chat on WhatsApp"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              <span>WhatsApp Message</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
