import HeroSection from "@/components/home/HeroSection";
import SelectedProjects from "@/components/home/SelectedProjects";
import ServicesOverview from "@/components/home/ServicesOverview";
import CapabilitiesSection from "@/components/home/CapabilitiesSection";
import TestimonialsPreview from "@/components/home/TestimonialsPreview";
import ContactCTA from "@/components/home/ContactCTA";
import { siteConfig } from "@/data/siteConfig";

export const metadata = {
  title: `${siteConfig.name} — ${siteConfig.title}`,
  description: siteConfig.bio.description,
};

/**
 * Home Page Route (/home)
 * Primary showcase combining Hero, Selected Projects, Services, Capabilities, Testimonials, and Contact CTA.
 */
export default function HomePage() {
  return (
    <div className="w-full flex flex-col">
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Selected Projects Section (pamidordesign.co & gallery-play.be inspired) */}
      <SelectedProjects />

      {/* 3. Services Overview */}
      <ServicesOverview />

      {/* 4. Technical Capabilities & Philosophy */}
      <CapabilitiesSection />

      {/* 5. Endorsements & Testimonials Preview */}
      <TestimonialsPreview />

      {/* 6. Contact CTA Section (nexstudio.tech inspired) */}
      <ContactCTA />
    </div>
  );
}
