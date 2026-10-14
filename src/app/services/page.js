import Link from "next/link";
import { services } from "@/data/services";
import SectionHeading from "@/components/ui/SectionHeading";
import HeroBackground from "@/components/layout/HeroBackground";
import { siteConfig } from "@/data/siteConfig";
import { ArrowUpRight, CheckCircle2, Mail, MessageSquare } from "lucide-react";

export const metadata = {
  title: `Services & Engagements — ${siteConfig.name}`,
  description: `Web and mobile development services offered by ${siteConfig.name}: Next.js frontend architecture, React Native mobile apps, motion design, and performance audits.`,
};

/**
 * Services Page Route (/services)
 * Detailed presentation of development capabilities, deliverables, and inquiry flows.
 */
export default function ServicesPage() {
  return (
    <div className="relative w-full pt-32 pb-24 sm:pt-40 sm:pb-32 overflow-hidden">
      {/* Art-Directed Multi-Layer Hero Background */}
      <HeroBackground />

      <div className="site-container">
        {/* Page Top Heading */}
        <div className="max-w-4xl mb-16 sm:mb-20">
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono-code text-xs font-semibold text-accent tracking-widest uppercase">
              [CAPABILITIES & ENGAGEMENTS]
            </span>
            <span className="h-[1px] w-6 bg-accent/40" aria-hidden="true" />
            <span className="font-mono-code text-xs text-[#94949C] tracking-widest uppercase">
              END-TO-END TECHNICAL EXECUTION
            </span>
          </div>

          <h1 className="font-display text-fluid-hero text-white tracking-tight leading-[1.05]">
            Tailored engineering for digital products that demand excellence.
          </h1>

          <p className="mt-6 text-fluid-lead text-[#A1A1AA] leading-relaxed max-w-2xl">
            Whether starting from an empty repository or modernizing an existing codebase, I provide rigorous technical leadership and execution.
          </p>
        </div>

        {/* Services Detailed List */}
        <div className="flex flex-col divide-y divide-white/[0.08] mb-24">
          {services.map((service) => (
            <div
              key={service.id}
              className="py-14 sm:py-20 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start"
            >
              {/* Left Column: Number, Title, Subtitle */}
              <div className="lg:col-span-5">
                <span className="font-mono-code text-sm font-semibold text-accent block mb-3">
                  SERVICE {service.index}
                </span>

                <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
                  {service.title}
                </h2>

                <p className="mt-3 text-sm text-[#94949C] leading-relaxed">
                  {service.subtitle}
                </p>

                <p className="mt-6 text-sm text-[#A1A1AA] leading-relaxed">
                  {service.description}
                </p>

                {/* Service Technologies */}
                <div className="mt-8 pt-6 border-t border-white/[0.06]">
                  <span className="font-mono-code text-[11px] text-[#71717A] uppercase tracking-wider block mb-3">
                    Technologies & Stack:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((t) => (
                      <span
                        key={t}
                        className="font-mono-code text-xs px-2.5 py-1 rounded bg-white/[0.03] border border-white/[0.08] text-white/80"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Key Deliverables & Direct Inquiry Trigger */}
              <div className="card-glow-interactive lg:col-span-7 flex flex-col justify-between h-full p-8 sm:p-10 cursor-pointer">
                <div>
                  <h3 className="font-display text-lg font-bold text-white mb-6">
                    Key Scope & Deliverables
                  </h3>

                  <div className="flex flex-col gap-3.5 mb-10">
                    {service.deliverables.map((deliv, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                        <span className="text-sm text-[#D4D4D8] leading-relaxed">
                          {deliv}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Service Inquiry Button */}
                <div className="pt-6 border-t border-white/[0.06] flex flex-wrap items-center justify-between gap-4">
                  <span className="font-mono-code text-xs text-[#71717A]">
                    Simple onboarding · Clear communication
                  </span>

                  <a
                    href={`mailto:${siteConfig.socials.email.address}?subject=${encodeURIComponent(
                      service.subject
                    )}`}
                    className="btn-primary text-xs py-2.5 px-5"
                    aria-label={`Inquire about ${service.title}`}
                  >
                    <span>{service.ctaText}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-black" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Final Contact & Engagement Section */}
        <div className="card-glow-interactive p-10 sm:p-16 text-center max-w-4xl mx-auto cursor-pointer">
          <span className="font-mono-code text-xs text-accent uppercase tracking-widest block mb-3">
            Inquiry & Scoping
          </span>

          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
            Have a project or technical challenge?
          </h2>

          <p className="text-sm sm:text-base text-[#94949C] leading-relaxed mb-10 max-w-2xl mx-auto">
            Reach out directly with your project scope or architectural requirements. I typically respond within 24 hours with availability and next steps.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={siteConfig.socials.email.url}
              className="btn-accent"
              aria-label="Direct email inquiry"
            >
              <Mail className="w-4 h-4" />
              <span>{siteConfig.socials.email.address}</span>
            </a>

            <a
              href={siteConfig.socials.whatsapp.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
              aria-label="Connect via WhatsApp"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              <span>Chat on WhatsApp</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
