import { motion } from "framer-motion";
import GithubButton from "../functionalElements/GithubButton";
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
    tags: ["react", "typescript", "node.js", "google api", "mongoDB", "express", "jwt", "bcrypt"],
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
      "Redesigned the Shopify storefront for a Ukrainian furniture brand: custom components, multi-platform reviews, plus product catalogs and infographics.",
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
      "Ever needed to save a code snippet for later, only to spend ages rummaging through notes and comments trying to find it? Stashify solves that — a tool for developers to save, group, and label reusable code snippets. It's powered by AI that automatically detects the language and generates a name, description, and tags for each snippet. Built with a SQL database and an AI API integration for a clean, fast experience.",
    tags: ["TypeScript", "AI", "React", "PostgreSQL", "Bun", "Docker"],
    projectLink: "https://stashify-nine.vercel.app/",
    repoLinks: {'frontend': 'https://github.com/ZubalYana/Stashify-client', 'backend': 'https://github.com/ZubalYana/Stashify-backend'},
  },
  //   {
  //     name: "Koloda ( catalog series )",
  //     imagesURLs: [""],
  //     description_short: "TO BE REVIEWED: ",
  //     description_extended: "TO BE REWRITTEN: ",
  //     tags: ["", "", "", ""],
  //   },
  {
    name: "Editing Factory",
    imagesURLs: [
      "/screenshots/EditingFactoryScreen1.webp",
      "/screenshots/EditingFactoryScreen2.webp",
      "/screenshots/EditingFactoryScreen3.webp",
    ],
    description_short: "A landing page for a video editing studio, built with React and Tailwind in collaboration with another dev, working directly with the client.",
    description_extended: "Editing Factory is a landing page for a video editing studio, built in collaboration with another developer. I handled the design and a significant part of the frontend, while staying in direct contact with the client — gathering feedback and iterating throughout the process. One of my first real experiences working in a dev team. Built with React and Tailwind.",
    tags: ["", "", "", ""],
    projectLink: "https://editing-factory.vercel.app/",
    repoLink: "",
  },
  {
    name: "Jidstro",
    imagesURLs: [
      "/screenshots/JidStroScreen1.webp",
      "/screenshots/JidStroScreen2.webp",
      "/screenshots/JidStroScreen3.webp",
    ],
    description_short: "TO BE REVIEWED: ",
    description_extended: "TO BE REWRITTEN: ",
    tags: ["", "", "", ""],
    projectLink: "https://jidstro.netlify.app/",
    repoLink: "",
  },
  {
    name: "StuffPlace",
    imagesURLs: [
      "/screenshots/StuffPlaceScreen1.webp",
      "/screenshots/StuffPlaceScreen2.webp",
      "/screenshots/StuffPlaceScreen3.webp",
    ],
    description_short: "TO BE REVIEWED: ",
    description_extended: "TO BE REWRITTEN: ",
    tags: ["", "", "", ""],
    projectLink: "https://stuff-place.netlify.app/",
    repoLink: "",
  },
  {
    name: "Sheret",
    imagesURLs: ["/screenshots/SheretScreen1.webp", "/screenshots/SheretScreen2.webp"],
    description_short: "TO BE REVIEWED: ",
    description_extended: "TO BE REWRITTEN: ",
    tags: ["", "", "", ""],
    projectLink: "https://stuff-place.netlify.app/",
    repoLink: "",
  },
];
import ProjectCard from "../functionalElements/ProjectCard";
import PrimaryButton from "../functionalElements/PrimaryButton";
import { Eye } from "lucide-react";

export interface project {
  name: string;
  logo?: string;
  imagesURLs: string[];
  description_short: string;
  description_extended: string;
  tags: string[];
  projectLink?: string;
  repoLink?: string;
  repoLinks?: {
    'frontend'?: string,
    'backend'?: string
  };
}

export default function FeaturedProjects() {
  return (
    <motion.section id="featured-projects" className="w-screen md:min-h-screen min-h-0 flex flex-col items-center p-[20px] lg:p-[40px] relative z-10">
      <h1 className="uppercase font-bold text-[32px]">
        Featured Projects<span className="text-[#008CFF]">.</span>
      </h1>
      <div className="w-full flex flex-col gap-y-6 md:gap-y-0 md:flex-row justify-between items-center mt-4 md:mt-6">
        {projects.slice(0, 3).map((project, index) => (
          <ProjectCard project={project} key={index} />
        ))}
      </div>
      <div className="flex mt-4 md:mt-6 gap-x-4">
        <GithubButton />
        <PrimaryButton Icon={Eye} text="Explore" link="/projects" />
      </div>
    </motion.section>
  );
}
