import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import BackgroundGlow from "../decorations/BackgroundGlow";

const questions = [
  {
    question: "What are you learning right now?",
    answer:
      "Sharpening my SQL, mainly PostgreSQL so far, while picking up Python and C++. Beyond code, I'm digging into Linear Algebra and Physics, want to see where else development can take me.",
  },
  {
    question: "How actively do you use AI in your work?",
    answer:
      "As a tool, not a crutch. Over 90% of my code is written by hand, since that's the only way I actually get better. I'll use AI for trivial, time-consuming tasks or to explain something unfamiliar, but I never ship code I don't fully understand.",
  },
  {
    question: "Can you work in larger teams?",
    answer:
      "Yes. I've worked across teams of different sizes and stacks, mostly with fellow students, and genuinely enjoy it. Communication and clear scope matter more to me than team size.",
  },
  {
    question: "Do you have a degree in tech?",
    answer:
      "Not yet, that's a few years out. I think a degree matters less than it used to, since so much can be self-taught, but I'm curious what university adds on top of what I already know.",
  },
  {
    question: "Are you available for freelance or hire?",
    answer:
      "Yes, I'm actively ready to take on new, exciting projects. If you think I'd be a fit, reach out!",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id="faq"
      className="w-full flex flex-col items-center py-[80px] px-[20px] lg:px-[40px] relative z-10 overflow-hidden"
    >
      <motion.h1
        className="uppercase font-bold text-[32px]"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        FAQ<span className="text-[#008CFF]">.</span>
      </motion.h1>

      <div className="w-full max-w-[720px] mt-10 flex flex-col gap-3 z-10 overflow-hidden">
        {questions.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className={`w-full rounded-[12px] border transition-colors duration-300 ${isOpen
                ? "border-[#008CFF]/30 bg-[#008CFF]/5"
                : "border-[#F5F5F5]/10 bg-[#F5F5F5]/5 hover:border-[#F5F5F5]/20"
                }`}
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left cursor-pointer"
              >
                <span
                  className={`text-[14px] sm:text-[15px] font-medium transition-colors duration-200 ${isOpen ? "text-[#008CFF]" : "text-[#F5F5F5]"
                    }`}
                >
                  {item.question}
                </span>
                <motion.span
                  animate={{ rotate: isOpen ? 45 : 0 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                  className={`shrink-0 ${isOpen ? "text-[#008CFF]" : "text-[#F5F5F5]/50"
                    }`}
                >
                  <Plus size={18} />
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.32, 0.72, 0, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 pb-4 text-[13px] sm:text-[14px] leading-relaxed text-[#F5F5F5]/70 text-left">
                      {item.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>

      <BackgroundGlow
        width={1200}
        height={500}
        opacity={0.15}
        bottom={100}
        left={-300}
      />
    </section>
  );
}