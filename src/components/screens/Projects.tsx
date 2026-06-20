import { motion } from "framer-motion";
import { ChevronLeft } from "lucide-react";
import ExtendedProjectCard from "../functionalElements/ExtendedProjectCard";
export const projects = [
  {
    name: "Heptagon",
    logo: "/projectsMediafiles/Heptagon/logo.svg",
    imagesURLs: [
      "/screenshots/HeptagonScreen1.webp",
      "/screenshots/HeptagonScreen2.webp",
      "/screenshots/HeptagonScreen3.webp",
    ],
    description_short:
      "A weekly planner I built when nothing else fit my routine. Tracks daily/weekly progress and integrates with Google Calendar.",
    description_extended:
      "I couldn't find a time-management tool that fit my planning routine, so I built my own. Heptagon is a weekly planner that helps you track both daily and overall weekly progress. It integrates with Google Calendar so your events stay visible alongside your tasks. Several friends have ended up using it actively to map out their time.",
    tags: ["react", "typescript", "node.js", "google api"],
    extended_tags: [
      "react",
      "typescript",
      "node.js",
      "google api",
      "mongoDB",
      "express",
      "jwt",
      "bcrypt",
    ],
    projectLink: "https://heptagon-client.onrender.com",
    repoLink: "https://github.com/ZubalYana/heptagon",
  },
  {
    name: "Koloda",
    logo: "/projectsMediafiles/Koloda/logo.svg",
    imagesURLs: [
      "/screenshots/KolodaScreen1.webp",
      "/screenshots/KolodaScreen2.webp",
      "/screenshots/KolodaScreen3.webp",
    ],
    description_short:
      "Redesigned the Shopify storefront for a Ukrainian furniture brand: custom components, multi-platform reviews, product catalogs.",
    description_extended:
      "Koloda is a Ukrainian handcraft furniture company I've been working with long-term. I completely redesigned their Shopify storefront, built custom components, and integrated reviews from multiple platforms — after which the site started receiving its first orders. Beyond the webpage, I've also designed product catalogs and infographics tailored to the company's needs.",
    tags: ["Shopify", "Shattle", "SEO", "Figma", "Design"],
    projectLink: "https://koloda.shop/",
  },
  {
    name: "Stashify",
    logo: "/projectsMediafiles/Stashify/logo.png",
    imagesURLs: [
      "/screenshots/StashifyScreen1.webp",
      "/screenshots/StashifyScreen2.webp",
      "/screenshots/StashifyScreen3.webp",
      "/screenshots/StashifyScreen5.webp",
    ],
    description_short:
      "A snippet manager for devs, powered by AI to auto-tag, name, and describe your code. Built with SQL + AI API integration.",
    description_extended:
      "Ever needed to save a code snippet for later, only to spend ages rummaging through notes and comments trying to find it? Stashify solves that — a tool for developers to save, group, and label reusable code snippets. It's powered by AI that automatically detects the language and generates a name, description, and tags for each snippet. Built with a SQL database and an AI API integration.",
    tags: ["TypeScript", "AI", "React", "PostgreSQL", "Bun"],
    extended_tags: [
      "TypeScript",
      "AI",
      "React",
      "PostgreSQL",
      "Bun",
      "Docker",
      "Express",
      "Jwt",
      "Bcrypt",
    ],
    projectLink: "https://stashify-nine.vercel.app/",
    repoLinks: {
      frontend: "https://github.com/ZubalYana/Stashify-client",
      backend: "https://github.com/ZubalYana/Stashify-backend",
    },
  },
  {
    name: "Editing Factory",
    logo: "/projectsMediafiles/EF/logo.svg",
    imagesURLs: [
      "/screenshots/EditingFactoryScreen1.webp",
      "/screenshots/EditingFactoryScreen2.webp",
      "/screenshots/EditingFactoryScreen3.webp",
    ],
    description_short:
      "A landing page for a video editing studio, built with React and Tailwind in collaboration with another dev, working directly with the client.",
    description_extended:
      "Editing Factory is a landing page for a video editing studio, built in collaboration with another developer. I handled the design and a significant part of the frontend, while staying in direct contact with the client — gathering feedback and iterating throughout the process. One of my first real experiences working in a dev team. Built with React and Tailwind.",
    tags: ["React", "Tailwind", "Figma", "Framer-motion"],
    extended_tags: ["React", "Tailwind", "Figma", "Framer-motion"],
    projectLink: "https://editing-factory.vercel.app/",
  },
  {
    name: "Jidstro",
    logo: "/projectsMediafiles/JidStro/logo.png",
    imagesURLs: [
      "/screenshots/JidStroScreen1.webp",
      "/screenshots/JidStroScreen2.webp",
      "/screenshots/JidStroScreen3.webp",
    ],
    description_short:
      "A B2B logistics landing page for UK entrepreneur Nachi Stern — fully designed and coded, with a secured admin panel for self-service content updates.",
    description_extended:
      "My first freelance project, built for UK entrepreneur Nachi Stern. This was a landing page for a B2B logistics company — I designed it, refined it based on client feedback, and built it out in code. Since Nachi wanted the page fully customizable, I also developed a secured admin panel that lets him update any text or media on the landing page himself.",
    tags: ["React", "Tailwind", "Figma", "Express"],
    extended_tags: ["React", "Tailwind", "Figma", "Express", "JWT", "Bcrypt"],
    projectLink: "https://jidstro.netlify.app/",
  },
  {
    name: "StuffPlace",
    logo: "/projectsMediafiles/StuffPlace/logo.svg",
    imagesURLs: [
      "/screenshots/StuffPlaceScreen1.webp",
      "/screenshots/StuffPlaceScreen2.webp",
      "/screenshots/StuffPlaceScreen3.webp",
    ],
    description_short:
      "A hostel landing page in Budapest — fully designed, with a secure admin panel (JWT, bcrypt) to manage rooms shown on the site. Built with Node.js and MongoDB.",
    description_extended:
      "A landing page for a hostel in Budapest, Hungary, fully designed by me using the client's own media files. It's powered by a secure admin panel for adding, editing, and removing rooms, which are then displayed live on the landing page. Built with Node.js and MongoDB, secured with JWT and bcrypt.",
    tags: ["React", "TailwindCSS", "Node.js", "MongoDB"],
    extended_tags: ["React", "TailwindCSS", "Node.js", "MongoDB"],
    projectLink: "https://stuff-place.netlify.app/",
  },
  {
    name: "Sheret",
    imagesURLs: [
      "/screenshots/SheretScreen1.webp",
      "/screenshots/SheretScreen2.webp",
    ],
    description_short:
      "A file-exchange tool: upload a file, share a 6-digit code, done. Light/dark theme, multilingual UI. Won the Web Development category at a Lviv National University contest.",
    description_extended:
      "The oldest project featured here. It's a file-exchange tool: upload a file, get a 6-digit code, share it with whoever needs the file, and they enter the code to download it. Simple by design, but it includes light/dark theme support and multiple interface languages. I even won the Web Development category at a contest hosted by Lviv National University with this project.",
    tags: ["Javascript", "Node.js", "MongoDB", "Scss", "Multer"],
    extended_tags: [
      "Javascript",
      "Node.js",
      "Express",
      "MongoDB",
      "Scss",
      "Multer",
    ],
    projectLink: "https://sheret.onrender.com/",
    repoLink: "https://github.com/ZubalYana/Sheret",
  },
];

