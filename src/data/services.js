/**
 * Centralized Services Configuration
 * 
 * Defines engagement options, deliverables, technologies, and scopes.
 * Easily update or expand these offerings to match your client services.
 */

export const services = [
  {
    id: "serv-01",
    index: "01",
    title: "Website & Creative Web Development",
    subtitle: "Art-directed web experiences with memorable visual storytelling",
    description:
      "Crafting bespoke marketing websites, digital portfolios, and interactive brand experiences. I merge editorial typography with fluid animations to ensure your brand leaves an indelible impression on visitors.",
    deliverables: [
      "Custom responsive web development (Desktop, Tablet, Mobile)",
      "Tailored micro-interactions and smooth scroll orchestration",
      "Editorial typography hierarchy and design token system",
      "Full SEO optimization, OpenGraph tags, and semantic markup",
      "Zero-layout-shift architecture and modern asset compression",
    ],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Motion", "HTML5/CSS3"],
    ctaText: "Inquire About Web Development",
    subject: "Inquiry: Website Development Project",
  },
  {
    id: "serv-02",
    index: "02",
    title: "Frontend Engineering & Design Systems",
    subtitle: "Scalable, accessible component architectures engineered for longevity",
    description:
      "Transforming complex Figma and design specifications into modular, enterprise-ready React architectures. I establish systematic design tokens, reusable component libraries, and strict type safety.",
    deliverables: [
      "Production-grade React / Next.js component libraries",
      "Design token architecture and multi-theme configuration",
      "Accessibility compliance (WCAG 2.1 AA keyboard & screen-reader support)",
      "Comprehensive TypeScript interfaces and strict state management",
      "Cross-browser testing and performance profiling",
    ],
    technologies: ["React 19", "Next.js App Router", "TypeScript", "Tailwind CSS", "Storybook", "Radix UI"],
    ctaText: "Inquire About Frontend Engineering",
    subject: "Inquiry: Frontend Architecture & Design Systems",
  },
  {
    id: "serv-03",
    index: "03",
    title: "React Native Mobile Applications",
    subtitle: "Fluid, native iOS & Android applications with shared codebase efficiency",
    description:
      "Designing and developing cross-platform mobile apps that feel genuinely native. From smooth gesture physics and offline SQLite storage to Bluetooth Low Energy hardware integration and app store submission.",
    deliverables: [
      "End-to-end iOS and Android mobile app development",
      "60/120 FPS gesture interactions powered by Reanimated & Skia",
      "Offline-first local database caching and background synchronization",
      "Push notifications, deep-linking, and biometric authentication",
      "App Store & Google Play Store release management",
    ],
    technologies: ["React Native", "Expo Application Framework", "TypeScript", "Reanimated 3", "SQLite", "Native Modules"],
    ctaText: "Inquire About Mobile App Development",
    subject: "Inquiry: React Native Mobile Application",
  },
  {
    id: "serv-04",
    index: "04",
    title: "Full-Stack Web Applications",
    subtitle: "Robust end-to-end architectures from database to reactive interface",
    description:
      "Building complete digital software products. I engineer fast backend endpoints, manage SQL/NoSQL databases, authenticate users securely, and connect everything to an intuitive, tactile frontend interface.",
    deliverables: [
      "Full-stack web application planning and development",
      "RESTful and GraphQL API design with secure authentication (OAuth/JWT)",
      "Relational database modeling with PostgreSQL and ORM tooling",
      "Third-party integrations: Stripe, payment gateways, and headless CMS",
      "Cloud deployment pipelines (Vercel, AWS, Docker)",
    ],
    technologies: ["Next.js", "Node.js", "PostgreSQL", "Prisma/Drizzle", "GraphQL", "Docker"],
    ctaText: "Inquire About Full-Stack Systems",
    subject: "Inquiry: Full-Stack Web Application",
  },
  {
    id: "serv-05",
    index: "05",
    title: "Motion Design & Creative Micro-Interactions",
    subtitle: "Subtle, refined choreography that elevates utility into delight",
    description:
      "Adding dimension and sensory polish to digital interfaces through intentional motion. I implement page transitions, SVG morphs, magnetic buttons, and canvas-driven visuals without compromising performance.",
    deliverables: [
      "Seamless route-to-route page transitions with zero visual flicker",
      "Tactile hover, focus, and pointer micro-interactions",
      "Interactive SVG and canvas animations",
      "Hardware-accelerated CSS transforms and spring physics",
      "Respect for user preferences via prefers-reduced-motion queries",
    ],
    technologies: ["Motion for React", "GSAP ScrollTrigger", "HTML5 Canvas", "CSS Houdini", "Web Animations API"],
    ctaText: "Inquire About Motion Design",
    subject: "Inquiry: Motion & Interaction Design",
  },
  {
    id: "serv-06",
    index: "06",
    title: "Performance Optimization & Audits",
    subtitle: "Turning sluggish web and mobile experiences into sub-second powerhouses",
    description:
      "Diagnosing bottlenecks, memory leaks, and layout shifts in existing web and mobile codebases. I refactor render loops, optimize asset pipelines, and elevate Core Web Vitals to the 95th percentile.",
    deliverables: [
      "Comprehensive Core Web Vitals audit and remediation plan",
      "JavaScript bundle size reduction and dynamic code-splitting",
      "React Native bridge profiling and FPS stability enhancement",
      "Image and media conversion to modern responsive formats",
      "Caching strategies and CDN configuration",
    ],
    technologies: ["Lighthouse", "Chrome DevTools", "WebPageTest", "Flipper", "React Profiler"],
    ctaText: "Inquire About Performance Optimization",
    subject: "Inquiry: Performance Optimization & Audit",
  },
];
