import { motion } from "framer-motion";

import html from "../../assets/techIcons/html.svg?react";
import css from "../../assets/techIcons/css.svg?react";
import javascript from "../../assets/techIcons/javascript.svg?react";
import typescript from "../../assets/techIcons/typescript.svg?react";
import react from "../../assets/techIcons/react.svg?react";
import electron from "../../assets/techIcons/electron.svg?react";
import tailwind from "../../assets/techIcons/tailwind.svg?react";
import zustand from "../../assets/techIcons/zustand.svg?react";

import nodejs from "../../assets/techIcons/nodeJS.svg?react";
import mongodb from "../../assets/techIcons/mongoDB.svg?react";
import swagger from "../../assets/techIcons/swagger.svg?react";
import postgresql from "../../assets/techIcons/postgresql.svg?react";
import nextjs from "../../assets/techIcons/nextJS.svg?react";

import shopify from "../../assets/techIcons/shopify.svg?react";
import figma from "../../assets/techIcons/figma.svg?react";
import git from "../../assets/techIcons/git.svg?react";
import docker from "../../assets/techIcons/docker.svg?react";

import type { FC, SVGProps } from "react";

type SVGComponent = FC<SVGProps<SVGSVGElement>>

const Skill = ({ name, icon: Icon }: { name: string, icon: SVGComponent, type: string }) => {
  return (
    <div className="w-[90px] h-[90px] p-2 rounded-[10px] bg-[#F5F5F5]/5 flex flex-col items-center gap-y-2 m-4">
      <div className="w-[90%] h-[70%] flex items-center justify-center">
      <Icon className="w-auto h-full" />
      </div>
      <p className="text-[14px] text-[#F5F5F5]/70">{name}</p>
    </div>
  )
}
export default function Skills() {
  const skills = [
    {
      name: "HTML",
      icon: html,
      type: "frontend",
    },
    {
      name: "CSS",
      icon: css,
      type: "frontend",
    },
    {
      name: "JavaScript",
      icon: javascript,
      type: "frontend",
    },
    {
      name: "TypeScript",
      icon: typescript,
      type: "frontend",
    },
    {
      name: "React",
      icon: react,
      type: "frontend",
    },
    {
      name: "Electron",
      icon: electron,
      type: "frontend",
    },
    {
      name: "Tailwind",
      icon: tailwind,
      type: "frontend",
    },
    {
      name: "Zustand",
      icon: zustand,
      type: "frontend",
    },
    {
      name: "Node.js",
      icon: nodejs,
      type: "backend",
    },
    {
      name: "MongoDB",
      icon: mongodb,
      type: "backend",
    },
    {
      name: "Swagger",
      icon: swagger,
      type: "backend",
    },
    {
      name: "PostgreSQL",
      icon: postgresql,
      type: "backend",
    },
    {
      name: "Next.js",
      icon: nextjs,
      type: "backend",
    },
    {
      name: "Shopify",
      icon: shopify,
      type: "tool",
    },
    {
      name: "Figma",
      icon: figma,
      type: "tool",
    },
    {
      name: "Git",
      icon: git,
      type: "tool",
    },
    {
      name: "Docker",
      icon: docker,
      type: "tool",
    },
  ];

  return (
    <motion.div className="w-screen md:h-screen min-h-0 flex flex-col items-center p-[20px] lg:p-[40px] relative z-10">
      <h1 className="uppercase font-bold text-[32px]">
        Skills<span className="text-[#008CFF]">.</span>
      </h1>
      <div className="w-full flex flex-wrap mt-4 md:mt-6">
        {skills.map((skill, index)=>(
          <Skill key={index} name={skill.name} icon={skill.icon} type={skill.type}/>
        ))}
      </div>
    </motion.div>
  );
}
