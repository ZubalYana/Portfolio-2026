import type { project } from "../screens/FeaturedProjects";
import { CodeXml, Link } from "lucide-react";

interface ProjectCardProps {
  project: project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="w-full md:w-[32%] h-[380px] p-[15px] rounded-[10px] bg-[#F5F5F5]/5 group hover:bg-[#008CFF]/5 cursor-pointer transition-all duration-200">
      {/* a carousel of images on later stages */}
      <div className="w-full h-[55%] rounded-top-[10px]">
        <img src={project.imagesURLs[0]} alt={`${project.name} screenshot`} />
      </div>
      <div className="w-full mt-2 flex justify-between">
        <div className="flex items-center gap-x-2">
          <div className="w-[28px] h-[28px]">
            <img src={project.logo} alt={`${project.name} logo`} />
          </div>
          <h4 className="font-semibold text-[18px]">{project.name}</h4>
        </div>
        <div className="flex gap-x-3">
          <a
            href={project.repoLink}
            className="decoration-none text-[#008CFF] cursor-pointer"
          >
            <CodeXml size={24} />
          </a>
          <a
            href={project.repoLink}
            className="decoration-none text-[#008CFF] cursor-pointer"
          >
            <Link size={24} />
          </a>
        </div>
      </div>
      <p className="w-full text-[12px] text-[#F5F5F5]/80 text-justify mt-2">
        {project.description_short}
      </p>
      <div className="w-full flex gap-2 mt-4">
        {project.tags.map((tag, index) => (
          <div
            key={index}
            className="px-2 py-1 bg-[#008CFF]/10 rounded-[6px] text-[#008CFF] text-[12px]"
          >
            {tag.toUpperCase()}
          </div>
        ))}
      </div>
    </div>
  );
}
