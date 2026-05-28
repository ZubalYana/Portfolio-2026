import { motion } from "framer-motion";
import portfolio_photo2 from "../../assets/portfolio_photo2.jpg";
import { GraduationCap, Code2Icon, Globe } from "lucide-react";

export default function AboutMe() {

    const languages = [
        {
            language: 'Ukrainian',
            level: 'Native',
            fillingPercantage: 90
        },
        {
            language: 'English',
            level: 'C1',
            fillingPercantage: 75
        },
        {
            language: 'French',
            level: 'A2+',
            fillingPercantage: 30
        }
    ]
  return (
    <motion.div className="w-screen md:h-screen min-h-0 flex flex-col items-center p-[20px] lg:p-[40px] relative z-10">
      <h1 className="uppercase font-bold text-[32px]">
        About me<span className="text-[#008CFF]">.</span>
      </h1>
      <div className="w-full flex-1 flex flex-col md:flex-row gap-x-6">
        <div className="w-full md:h-full md:max-w-[30%]">
          <img
            src={portfolio_photo2}
            alt="portfolio photo 2"
            className="w-full h-[450px] object-cover object-top rounded-[16px]"
          />
        </div>
        <div className="w-full md:h-full md:max-w-[70%] pt-4">
          <p className="text-[12px] text-left w-full">
            Hey! 👋 I'm Yana, a full-stack web developer & UI/UX designer based
            in Lviv, Ukraine. <br />
            <br />
            I've been into programming since 2022 — 4 years in the field, with
            roughly 2 of them in commercial work. I believe programmers are,
            first of all, people who seek solutions and push the world forward.{" "}
            <br />
            <br />
            I'd describe myself as hardworking and genuinely open to growth. I
            look for opportunities everywhere I can. Responsible at work, pretty
            easygoing outside of it — I find it easy to connect with people.
            With plenty of team projects under my belt, I know how to
            communicate and build trust in a working environment. I'm also big
            on time management: I kept a part-time job while finishing school
            and sitting my final exams, which I'm quietly proud of.
          </p>
          <div className="w-full flex flex-col gap-y-6 md:gap-y-0 md:flex-row mt-6 md:mt-4">
            <div className="w-full md:w-[50%] flex flex-col">
              <div className="flex gap-x-3 items-center">
                <div className="w-[35px] h-[35px] p-2 rounded-[8px] bg-[#008CFF]/20">
                  <GraduationCap className="w-full h-full text-[#008CFF]" />
                </div>
                <h5 className="uppercase font-medium text-[16px]">Education</h5>
              </div>

              <div className="w-full flex flex-col text-left gap-y-1 mt-2">
                <p className="font-light text-[12px]">
                  <span className="font-semibold">2014-2026: </span>School of
                  Shklo ( graduated with honors )
                </p>
                <p className="font-light text-[12px]">
                  <span className="font-semibold">2022-2026: </span>Creator IT
                  Academy ( extended Web Development course, 2 UI/UX design
                  courses )
                </p>
                <p className="font-light text-[12px]">
                  <span className="font-semibold">2026-present: </span>Lviv
                  Polytechnic National University student
                </p>
              </div>
            </div>
            <div className="w-full md:w-[50%] flex flex-col">
              <div className="flex gap-x-3 items-center">
                <div className="w-[35px] h-[35px] p-2 rounded-[8px] bg-[#008CFF]/20">
                  <Code2Icon className="w-full h-full text-[#008CFF]" />
                </div>
                <h5 className="uppercase font-medium text-[16px]">
                  Experience
                </h5>
              </div>

              <div className="w-full flex flex-col text-left gap-y-1 mt-2">
                <p className="font-light text-[12px]">
                  <span className="font-semibold">2025-2026: </span>Freelance
                  projects within{" "}
                  <a
                    className="text-[#008CFF] cursor-pointer"
                    href="https://creator-it-academy.com/ "
                  >
                    Creator IT Academy
                  </a>
                </p>
                <p className="font-light text-[12px]">
                  <span className="font-semibold">2025-present: </span>Part-time
                  cooperation with{" "}
                  <a
                    className="text-[#008CFF] cursor-pointer"
                    href="https://koloda.shop/"
                  >
                    Koloda Shop
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col mt-6 md:mt-4">
            <div className="flex gap-x-3 items-center">
                <div className="w-[35px] h-[35px] p-2 rounded-[8px] bg-[#008CFF]/20">
                  <Globe className="w-full h-full text-[#008CFF]" />
                </div>
                <h5 className="uppercase font-medium text-[16px]">
                  Languages
                </h5>
              </div>
              <div className="w-full flex flex-col flex-wrap md:flex-nowrap md:flex-row md:gap-x-6 mt-4">
              {languages.map((language, index)=>(
                <div className="w-[150px] flex flex-col gap-y-2 text-left" key={index}>
                    <div className="bg-[#008CFF]/20 w-full h-[6px] rounded-[16px]">
                    <div className="bg-[#008CFF] h-full rounded-[16px]" style={{width: `${language.fillingPercantage}%`}}></div>
                    </div>
                    <p className="text-[12px] font-light">
                        {language.language}: <span className="font-semibold">{language.level}</span>
                    </p>
                </div>
              ))}
              </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
