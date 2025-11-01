// config.js - Central configuration for dynamic content
export const SITE_CONFIG = {
  title: "Narendra Prajapati - Professional VFX Artist & Video Editor",
  description:
    "Transforming creative visions into stunning visual experiences through expert video editing and VFX artistry",
  author: "Narendra Prajapati",
  email: "mr.narendra416@gmail.com",
  phone: "+91 9591915816",
  location: "Based in India",
  socialLinks: {
    instagram: "https://instagram.com/naren.prajapati_",
    linkedin: "#",
    youtube: "#",
  },
};

export const PROJECT_CATEGORIES = [
  "all",
  "movies",
  "webseries",
  "reels",
  "commercials",
];

export const SKILLS = [
  { name: "VFX Compositing", level: 95 },
  { name: "Video Editing", level: 90 },
  { name: "Motion Graphics", level: 85 },
  { name: "Color Grading", level: 88 },
  { name: "Visual Effects", level: 92 },
];

// Dynamic content that can be updated
export const DYNAMIC_CONTENT = {
  stats: {
    projects: 500,
    clients: 25,
    views: 100000,
  },
  availability: true,
  rotatingTexts: [
    "Visual Magic",
    "Engaging Content",
    "Creative Solutions",
    "Digital Experiences",
  ],
};

// Export all projects data
export const allProjects = [
  {
    id: 1,
    title: "Jawan - Feature Film",
    category: "movies",
    views: "2.5M",
    duration: "2:45",
    color: "linear-gradient(135deg, #dc2626 0%, #991b1b 100%)",
    description:
      "VFX compositing and visual effects for major Bollywood action film",
    tags: ["VFX", "Compositing", "Action", "Bollywood"],
    projectLink: "#",
    type: "Feature Film",
    featured: true,
  },
  {
    id: 2,
    title: "Mission Raniganj",
    category: "movies",
    views: "1.8M",
    duration: "2:20",
    color: "linear-gradient(135deg, #0ea5e9 0%, #0369a1 100%)",
    description: "Visual effects and compositing for rescue drama film",
    tags: ["VFX", "Drama", "Compositing", "Rescue"],
    projectLink: "#",
    type: "Feature Film",
    featured: true,
  },
  {
    id: 3,
    title: "Hanuman",
    category: "movies",
    views: "3.2M",
    duration: "2:15",
    color: "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)",
    description: "Mythological VFX and supernatural effects composition",
    tags: ["Mythology", "VFX", "Supernatural", "Compositing"],
    projectLink: "#",
    type: "Feature Film",
    featured: true,
  },
  {
    id: 4,
    title: "Korean Web Series",
    category: "webseries",
    views: "850K",
    duration: "45:00",
    color: "linear-gradient(135deg, #ec4899 0%, #db2777 100%)",
    description: "VFX work for international Korean streaming series",
    tags: ["Web Series", "International", "VFX", "Streaming"],
    projectLink: "#",
    type: "Web Series",
    featured: false,
  },
  {
    id: 5,
    title: "Social Media Reels Pack",
    category: "reels",
    views: "150K",
    duration: "0:30",
    color: "linear-gradient(135deg, #10b981 0%, #047857 100%)",
    description:
      "Viral content creation and editing for social media platforms",
    tags: ["Social Media", "Reels", "Viral", "Editing"],
    projectLink: "#",
    type: "Social Media",
    featured: false,
  },
  {
    id: 6,
    title: "Brand Commercial Series",
    category: "commercials",
    views: "500K",
    duration: "1:00",
    color: "linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)",
    description: "Commercial video editing and VFX for brand campaigns",
    tags: ["Commercial", "Brand", "Advertising", "VFX"],
    projectLink: "#",
    type: "Commercial",
    featured: true,
  },
];
