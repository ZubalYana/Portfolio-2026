import { motion } from "framer-motion";

export default function Projects() {
  return (
    <div className="w-screen min-h-screen flex flex-col items-center p-[20px] lg:p-[40px] relative z-10">
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
