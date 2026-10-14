/**
 * Centralized Projects Database
 * 
 * Authentic, verified project records for Mohsin's engineering portfolio.
 * 
 * Each project contains verified metadata, platforms, live URLs, app store links,
 * authentic screenshots, and detailed case-study narratives.
 */

export const projects = [
  {
    id: "proj-jesuspod",
    slug: "jesuspod-christian-media",
    title: "JesusPOD",
    subtitle: "Christian Media Platform & Faith-Based Audio/Video Hub",
    category: "Mobile Application",
    year: "2024",
    role: "Web & Mobile App Developer",
    timeline: "Production Release",
    client: "JesusPOD / FPG Media",
    featured: true,
    mockupType: "mobile",
    mockupDomain: "jesuspod.com",
    shortDescription:
      "Cross-platform Christian media platform featuring 24/7 live radio streaming, on-demand podcast directories, video sermons, and a digital faith-based eBook library.",
    description:
      "JesusPOD is a multi-channel Christian media platform and mobile application developed for believers worldwide. The platform integrates 24/7 live Christian radio streaming, an on-demand podcast library, video sermons, and a digital faith-based eBook catalog into a seamless, uplifting user experience.",
    technologies: ["React", "Vite", "REST APIs", "Audio Streaming", "Android SDK"],
    tags: ["Mobile", "Audio Streaming", "Christian Media", "Podcasts", "eBooks"],
    liveUrl: "https://www.jesuspod.com/home",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.jesuspod.app&hl=en",
    appStoreUrl: null,
    githubUrl: null,
    stats: [
      { label: "Platforms", value: "Web & Android" },
      { label: "Audio & Media", value: "24/7 Live Radio" },
      { label: "Library", value: "Podcasts & eBooks" },
    ],
    overview:
      "JesusPOD was engineered to offer Christians worldwide an accessible, uplifting digital sanctuary. Believers often navigate fractured platforms for sermons, inspirational podcasts, live broadcasts, and Christian literature. JesusPOD unifies these diverse media formats under one cohesive digital umbrella accessible directly on the web and on Android devices.",
    challenges:
      "Delivering continuous, low-latency audio playback for live 24/7 radio streams while supporting background playback, playlist persistence, and simultaneous eBook browsing without interrupting media execution.",
    solution:
      "Engineered a dedicated audio service pipeline with background playback handlers and notification lock-screen controls. The responsive web application was built with a decoupled component architecture, allowing seamless transitions between podcast episodes, video players, live radio, and reading views.",
    keyFeatures: [
      "24/7 continuous live Christian radio streaming with background playback support",
      "Extensive faith-based podcast directory organized by speakers, topics, and series",
      "Curated video sermons and worship music broadcasts",
      "Integrated Christian eBook reader for devotional literature and study materials",
      "Cross-platform availability on modern Web and Google Play Android",
    ],
    coverImage: "/images/projects/jesuspod/cover.png",
    iconImage: "/images/projects/jesuspod/icon.png",
    gallery: [
      "/images/projects/jesuspod/screen-1.png",
      "/images/projects/jesuspod/screen-2.png",
      "/images/projects/jesuspod/screen-3.png",
      "/images/projects/jesuspod/screen-4.png",
    ],
  },
  {
    id: "proj-lsm",
    slug: "lsm-pet-animal-marketplace",
    title: "Live Stock Market (LSM)",
    subtitle: "Pet & Animal Marketplace, Supplies & Veterinary Care App",
    category: "Mobile Application",
    year: "2024",
    role: "Mobile Application Developer",
    timeline: "Production Release",
    client: "Utecho / Live Stock Market",
    featured: true,
    mockupType: "mobile",
    mockupDomain: "livestockmarket.app",
    shortDescription:
      "Dedicated mobile marketplace for buying, selling, and adopting animals and birds, alongside pet supplies, FDA/EPA-approved medicines, and doctor consultations.",
    description:
      "Live Stock Market (LSM) is a dedicated pet, bird, and animal marketplace application. It connects breeders, pet enthusiasts, and animal owners with a secure platform to browse animals for sale or adoption, purchase authentic food, cages, toys, and veterinary medicines, and access specialized services such as doctor helplines, DNA testing, laser-engraved rings, and stud crossing.",
    technologies: ["Android SDK", "REST APIs", "Mobile Marketplace", "Location Services"],
    tags: ["Mobile", "Marketplace", "Animals & Pets", "Adoption", "Veterinary"],
    liveUrl: null,
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.lsm.app&hl=en",
    appStoreUrl: null,
    githubUrl: null,
    stats: [
      { label: "Platform", value: "Android Mobile App" },
      { label: "Categories", value: "Animals, Birds & Supplies" },
      { label: "Services", value: "Adoption & Vet Care" },
    ],
    overview:
      "Animal lovers and breeders previously faced fragmented classified channels, unregulated trading groups, and counterfeit pet medication risks. LSM unifies the entire companion animal ecosystem—spanning direct animal listings, adoption workflows, FDA/EPA-approved pet healthcare, and accessories—into a structured mobile application with categorical browsing.",
    challenges:
      "Creating an intuitive listing and discovery workflow that caters to diverse animal categories (from birds and cats to farm livestock) while integrating medical vetting, specialized pet services, and direct communication channels between buyers and sellers.",
    solution:
      "Implemented an organized category-driven discovery interface with granular filters for species, breed, and location. Integrated dedicated sections for verified animal supplies, direct veterinarian helpline contact, adoption showcases, and stud-cross services.",
    keyFeatures: [
      "Direct marketplace listings for buying and selling birds, cats, dogs, and livestock",
      "Dedicated pet adoption portal encouraging companion rescue and humane rehoming",
      "Authentic pet food, cages, toys, and FDA/EPA-approved veterinary medicines",
      "Veterinary doctor helpline and remote animal care assistance",
      "Specialized services: bird DNA testing, laser-engraved identification rings, and pet relocation delivery",
    ],
    coverImage: "/images/projects/lsm/cover.png",
    iconImage: "/images/projects/lsm/icon.png",
    gallery: [
      "/images/projects/lsm/screen-1.png",
      "/images/projects/lsm/screen-2.png",
      "/images/projects/lsm/screen-3.png",
      "/images/projects/lsm/screen-4.png",
      "/images/projects/lsm/screen-5.png",
    ],
  },
  {
    id: "proj-miletribe",
    slug: "miletribe-travel-platform",
    title: "MileTribe",
    subtitle: "Collaborative Travel Planning, Hotel Discovery & Waymates Platform",
    category: "Web Application",
    year: "2024",
    role: "Web & Mobile Developer",
    timeline: "Production Release",
    client: "MileTribe",
    featured: true,
    mockupType: "browser",
    mockupDomain: "miletribe.app",
    shortDescription:
      "Collaborative travel platform featuring smart destination exploration, hotel discovery, day-by-day itinerary orchestration, and Waymates group sharing.",
    description:
      "MileTribe is a modern travel planning and discovery platform engineered for independent adventurers and group travelers. It streamlines trip conception from smart destination search and hotel bookings to day-by-day personalized itinerary scheduling. With its signature 'Waymates' feature, groups can seamlessly collaborate, share itineraries, and publish travel impressions.",
    technologies: ["React", "Next.js", "TypeScript", "RESTful APIs", "Geolocation & Maps"],
    tags: ["Web", "Mobile", "Travel Planning", "Itinerary", "Waymates", "Hotels"],
    liveUrl: "https://miletribe.app/",
    playStoreUrl: null,
    appStoreUrl: null,
    githubUrl: null,
    stats: [
      { label: "Platforms", value: "Web & Mobile" },
      { label: "Itinerary", value: "Day-by-Day Planning" },
      { label: "Collaboration", value: "Waymates Group Sync" },
    ],
    overview:
      "Planning travel across multiple cities often turns into chaotic spreadsheets, lost booking confirmations, and conflicting group ideas. MileTribe replaces this friction with an intelligent, cohesive travel dashboard where destinations, booked accommodations, and activities align into a visual, day-by-day timeline.",
    challenges:
      "Designing an interactive, collaborative itinerary builder capable of synchronizing multi-user edits, accommodation dates, and activity spots while maintaining a clean, inspiring travel aesthetic across desktop and mobile viewports.",
    solution:
      "Developed a modular timeline state architecture that anchors hotels, flights, and daily excursions into unified trip plans. Integrated Waymates for real-time group collaboration, allowing co-travelers to view, edit, and contribute to shared itineraries.",
    keyFeatures: [
      "Personalized day-by-day trip itinerary builder with interactive timelines",
      "Smart travel destination exploration and verified hotel discovery",
      "Waymates collaborative trip planning for groups and travel companions",
      "Travel impressions feed for sharing authentic destination memories",
      "Responsive web application paired with synchronized mobile travel planning",
    ],
    coverImage: "/images/projects/miletribe/cover.png",
    iconImage: "/images/projects/miletribe/icon.png",
    gallery: [
      "/images/projects/miletribe/screen-1.png",
      "/images/projects/miletribe/screen-2.png",
      "/images/projects/miletribe/screen-3.png",
    ],
  },
  {
    id: "proj-saint-kitts",
    slug: "saint-kitts-mobility-delivery",
    title: "Welcome to Saint Kitts",
    subtitle: "Island Mobility, On-Demand Ride Hailing, Airport Transfers & Logistics",
    category: "Full-Stack System",
    year: "2024",
    role: "Full-Stack & Mobile Lead Engineer",
    timeline: "Production Release",
    client: "Welcome to Saint Kitts (CabKN)",
    featured: true,
    mockupType: "mobile",
    mockupDomain: "app.welcometosaintkitts.com",
    shortDescription:
      "Island mobility and logistics ecosystem supporting on-demand ride booking, airport transfers, island tours, and reliable parcel delivery.",
    description:
      "Welcome to Saint Kitts (CabKN) is an on-demand mobility and logistics ecosystem engineered for Saint Kitts and Nevis. Inspired by world-class ride-hailing standards, the platform provides local commuters and international tourists with transparent fare estimates, real-time driver dispatch, Robert L. Bradshaw International Airport transfers, guided island excursions, and parcel delivery services.",
    technologies: ["React", "Next.js", "React Native", "Google Maps API", "WebSockets", "Node.js"],
    tags: ["Mobility", "Ride-Hailing", "Logistics", "Delivery", "Geolocation", "Full-Stack"],
    liveUrl: "https://app.welcometosaintkitts.com/",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.cabkn.app",
    appStoreUrl: "https://apps.apple.com/app/cabkn/id6740235227",
    githubUrl: null,
    stats: [
      { label: "Platforms", value: "Web, iOS & Android" },
      { label: "Services", value: "Rides, Tours & Parcels" },
      { label: "Dispatch", value: "Live Driver Tracking" },
    ],
    overview:
      "Navigating island transit in Saint Kitts and Nevis traditionally required cash negotiations, unmetered taxis, or complex tour bookings. Welcome to Saint Kitts transformed this by establishing a unified digital mobility infrastructure for local residents, business travelers, and cruise visitors.",
    challenges:
      "Handling reliable driver dispatch and geolocation tracking in island topographies, while accommodating diverse transport tiers ranging from instant single-rider hailing to scheduled airport transfers, island day-tours, and courier parcel dispatch.",
    solution:
      "Engineered a real-time dispatch and routing architecture utilizing map APIs and responsive driver-rider state synchronizations. Built responsive customer web portals alongside native iOS and Android mobile apps for seamless booking.",
    keyFeatures: [
      "On-demand ride booking with interactive pickup and destination selection",
      "Guaranteed Robert L. Bradshaw International Airport (SKB) transfer bookings",
      "Curated St. Kitts & Nevis island tours and scenic excursions",
      "On-demand parcel delivery and local logistics handling",
      "Cross-platform coverage spanning Web, Apple App Store, and Google Play Store",
    ],
    coverImage: "/images/projects/saint-kitts/cover.png",
    iconImage: "/images/projects/saint-kitts/icon.png",
    gallery: [
      "/images/projects/saint-kitts/screen-1.png",
      "/images/projects/saint-kitts/screen-2.png",
      "/images/projects/saint-kitts/screen-3.png",
      "/images/projects/saint-kitts/screen-4.png",
      "/images/projects/saint-kitts/parcel.jpg",
      "/images/projects/saint-kitts/airport.jpg",
    ],
  },
  {
    id: "proj-halooq",
    slug: "halooq-marketplace-classifieds",
    title: "Halooq",
    subtitle: "Multicategory Classifieds, Jobs, Motors, Real Estate & Events Platform",
    category: "Mobile Application",
    year: "2024",
    role: "Mobile & Web Developer",
    timeline: "Production Release",
    client: "Halooq Qatar",
    featured: true,
    mockupType: "mobile",
    mockupDomain: "halooq.com",
    shortDescription:
      "Bilingual Qatar classifieds ecosystem encompassing employment recruitment, motors, real estate, electronics, supermarket flyers, and QR-ticketed events.",
    description:
      "Halooq is a premier multifunctional marketplace and classifieds platform built specifically for Qatar. Catering to both English and Arabic speakers, the platform serves as an all-in-one ecosystem for job recruitment with instant CV applications, vehicle buying and auctions, residential and commercial property listings, consumer goods, hypermarket promotions, and event ticketing with QR codes.",
    technologies: ["React", "React Native", "REST APIs", "Bilingual i18n", "WhatsApp Direct"],
    tags: ["Marketplace", "Classifieds", "Jobs", "Real Estate", "Motors", "Qatar", "Events"],
    liveUrl: "https://halooq.com/",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.habeebi.app&hl=en",
    appStoreUrl: "https://apps.apple.com/app/id6723891896",
    githubUrl: null,
    stats: [
      { label: "Platforms", value: "Web, iOS & Android" },
      { label: "Market", value: "Qatar Classifieds Hub" },
      { label: "Languages", value: "Arabic & English" },
    ],
    overview:
      "In fast-growing metropolitan markets like Qatar, residents previously bounced between separate apps for employment hunting, used-car auctions, rental apartments, and retail flyers. Halooq consolidated these high-frequency consumer and business activities into a singular, lightning-fast classifieds application.",
    challenges:
      "Architecting a high-volume multi-vertical database structure capable of supporting disparate listing schemas (employment CVs, vehicle odometer specs, property floor plans, supermarket PDF brochures, and event tickets) while delivering fluid bilingual RTL/LTR experiences.",
    solution:
      "Developed a modular vertical-based component hierarchy with dedicated sub-engines for recruitment, auto listings, real estate, and event bookings. Implemented direct WhatsApp and phone call triggers enabling immediate buyer-seller communication without cumbersome friction.",
    keyFeatures: [
      "Job recruitment board with CV uploads and 1-tap candidate applications",
      "Used vehicle marketplace with specifications, inspection badges, and auctions",
      "Qatar property listings for rent and sale across Doha, Lusail, West Bay, and The Pearl",
      "Consumer marketplace for electronics, furniture, fashion, and pet supplies",
      "Supermarket brochures, digital discount flyers, and QR-ticketed event discovery",
      "Seamless bilingual support in Arabic and English with direct WhatsApp seller chat",
    ],
    coverImage: "/images/projects/halooq/cover.png",
    iconImage: "/images/projects/halooq/icon.png",
    gallery: [
      "/images/projects/halooq/screen-1.png",
      "/images/projects/halooq/screen-2.png",
      "/images/projects/halooq/screen-3.png",
      "/images/projects/halooq/screen-4.png",
    ],
  },
];
