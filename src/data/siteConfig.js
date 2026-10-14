/**
 * Centralized Site Configuration
 * 
 * Contains personal details, branding, contact links, and metadata.
 * Update these values to customize the portfolio for your personal identity.
 */

export const siteConfig = {
  // Personal Branding & Identity
  name: "Mohsin",
  fullName: "Mohsin",
  title: "Creative Developer & Mobile Engineer",
  shortRole: "Web & Mobile Developer",
  location: "Global / Remote",
  timezone: "UTC+5",
  availability: {
    status: "Available for new projects",
    badge: "Open to Work · Q2/Q3 2026",
    isAvailable: true,
  },

  // Editorial Bio Statements
  bio: {
    tagline: "Building fluid web experiences & high-performance mobile applications.",
    description:
      "A senior creative developer specializing in modern web ecosystems and React Native mobile applications. I bridge the divide between expressive art direction, robust software architecture, and tactile micro-interactions.",
    statement:
      "I craft digital products that balance aesthetic precision with architectural rigor—delivering software that feels natural, fast, and impossible to ignore.",
  },

  // Centralized Social & Contact Channels (All links configurable)
  socials: {
    github: {
      name: "GitHub",
      url: "https://github.com/mohsin",
      label: "Explore GitHub repositories",
      handle: "@mohsin",
    },
    linkedin: {
      name: "LinkedIn",
      url: "https://linkedin.com/in/mohsin",
      label: "Connect on LinkedIn",
      handle: "/in/mohsin",
    },
    whatsapp: {
      name: "WhatsApp",
      url: "https://wa.me/1234567890", // Update with your international phone number format: https://wa.me/<number>
      label: "Chat on WhatsApp",
      handle: "+1 (555) 019-2834",
    },
    email: {
      name: "Email",
      address: "hello@mohsin.dev",
      url: "mailto:hello@mohsin.dev",
      label: "Send an email inquiry",
      handle: "hello@mohsin.dev",
    },
  },

  // Navigation Links for Desktop and Mobile Navigation
  navLinks: [
    { name: "Home", href: "/home" },
    { name: "Work", href: "/work" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about-us" },
    { name: "Testimonials", href: "/testimonials" },
  ],

  // Footer & Legal
  footer: {
    copyrightYear: 2026,
    colophon: "Designed & Engineered with Next.js & Motion",
  },
};
