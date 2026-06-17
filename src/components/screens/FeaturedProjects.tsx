import { motion } from "framer-motion";
import GithubButton from "../functionalElements/GithubButton";
export const projects = [
  {
    name: "Heptagon",
    logo: "/projectsMediafiles/Heptagon/logo.svg",
    imagesURLs: [
      "/HeptagonScreen1.webp",
      "/HeptagonScreen2.webp",
      "/HeptagonScreen3.webp",
    ],
    description_short:
      "TO BE REVIEWED: My own time-management tool developed to suit my planning routine. The project ended up fulfilling needs of many people around me, who actually use it!",
    description_extended:
      "TO BE REWRITTEN: My own time-management tool developed to suit my planning routine. The project ended up fulfilling needs of many people around me, who actually use it! My own time-management tool developed to suit my planning routine. The project ended up fulfilling needs of many people around me, who actually use it!",
    tags: ["react", "typescript", "node.js", "google api"],
    projectLink: "https://heptagon-client.onrender.com",
    repoLink: "https://github.com/ZubalYana/heptagon",
  },
  {
    name: "Koloda",
    logo: "/projectsMediafiles/Koloda/logo.svg",
    imagesURLs: [
      "/KolodaScreen1.webp",
      "/KolodaScreen2.webp",
      "/KolodaScreen3.webp",
    ],
    description_short:
      "TO BE REVIEWED: A project, made during my first part-time job in Koloda - Ukrainian handmade oak furniture business. Included redesigning their webpage and maintaining it further.",
    description_extended:
      "TO BE REWRITTEN: A project, made during my first part-time job in Koloda - Ukrainian handmade oak furniture business. Included redesigning their webpage and maintaining it further. A project, made during my first part-time job in Koloda - Ukrainian handmade oak furniture business. Included redesigning their webpage and maintaining it further.",
    tags: ["Shopify", "Shattle", "CEO", "Figma", "Design"],
    projectLink: "https://koloda.shop/",
  },
  {
    name: "Stashify",
    logo: "/projectsMediafiles/Stashify/logo.png",
    imagesURLs: [
      "/StashifyScreen1.webp",
      "/StashifyScreen2.webp",
      "/StashifyScreen3.webp",
      "/StashifyScreen4.webp",
      "/StashifyScreen5.webp",
    ],
    description_short:
      "TO BE REVIEWED: My own time-management tool developed to suit my planning routine. The project ended up fulfilling needs of many people around me, who actually use it!",
    description_extended:
      "TO BE REWRITTEN: My own time-management tool developed to suit my planning routine. The project ended up fulfilling needs of many people around me, who actually use it! My own time-management tool developed to suit my planning routine. The project ended up fulfilling needs of many people around me, who actually use it!",
    tags: ["TypeScript", "AI", "React", "PostgreSQL", "Bun"],
    projectLink: "https://stashify-nine.vercel.app/",
    repoLink: "",
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
      "/EditingFactoryScreen1.webp",
      "/EditingFactoryScreen2.webp",
      "/EditingFactoryScreen3.webp",
    ],
    description_short: "TO BE REVIEWED: ",
    description_extended: "TO BE REWRITTEN: ",
    tags: ["", "", "", ""],
    projectLink: "https://editing-factory.vercel.app/",
    repoLink: "",
  },
  {
    name: "Jidstro",
    imagesURLs: [
      "/JidStroScreen1.webp",
      "/JidStroScreen2.webp",
      "/JidStroScreen3.webp",
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
      "/StuffPlaceScreen1.webp",
      "/StuffPlaceScreen2.webp",
      "/StuffPlaceScreen3.webp",
    ],
    description_short: "TO BE REVIEWED: ",
    description_extended: "TO BE REWRITTEN: ",
    tags: ["", "", "", ""],
    projectLink: "https://stuff-place.netlify.app/",
    repoLink: "",
  },
  {
    name: "Sheret",
    imagesURLs: ["/SheretScreen1.webp", "/SheretScreen2.webp"],
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
}

export default function FeaturedProjects() {
  return (
    <motion.div className="w-screen md:h-screen min-h-0 flex flex-col items-center p-[20px] lg:p-[40px] relative z-10">
      <h1 className="uppercase font-bold text-[32px]">
        Featured Projects<span className="text-[#008CFF]">.</span>
      </h1>
      <div className="w-full flex justify-between items-center mt-4 md:mt-6">
        {projects.slice(0, 3).map((project, index) => (
          <ProjectCard project={project} key={index} />
        ))}
      </div>
      <div className="flex mt-4 md:mt-6 gap-x-4">
        <GithubButton />
        <PrimaryButton Icon={Eye} text="Explore" />
      </div>
    </motion.div>
  );
}
