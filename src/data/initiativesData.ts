export interface InitiativeItem {
  id: string;
  num: string;
  heading: string;
  category: "Mentorship" | "Summits" | "Publications" | "Policy & Incubation";
  tag: string;
  status: string;
  image: string;
  description: string;
  fullDescription?: string;
  link?: string;
  actionLabel?: string;
  isExternalLink?: boolean;
  statBadge?: string;
  highlights?: string[];
}

export const INITIATIVE_CATEGORIES = [
  "All",
  "Mentorship",
  "Summits",
  "Publications",
  "Policy & Incubation",
] as const;

export type InitiativeCategory = (typeof INITIATIVE_CATEGORIES)[number];

export const initiativesData: InitiativeItem[] = [
  {
    id: "startup-scoop",
    num: "01",
    heading: "Startup Scoop",
    category: "Publications",
    tag: "Newsletter",
    status: "Bi-Monthly Release",
    image: "/blogScreenshot.webp",
    description:
      "A bi-monthly publication delivering the latest developments, venture stories, and market analysis across the global and Indian startup landscape. Spotlights MAHE student founders and breakthrough innovations.",
    fullDescription:
      "Startup Scoop is E-Cell MIT Manipal's signature bi-monthly newsletter, bridging the gap between student innovators and real-world market intelligence. Each edition unpacks emerging tech sectors, loss-leader mechanics, venture funding patterns, and exclusive founder journey retrospectives.",
    link: "/blog",
    actionLabel: "Read Editions",
    isExternalLink: false,
    statBadge: "16+ Editions",
    highlights: [
      "Spotlights student-run ventures across MAHE",
      "Analysis of trending IPOs, AI shifts, and VC funding",
      "Over 5,000+ readers across campus & LinkedIn community",
    ],
  },
  {
    id: "business-clinic",
    num: "02",
    heading: "Business Clinic",
    category: "Mentorship",
    tag: "Mentorship & Advisory",
    status: "Year-Round Program",
    image: "/logo_business_clinic.webp",
    description:
      "A structured diagnostic and mentorship clinic helping early-stage student startups validate product-market fit, design go-to-market strategies, and test core functionality with industry mentors.",
    fullDescription:
      "Business Clinic operates as an intensive venture clinic for student entrepreneurs. Through milestone-driven diagnostic frameworks, startups test unit economics, refine problem statements, and build launch-ready MVPs under seasoned advisor guidance.",
    link: "/about",
    actionLabel: "Connect with Mentors",
    isExternalLink: false,
    statBadge: "40+ Startups Advised",
    highlights: [
      "1-on-1 problem-solution diagnostic reviews",
      "Customer validation and pricing model architecture",
      "Direct pathway to incubation at MUTBI & Innovation Centre",
    ],
  },
  {
    id: "e-10-summit",
    num: "03",
    heading: "E-10 Summit",
    category: "Summits",
    tag: "MAHE Leadership",
    status: "Annual Summit",
    image: "/picture_e10_summit.webp",
    description:
      "The premier inter-collegiate entrepreneurship summit uniting entrepreneurship bodies across all MAHE institutions to build institutional synergy, share best practices, and sign collaborative charters.",
    fullDescription:
      "The E-10 Entrepreneurship Summit brings together leadership teams from 10+ MAHE college entrepreneurship cells. The summit addresses cross-campus resource pooling, joint incubation pipelines, and unified sponsorship engagement to supercharge Manipal's regional startup cluster.",
    link: "https://www.linkedin.com/company/ecellmit",
    actionLabel: "Explore Summit Recap",
    isExternalLink: true,
    statBadge: "10+ Campuses United",
    highlights: [
      "Signatory landmark MAHE Entrepreneurship Charter",
      "Unified cross-college startup exchange network",
      "High-level strategy roundtables with academic leaders",
    ],
  },
  {
    id: "innovation-policy-consortium",
    num: "04",
    heading: "Innovation Policy Consortium",
    category: "Policy & Incubation",
    tag: "Policy & Governance",
    status: "Flagship Forum",
    image: "/MES_Creative_Handout_Banner.webp",
    description:
      "A national student-driven policy initiative challenging university teams to research real ecosystem bottlenecks and submit actionable white papers to state government leadership at MES.",
    fullDescription:
      "The Innovation Policy Consortium (IPC) empowers college cells to analyze real-world policy constraints in India's startup ecosystem. Selected teams formulate research-backed policy recommendations compiled into the official 'Bharat Yuva Innovation Policy Recommendation'.",
    link: "/ipc",
    actionLabel: "Explore IPC Portal",
    isExternalLink: false,
    statBadge: "Government Presentation",
    highlights: [
      "Multi-round research & Group Discussion evaluations",
      "Direct recommendation presentation to government delegates",
      "National collaboration platform for university policy think tanks",
    ],
  },
  {
    id: "conceptio",
    num: "05",
    heading: "Conceptio",
    category: "Policy & Incubation",
    tag: "B-Plan & Incubation",
    status: "Annual Challenge",
    image: "/conceptio-globe.png",
    description:
      "The flagship business plan and pitching competition of E-Cell MIT Manipal, translating nascent technology concepts into viable, fundable enterprise ventures with cash prizes and incubation backing.",
    fullDescription:
      "Conceptio is the launching pad for collegiate ventures. Participants receive hands-on mentoring through product pitch rounds, business modeling workshops, and final presentation stages in front of seasoned angel investors and venture capitalists.",
    link: "/conceptio-form",
    actionLabel: "View Competition",
    isExternalLink: false,
    statBadge: "Cash Grants & Incubation",
    highlights: [
      "Structured ideation-to-prototype pipeline",
      "Pitch reviews before active angel investors and VCs",
      "Fast-track incubation through the MAHE Innovation Centre",
    ],
  },
];

export const INITIATIVE_METRICS = [
  { value: "5+", label: "Ecosystem Initiatives" },
  { value: "16+", label: "Startup Scoop Editions" },
  { value: "40+", label: "Startups Mentored" },
  { value: "10+", label: "Colleges In E-10 Network" },
] as const;
