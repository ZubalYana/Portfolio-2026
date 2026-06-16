import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";
import githubIcon from "../../assets/socialMedia/github.svg";
import instIcon from "../../assets/socialMedia/inst.svg";
import telegramIcon from "../../assets/socialMedia/telegram.svg";


const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay },
});

const ContactRow = ({ href, Icon, label }: { href: string; Icon: typeof Mail; label: string }) => (
  <a
    href={href}
    className="group flex items-center gap-x-2 w-fit transition-colors duration-200"
  >
    <Icon className="w-4 h-4 text-[#008CFF] opacity-60 group-hover:opacity-100 transition-opacity duration-200" />
    <span className="text-[14px] text-[#F5F5F5]/50 group-hover:text-[#F5F5F5]/90 transition-colors duration-200">
      {label}
    </span>
  </a>
);

export default function Footer() {
  const socialMedia = [
    { icon: githubIcon,   alt: "Github",    link: "https://github.com/ZubalYana" },
    { icon: telegramIcon, alt: "Telegram",  link: "https://t.me/yanavesq#" },
    { icon: instIcon,     alt: "Instagram", link: "https://www.instagram.com/yanavesq/" },
  ];

  //to actually link once all the pages are ready, + header navigation, too
  const navLinks = ["About", "Skills", "Projects", "Contact"];

  return (
    <footer className="w-screen border-t border-[#F5F5F5]/10 p-[20px] lg:p-[40px] relative z-10">
      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-10">

        <motion.div className="flex flex-col gap-y-4" {...fadeUp(0)}>
          <div className="text-left">
            <h1 className="uppercase font-bold text-[32px]">
              Get in touch<span className="text-[#008CFF]">.</span>
            </h1>
            <p className="text-[12px] text-[#F5F5F5]/40 mt-1 max-w-[380px]">
              Interested in my work or have an idea you'd like to bring to life? I'd love to hear from you.
            </p>
          </div>
          <div className="flex flex-col gap-y-2">
            <ContactRow href={`mailto:zubalana0gmail.com`} Icon={Mail}  label="zubalana0@gmail.com" />
            <ContactRow href={`tel:+380972058786`} Icon={Phone} label="+380 97 205 87 86" />
          </div>
        </motion.div>

        <motion.div className="flex flex-col gap-y-6" {...fadeUp(0.15)}>
          <div className="flex gap-x-5">
            {socialMedia.map((media, i) => (
              <a href={media.link} key={i} target="_blank" className="w-[26px] h-[26px]">
                <img src={media.icon} alt={media.alt} className="w-full h-full icon-hover" />
              </a>
            ))}
          </div>
          <nav className="flex flex-col gap-y-1">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-[13px] text-[#F5F5F5]/40 hover:text-[#F5F5F5]/90 transition-colors duration-200 w-fit"
              >
                {link}
              </a>
            ))}
          </nav>
          
        </motion.div>
      </div>
              <motion.div className="flex flex-col gap-y-4" {...fadeUp(0)}>
            <p className="text-[11px] text-[#F5F5F5]/20 w-full flex justify-center">© 2026 Yana Zubal</p>
        </motion.div>
    </footer>
  );
}