import useScrollToSection from "../helpers/NavigationScroll";
import { X } from "lucide-react";
import {motion} from 'framer-motion'

interface MobileNavProps {
  onClose: () => void;
}

export default function MobileNav({ onClose }: MobileNavProps) {
  const scrollToSection = useScrollToSection();

  const links = [
    { label: "About Me", link: "about" },
    { label: "Projects", link: "featured-projects" },
    { label: "Skills", link: "skills" },
    { label: "FAQ", link: "faq" },
  ];

  const handleLinkClick = (section: string) => {
    scrollToSection(section);
    onClose();
  };

  return (
    <motion.div
      className="bg-[#121212] w-[80%] p-[40px] flex flex-col items-center justify-center gap-y-2 relative rounded-[16px] border border-[#F5F5F5]/10"
      initial={{ opacity: 0, scale: 0.92, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.92, y: 20 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      onClick={(e) => e.stopPropagation()}
    >
      <button
        className="absolute top-[20px] right-[20px] w-[36px] h-[36px] flex items-center justify-center rounded-full text-[#F5F5F5]/70 hover:text-[#008CFF] hover:bg-[#F5F5F5]/10 transition-colors duration-200 cursor-pointer"
        onClick={onClose}
        aria-label="Close menu"
      >
        <X size={20} />
      </button>

      {links.map((link, index) => (
        <motion.button
          key={index}
          onClick={() => handleLinkClick(link.link)}
          className="
            relative text-[16px] tracking-[0.07em] font-normal
            text-[#F5F5F5]/45 cursor-pointer no-underline pb-[6px]
            transition-[color,text-shadow,filter] duration-200
            after:content-[''] after:absolute after:bottom-0
            after:left-1/2 after:right-1/2 after:h-px
            after:bg-[#F5F5F5]/50
            after:transition-[left,right,box-shadow] after:duration-250
            hover:text-[#F5F5F5]/95
            hover:[text-shadow:0_0_8px_rgba(255,255,255,0.4)]
            hover:[filter:drop-shadow(0_0_6px_rgba(0,140,255,0.8))_drop-shadow(0_0_12px_rgba(0,140,255,0.5))]
            hover:after:left-0 hover:after:right-0
            hover:after:[box-shadow:0_0_6px_rgba(255,255,255,0.5)]
          "
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 + index * 0.05, duration: 0.2 }}
          whileTap={{ scale: 0.95 }}
        >
          {link.label}
        </motion.button>
      ))}
    </motion.div>
  );
}