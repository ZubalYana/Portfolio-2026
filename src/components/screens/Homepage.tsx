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

const mobileIcons = [
  { src: tailwindIcon,   alt: "tailwind",   top: "8%",  left: "5%",  rotate: -15, size: 36 },
  { src: reactIcon,      alt: "react",      top: "15%", left: "78%", rotate: 20,  size: 40 },
  { src: htmlIcon,       alt: "html",       top: "30%", left: "88%", rotate: -8,  size: 34 },
  { src: cssIcon,        alt: "css",        top: "55%", left: "82%", rotate: 23,  size: 30 },
  { src: figmaIcon,      alt: "figma",      top: "70%", left: "6%",  rotate: 3,   size: 32 },
  { src: shopifyIcon,    alt: "shopify",    top: "80%", left: "75%", rotate: 3,   size: 32 },
  { src: typescriptIcon, alt: "typescript", top: "10%", left: "88%", rotate: -10, size: 34 },
  { src: nodejsIcon,     alt: "nodejs",     top: "42%", left: "4%",  rotate: 3,   size: 32 },
  { src: mongoDBIcon,    alt: "mongodb",    top: "60%", left: "88%", rotate: 15,  size: 36 },
  { src: javascriptIcon, alt: "javascript", top: "75%", left: "88%", rotate: 20,  size: 32 },
  { src: swaggerIcon,    alt: "swagger",    top: "20%", left: "4%",  rotate: -20, size: 28 },
  { src: gitIcon,        alt: "git",        top: "88%", left: "10%", rotate: -8,  size: 34 },
];

export default function Homepage() {
  const socialMedia = [
    { icon: githubIcon,   alt: "Github icon",    link: "https://github.com/ZubalYana" },
    { icon: telegramIcon, alt: "Telegram icon",  link: "https://t.me/yanavesq#" },
    { icon: instIcon,     alt: "Instagram icon", link: "https://www.instagram.com/yanavesq/" },
  ];

  return (
    <div className="w-full h-screen p-[20px] lg:p-[40px] overflow-hidden">
      <HomepageBg />

      <div className="lg:hidden relative z-10 h-full flex flex-col">
        <Navigation />

        <div className="absolute inset-0 pointer-events-none">
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
            className="h-[90%] w-auto object-cover object-top absolute"
            style={{ maskImage: "linear-gradient(to bottom, black 60%, transparent 100%)" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
          />

          <motion.div
            className="flex flex-1 flex-col items-center justify-end gap-y-4 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="">
              <h3 className="text-[24px] font-bold">Yana Zubal</h3>
              <p className="text-[14px] font-light text-[#F5F5F5]/45">
                Full-stack web dev, UI/UX designer
              </p>
            </div>

            <div className="flex gap-x-4">
              <DownloadCVButton Icon={Download} text="Download CV" />
              <PrimaryButton Icon={Search} text="Discover" />
            </div>

            <div className="flex gap-x-6">
              {socialMedia.map((media, index) => (
                <a href={media.link} key={index} target="_blank" className="w-[28px] h-[28px]">
                  <img src={media.icon} alt={media.alt} className="w-full h-full icon-hover" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <div className="hidden lg:block relative z-10">
        <Navigation />
        <div className="w-full flex justify-center">

          <motion.img
            src={portfolioPhoto}
            alt="portfolio photo"
            className="lg:w-[350px] lg:h-[515px] opacity-[0.9]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 0.9, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
          />

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <img src={tailwindIcon}   alt="tailwind icon"   className="absolute top-6   left-80  rotate-[-15deg] w-16 h-16" />
            <img src={reactIcon}      alt="react icon"      className="absolute top-32  left-85  rotate-[20deg]  w-18 h-18" />
            <img src={htmlIcon}       alt="html icon"       className="absolute top-45  left-50  rotate-[-8deg]  w-15 h-15" />
            <img src={cssIcon}        alt="css icon"        className="absolute top-65  left-80  rotate-[23deg]  w-13 h-13" />
            <img src={figmaIcon}      alt="figma icon"      className="absolute top-81  left-56  rotate-[3deg]   w-14 h-14" />
            <img src={shopifyIcon}    alt="shopify icon"    className="absolute top-100 left-80  rotate-[3deg]   w-14 h-14" />
            <img src={typescriptIcon} alt="typescript icon" className="absolute top-10  left-205 rotate-[-10deg] w-15 h-15" />
            <img src={nodejsIcon}     alt="nodejs icon"     className="absolute top-33  left-185 rotate-[3deg]   w-14 h-14" />
            <img src={mongoDBIcon}    alt="mongoDB icon"    className="absolute top-47  left-225 rotate-[15deg]  w-16 h-16" />
            <img src={javascriptIcon} alt="javascript icon" className="absolute top-65  left-200 rotate-[20deg]  w-14 h-14" />
            <img src={swaggerIcon}    alt="swagger icon"    className="absolute top-90  left-230 rotate-[-20deg] w-12 h-12" />
            <img src={gitIcon}        alt="git icon"        className="absolute top-100 left-190 rotate-[-8deg]  w-15 h-15" />
          </motion.div>

          <motion.div
            className="w-full absolute bottom-6 flex flex-col md:flex-row justify-between z-20"
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
            <div className="md:w-[33%] flex justify-center gap-x-4">
              <DownloadCVButton Icon={Download} text="Download CV" />
              <PrimaryButton Icon={Search} text="Discover" />
            </div>
            <div className="md:w-[33%] flex justify-end items-center gap-x-6">
              {socialMedia.map((media, index) => (
                <a href={media.link} key={index} target="_blank" className="w-[30px] h-[30px] cursor-pointer">
                  <img src={media.icon} alt={media.alt} className="w-full h-full icon-hover" />
                </a>
              ))}
            </div>
          </motion.div>

          <div className="w-full absolute bottom-0 h-[20%] bg-gradient-to-t from-[#121212] to-transparent pointer-events-none" />
        </div>
      </div>
    </div>
  );
}