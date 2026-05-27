import Navigation from "../functionalElements/Navigation";
import HomepageBg from "../decorations/HomepageBg";
import portfolioPhoto from "../../assets/portfolio_photo_cropped.png";
import tailwindIcon from "../../assets/techIcons/tailwind.svg"
import reactIcon from "../../assets/techIcons/react.svg"
import htmlIcon from "../../assets/techIcons/html.svg"
import cssIcon from "../../assets/techIcons/css.svg"
import figmaIcon from "../../assets/techIcons/figma.svg"
import shopifyIcon from "../../assets/techIcons/shopify.svg"

import typescriptIcon from "../../assets/techIcons/typescript.svg"
import nodejsIcon from "../../assets/techIcons/nodeJS.svg"
import mongoDBIcon from "../../assets/techIcons/mongoDB.svg"
import javascriptIcon from "../../assets/techIcons/javascript.svg"
import swaggerIcon from "../../assets/techIcons/swagger.svg"
import gitIcon from "../../assets/techIcons/git.svg"

export default function Homepage() {
  return (
    <div className="w-full md:h-screen p-[20px] lg:p-[40px]">
      <HomepageBg />
      <div className="relative z-10">
        <Navigation />
        <div className="w-full flex justify-center">
          <img
            src={portfolioPhoto}
            alt="portfolio photo"
            className="lg:w-[350px] lg:h-[515px] opacity-[0.9]"
          />
          <div>
            <img src={tailwindIcon} alt="tailwind icon" className="absolute top-6 left-80 rotate-[-15deg] w-16 h-16" />
            <img src={reactIcon} alt="react icon" className="absolute top-32 left-85 rotate-[20deg] w-18 h-18" />
            <img src={htmlIcon} alt="html icon" className="absolute top-45 left-50 rotate-[-8deg] w-15 h-15"  />
            <img src={cssIcon} alt="css icon" className="absolute top-65 left-80 rotate-[23deg] w-13 h-13"  />
            <img src={figmaIcon} alt="figma icon" className="absolute top-81 left-56 rotate-[3deg] w-14 h-14" />
            <img src={shopifyIcon} alt="shopify icon" className="absolute top-100 left-80 rotate-[3deg] w-14 h-14" />

            <img src={typescriptIcon} alt="typescript icon" className="absolute top-10 left-205 rotate-[-10deg] w-15 h-15" />
            <img src={nodejsIcon} alt="nodejs icon" className="absolute top-33 left-185 rotate-[3deg] w-14 h-14" />
            <img src={mongoDBIcon} alt="mongoDB icon" className="absolute top-47 left-225 rotate-[15deg] w-16 h-16" />
            <img src={javascriptIcon} alt="javascript icon" className="absolute top-65 left-200 rotate-[20deg] w-14 h-14" />
            <img src={swaggerIcon} alt="swagger icon" className="absolute top-90 left-230 rotate-[-20deg] w-12 h-12" />
            <img src={gitIcon} alt="git icon" className="absolute top-100 left-190 rotate-[-8deg] w-15 h-15" />
          </div>
        </div>
      </div>
    </div>
  );
}
