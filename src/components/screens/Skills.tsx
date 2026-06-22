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

type SVGComponent = FC<SVGProps<SVGSVGElement>>;

const Skill = ({
  name,
  icon: Icon,
}: {
  name: string;
  icon: SVGComponent;
  type: string;
}) => {
  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="
        group
        w-[85px] h-[90px] p-2 rounded-[10px]
        bg-[#F5F5F5]/5 border border-transparent
        hover:border-[#008CFF]/20
        hover:bg-[#008CFF]/5
        hover:shadow-[0_0_16px_rgba(0,140,255,0.15)]
        flex flex-col items-center justify-center gap-y-2
        cursor-default transition-colors duration-200
      "
    >
      <div className="w-[44px] h-[44px] flex items-center justify-center">
        <Icon
          className="
            w-full h-full
            opacity-60
            transition-all duration-200
            group-hover:opacity-100
            group-hover:scale-[1.1]
            group-hover:[filter:drop-shadow(0_0_6px_rgba(0,140,255,0.7))_drop-shadow(0_0_12px_rgba(0,140,255,0.3))]
          "
        />
      </div>
      <p className="text-[12px] text-[#F5F5F5]/80 group-hover:text-[#F5F5F5]/90 transition-colors duration-200 text-center leading-tight">
        {name}
      </p>
    </motion.div>
  );
};

export default function Skills() {
  const skills = [
    { name: "HTML", icon: html, type: "frontend" },
    { name: "CSS", icon: css, type: "frontend" },
    { name: "JavaScript", icon: javascript, type: "frontend" },
    { name: "TypeScript", icon: typescript, type: "frontend" },
    { name: "React", icon: react, type: "frontend" },
    { name: "Electron", icon: electron, type: "frontend" },
    { name: "Tailwind", icon: tailwind, type: "frontend" },
    { name: "Zustand", icon: zustand, type: "frontend" },
    { name: "Node.js", icon: nodejs, type: "backend" },
    { name: "MongoDB", icon: mongodb, type: "backend" },
    { name: "Swagger", icon: swagger, type: "backend" },
    { name: "PostgreSQL", icon: postgresql, type: "backend" },
    { name: "Next.js", icon: nextjs, type: "backend" },
    { name: "Shopify", icon: shopify, type: "tool" },
    { name: "Figma", icon: figma, type: "tool" },
    { name: "Git", icon: git, type: "tool" },
    { name: "Docker", icon: docker, type: "tool" },
  ];

  const groups: { label: string; type: string }[] = [
    { label: "Frontend", type: "frontend" },
    { label: "Backend", type: "backend" },
    { label: "Tools", type: "tool" },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.07 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <section
      id="skills"
      className="w-full flex flex-col items-center py-[80px] px-[20px] lg:px-[40px] relative z-10 overflow-hidden"
    >
      <h1 className="uppercase font-bold text-[32px]">
        Skills<span className="text-[#008CFF]">.</span>
      </h1>

      <div className="w-full max-w-[900px] flex flex-col gap-y-10 mt-8 z-10">
        {groups.map((group) => (
          <div key={group.type}>
            <div className="flex items-center gap-x-3 mb-4">
              <span className="text-[11px] uppercase tracking-widest text-[#008CFF] font-semibold">
                {group.label}
              </span>
              <div className="flex-1 h-px bg-[#F5F5F5]/10" />
            </div>

            <motion.div
              className="flex flex-wrap gap-3 overflow-hidden"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
            >
              {skills
                .filter((s) => s.type === group.type)
                .map((skill, i) => (
                  <motion.div key={i} variants={cardVariants}>
                    <Skill
                      name={skill.name}
                      icon={skill.icon}
                      type={skill.type}
                    />
                  </motion.div>
                ))}
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}