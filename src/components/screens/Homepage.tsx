import Navigation from "../functionalElements/Navigation";
import HomepageBg from "../decorations/HomepageBg";
import portfolioPhoto from "../../assets/portfolio_photo_cropped.png";

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
        </div>
      </div>
    </div>
  );
}
