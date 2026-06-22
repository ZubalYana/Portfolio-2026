import { motion } from "framer-motion";
import Navigation from "../functionalElements/Navigation";
import HomepageBg from "../decorations/HomepageBg";
import portfolioPhoto from "../../assets/portfolio_photo_cropped.png";
import tailwindIcon from "../../assets/techIcons/tailwind.svg";
import reactIcon from "../../assets/techIcons/react.svg";
import htmlIcon from "../../assets/techIcons/html.svg";
import cssIcon from "../../assets/techIcons/css.svg";
import figmaIcon from "../../assets/techIcons/figma.svg";
import shopifyIcon from "../../assets/techIcons/shopify.svg";
import typescriptIcon from "../../assets/techIcons/typescript.svg";
import nodejsIcon from "../../assets/techIcons/nodeJS.svg";
import mongoDBIcon from "../../assets/techIcons/mongoDB.svg";
import javascriptIcon from "../../assets/techIcons/javascript.svg";
import swaggerIcon from "../../assets/techIcons/swagger.svg";
import gitIcon from "../../assets/techIcons/git.svg";
import githubIcon from "../../assets/socialMedia/github.svg";
import instIcon from "../../assets/socialMedia/inst.svg";
import telegramIcon from "../../assets/socialMedia/telegram.svg";
import { Search, Download } from "lucide-react";
import PrimaryButton from "../functionalElements/PrimaryButton";
import DownloadCVButton from "../functionalElements/DownloadCVButton";
import { useState } from "react";
import MobileNav from "../functionalElements/MobileNav";

const mobileIcons = [
  { src: tailwindIcon, alt: "tailwind", top: "8%", left: "5%", rotate: -15, size: 36 },
  { src: reactIcon, alt: "react", top: "15%", left: "78%", rotate: 20, size: 40 },
  { src: htmlIcon, alt: "html", top: "30%", left: "88%", rotate: -8, size: 34 },
  { src: cssIcon, alt: "css", top: "55%", left: "82%", rotate: 23, size: 30 },
  { src: figmaIcon, alt: "figma", top: "70%", left: "6%", rotate: 3, size: 32 },
  { src: shopifyIcon, alt: "shopify", top: "80%", left: "75%", rotate: 3, size: 32 },
  { src: typescriptIcon, alt: "typescript", top: "10%", left: "88%", rotate: -10, size: 34 },
  { src: nodejsIcon, alt: "nodejs", top: "42%", left: "4%", rotate: 3, size: 32 },
  { src: mongoDBIcon, alt: "mongodb", top: "60%", left: "88%", rotate: 15, size: 36 },
  { src: javascriptIcon, alt: "javascript", top: "75%", left: "88%", rotate: 20, size: 32 },
  { src: swaggerIcon, alt: "swagger", top: "20%", left: "4%", rotate: -20, size: 28 },
  { src: gitIcon, alt: "git", top: "88%", left: "10%", rotate: -8, size: 34 },
];

// FIXED: Separated left (frontend) and right (backend) using percentages
const desktopIcons = [
  // Frontend & Design (Left)
  { src: tailwindIcon, alt: "tailwind", top: "10%", left: "10%", rotate: -15, size: 64 },
  { src: reactIcon, alt: "react", top: "35%", left: "18%", rotate: 20, size: 72 },
  { src: htmlIcon, alt: "html", top: "60%", left: "8%", rotate: -8, size: 60 },
  { src: cssIcon, alt: "css", top: "75%", left: "20%", rotate: 23, size: 52 },
  { src: figmaIcon, alt: "figma", top: "25%", left: "25%", rotate: 3, size: 56 },
  { src: shopifyIcon, alt: "shopify", top: "50%", left: "28%", rotate: 3, size: 56 },

  // Backend & Tools (Right)
  { src: typescriptIcon, alt: "typescript", top: "10%", right: "12%", rotate: -10, size: 60 },
  { src: nodejsIcon, alt: "nodejs", top: "35%", right: "20%", rotate: 3, size: 56 },
  { src: mongoDBIcon, alt: "mongodb", top: "60%", right: "10%", rotate: 15, size: 64 },
  { src: javascriptIcon, alt: "javascript", top: "75%", right: "22%", rotate: 20, size: 56 },
  { src: swaggerIcon, alt: "swagger", top: "25%", right: "28%", rotate: -20, size: 48 },
  { src: gitIcon, alt: "git", top: "50%", right: "15%", rotate: -8, size: 60 },
];