export interface project {
  name: string;
  logo?: string;
  imagesURLs: string[];
  description_short: string;
  description_extended: string;
  tags: string[];
  extended_tags?: string[];
  projectLink?: string;
  repoLink?: string;
  repoLinks?: {
    'frontend'?: string,
    'backend'?: string
  };
}


export default function Projects() {
  return (
    <div className="w-screen min-h-screen flex flex-col items-center p-[20px] lg:p-[40px] relative z-10">
      <a
        href="/"
        className="absolute top-[20px] left-[20px] lg:top-[40px] lg:left-[40px]"
      >
        <ChevronLeft
          className="
    text-[#F5F5F5]/45 cursor-pointer
    transition-[color,text-shadow,filter] duration-200
    after:content-[''] after:absolute after:bottom-0
    after:left-1/2 after:right-1/2 after:h-px
    after:bg-[#F5F5F5]/50
    after:transition-[left,right,box-shadow] after:duration-250
    hover:text-[#F5F5F5]/95
    hover:[text-shadow:0_0_8px_rgba(255,255,255,0.4)]
    hover:[filter:drop-shadow(0_0_6px_rgba(0,140,255,0.8))_drop-shadow(0_0_12px_rgba(0,140,255,0.5))]
    hover:after:left-0 hover:after:right-0
    hover:after:[box-shadow:0_0_6px_rgba(255,255,255,0.5)]"
          size={28}
        />
      </a>
      <motion.h1
        className="uppercase font-bold text-[32px]"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Projects<span className="text-[#008CFF]">.</span>
      </motion.h1>
      <div className="w-full flex flex-col mt-8 gap-y-20">
        {projects.map((project, index)=>(
            <ExtendedProjectCard project={project} key={index}/>
        ))}
      </div>
    </div>
  );
}
