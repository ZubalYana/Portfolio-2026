import { motion } from "framer-motion";
import { ChevronLeft } from "lucide-react";

export default function Projects() {
  return (
    <div className="w-screen min-h-screen flex flex-col items-center p-[20px] lg:p-[40px] relative z-10">
        <a href="/" className="absolute top-[20px] left-[20px] lg:top-[40px] lg:left-[40px]">
        <ChevronLeft className="
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
    hover:after:[box-shadow:0_0_6px_rgba(255,255,255,0.5)]" size={28}/>
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
    </div>
  );
}
