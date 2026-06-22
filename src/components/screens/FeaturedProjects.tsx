import { motion } from "framer-motion";
import GithubButton from "../functionalElements/GithubButton";
import ProjectCard from "../functionalElements/ProjectCard";
import PrimaryButton from "../functionalElements/PrimaryButton";
import { Eye } from "lucide-react";
import { projects } from "./Projects";
import BackgroundGlow from "../decorations/BackgroundGlow";

export default function FeaturedProjects() {
  return (
    <motion.section
      id="featured-projects"
      className="w-full flex flex-col items-center py-[80px] px-[20px] lg:px-[40px] relative z-10 overflow-hidden"
    >
      <h1 className="uppercase font-bold text-[32px]">
        Featured Projects<span className="text-[#008CFF]">.</span>
      </h1>

      <div className="w-full flex flex-col gap-y-6 md:gap-y-0 md:flex-row justify-between items-center mt-4 md:mt-8">
        {projects.slice(0, 3).map((project, index) => (
          <ProjectCard project={project} key={index} />
        ))}
      </div>

      <div className="flex mt-8 gap-x-4">
        <GithubButton />
        <PrimaryButton Icon={Eye} text="Explore" link="/projects" />
      </div>

      <BackgroundGlow width={600} height={500} opacity={0.1} top={-120} left={-100} />
      <BackgroundGlow width={800} height={600} opacity={0.15} right={40} bottom={-150} />
    </motion.section>
  );
}