export default function Homepage() {
  const [mobileNavOpen, setMobileNavOpen] = useState<boolean>(false);
  const socialMedia = [
    { icon: githubIcon, alt: "Github icon", link: "https://github.com/ZubalYana" },
    { icon: telegramIcon, alt: "Telegram icon", link: "https://t.me/yanavesq#" },
    { icon: instIcon, alt: "Instagram icon", link: "https://www.instagram.com/yanavesq/" },
  ];

  return (
    <div className="w-full h-screen p-[20px] lg:p-[40px] overflow-hidden">
      <HomepageBg />

      <div className="lg:hidden relative z-10 h-full flex flex-col">
        <div
          className="z-50 absolute top-[20px] right-[20px] w-[24px] h-[16px] flex flex-col cursor-pointer justify-between"
          onClick={() => { setMobileNavOpen(true) }}
        >
          <div className="w-full h-[2px] rounded-[10px] bg-[#F5F5F5]/45 transition-all duration-200 "></div>
          <div className="w-full h-[2px] rounded-[10px] bg-[#F5F5F5]/45 transition-all duration-200 "></div>
          <div className="w-full h-[2px] rounded-[10px] bg-[#F5F5F5]/45 transition-all duration-200 "></div>
        </div>

        <div className="absolute inset-0 pointer-events-none z-5">
          {mobileIcons.map((icon) => (
            <img
              key={icon.alt}
              src={icon.src}
              alt={icon.alt}
              style={{
                position: "absolute",
                top: icon.top,
                left: icon.left,
                width: icon.size,
                height: icon.size,
                transform: `rotate(${icon.rotate}deg)`,
                opacity: 0.45,
              }}
            />
          ))}
        </div>

        <div className="flex-1 flex flex-col items-center justify-center gap-y-6 relative z-10">
          <motion.img
            src={portfolioPhoto}
            alt="portfolio photo"
            className="h-[80%] w-auto object-cover object-top absolute"
            style={{ maskImage: "linear-gradient(to bottom, black 60%, transparent 100%)" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
          />

          <motion.div
            className="flex flex-1 flex-col items-center justify-end mb-[50px] gap-y-4 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative z-[999]">
              <h3 className="text-[24px] font-bold">Yana Zubal</h3>
              <p className="text-[14px] font-light text-[#F5F5F5]/45">
                Full-stack web dev, UI/UX designer
              </p>
            </div>

            <div className="flex gap-x-4 relative z-[999]">
              <DownloadCVButton Icon={Download} text="Download CV" />
              <PrimaryButton Icon={Search} text="Discover" link="/projects" />
            </div>

            <div className="flex gap-x-6">
              {socialMedia.map((media, index) => (
                <a href={media.link} key={index} target="_blank" rel="noreferrer" className="w-[28px] h-[28px]">
                  <img src={media.icon} alt={media.alt} className="w-full h-full icon-hover" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {mobileNavOpen && (
          <motion.div className="w-full h-screen fixed flex justify-center items-center bg-[#121212]/70 z-50" onClick={() => { setMobileNavOpen(false) }}>
            <MobileNav onClose={() => setMobileNavOpen(false)} />
          </motion.div>
        )}
      </div>

      <div className="hidden lg:flex flex-col h-full w-full relative z-10 overflow-hidden">
        <Navigation />

        <div className="w-full flex-1 relative flex justify-center items-center overflow-hidden">

          <motion.div
            className="absolute inset-0 w-full h-full pointer-events-none z-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {desktopIcons.map((icon) => (
              <img
                key={icon.alt}
                src={icon.src}
                alt={icon.alt}
                className="absolute"
                style={{
                  top: icon.top,
                  ...(icon.left ? { left: icon.left } : { right: icon.right }),
                  width: icon.size,
                  height: icon.size,
                  transform: `rotate(${icon.rotate}deg)`,
                }}
              />
            ))}
          </motion.div>

          <div className="relative w-[350px] h-[515px] z-10 overflow-hidden">
            <motion.img
              src={portfolioPhoto}
              alt="portfolio photo"
              className="w-full h-full opacity-[0.9] object-cover"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 0.9, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              style={{
                WebkitMaskImage: "linear-gradient(to bottom, black 60%, transparent 100%)",
                maskImage: "linear-gradient(to bottom, black 60%, transparent 100%)"
              }}
            />
          </div>

          <motion.div
            className="w-full absolute bottom-0 flex flex-col md:flex-row justify-between z-20 pb-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="w-full flex flex-col text-center md:text-left md:w-[33%]">
              <h3 className="text-[24px] font-bold">Yana Zubal</h3>
              <p className="text-[14px] font-light text-[#F5F5F5]/45">
                Full-stack web dev, UI/UX designer
              </p>
            </div>
            <div className="md:w-[33%] flex justify-center items-end gap-x-4">
              <DownloadCVButton Icon={Download} text="Download CV" />
              <PrimaryButton Icon={Search} text="Discover" link="/projects" />
            </div>
            <div className="md:w-[33%] flex justify-end items-end gap-x-6">
              {socialMedia.map((media, index) => (
                <a href={media.link} key={index} target="_blank" rel="noreferrer" className="w-[30px] h-[30px] cursor-pointer">
                  <img src={media.icon} alt={media.alt} className="w-full h-full icon-hover" />
                </a>
              ))}
            </div>

            <div className="3xl:hidden w-full absolute bottom-0 h-[20%] bg-gradient-to-t from-[#121212] to-transparent pointer-events-none z-10" />
          </motion.div>


        </div>


      </div>
    </div>
  );
}

