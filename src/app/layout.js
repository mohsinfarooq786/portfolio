import "./globals.css";
import "../components/assets/style.css";
import { Syne, Plus_Jakarta_Sans, JetBrains_Mono, DM_Sans } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageTransition from "@/components/layout/PageTransition";
import CustomCursor from "@/components/ui/CustomCursor";
import { siteConfig } from "@/data/siteConfig";

// Editorial Display Font: Syne (Headlines & Project Titles)
const syne = Syne({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-display-headline",
  display: "swap",
});

// Editorial Body Sans Font: Plus Jakarta Sans (Clean, high-legibility interface copy)
const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body-sans",
  display: "swap",
});

// Highly-Readable Contemporary Headline Font: DM Sans (douglus.site inspired)
const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-dm-sans",
  display: "swap",
});

// Editorial Monospace Font: JetBrains Mono (Metadata, timestamps, code snippets)
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono-jetbrains",
  display: "swap",
});

// SEO & Metadata Configuration
export const metadata = {
  title: `${siteConfig.name} — ${siteConfig.title}`,
  description: siteConfig.bio.description,
  keywords: [
    "Creative Developer",
    "Web Developer",
    "React Native Mobile Engineer",
    "Frontend Architect",
    "Next.js Specialist",
    "Motion Design",
    "TypeScript",
  ],
  authors: [{ name: siteConfig.name, url: "https://mohsin.dev" }],
  creator: siteConfig.name,
  openGraph: {
    title: `${siteConfig.name} — ${siteConfig.title}`,
    description: siteConfig.bio.statement,
    url: "https://mohsin.dev",
    siteName: `${siteConfig.name} Portfolio`,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — ${siteConfig.title}`,
    description: siteConfig.bio.description,
    creator: siteConfig.socials.github.handle,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = {
  themeColor: "#0a0a0b",
  width: "device-width",
  initialScale: 1,
};

/**
 * Root Application Layout
 * Provides persistent navigation, page transitions, custom typography variables, and colophon footer.
 */
export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${plusJakartaSans.variable} ${jetbrainsMono.variable} ${dmSans.variable} scroll-smooth`}
    >
      <body className="bg-[#0a0a0b] text-[#f5f5f0] min-h-screen flex flex-col antialiased selection:bg-[#ff5722] selection:text-white">
        {/* Persistent Desktop & Mobile Navbar (douglus.site inspired) */}
        <Navbar />

        {/* Dynamic Route Page with Transition Handler (visuvate.com inspired) */}
        <main id="main-content" className="flex-1 w-full">
          <PageTransition>{children}</PageTransition>
        </main>

        {/* Global Editorial Footer */}
        <Footer />

        {/* Ambient Custom Cursor (Desktop fine pointers only) */}
        <CustomCursor />
      </body>
    </html>
  );
}
