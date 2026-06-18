import { motion } from "framer-motion";
import GithubButton from "../functionalElements/GithubButton";
import ProjectCard from "../functionalElements/ProjectCard";
import PrimaryButton from "../functionalElements/PrimaryButton";
import { Eye } from "lucide-react";
import { projects } from "./Projects";

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
