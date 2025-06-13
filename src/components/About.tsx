"use client";

import { useState } from "react";
import { NextPage } from "next";
import { motion, AnimatePresence } from "framer-motion";

const skillSections = [
  {
    category: "Frontend",
    skills: [
      { name: "HTML", level: 100 },
      { name: "CSS", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "Tailwind CSS", level: 80 },
      { name: "Bootstrap", level: 80 },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", level: 100 },
      { name: "Express.js", level: 85 },
    ],
  },
  {
    category: "Database",
    skills: [
      { name: "MySQL", level: 70 },
      { name: "MongoDB", level: 90 },
    ],
  },
  {
    category: "Version Control",
    skills: [
      { name: "Git", level: 90 },
      { name: "GitHub", level: 100 },
    ],
  },
  {
    category: "Programming Languages",
    skills: [
      { name: "C", level: 80 },
      { name: "C++", level: 65 },
      { name: "Java", level: 75 },
    ],
  },
];

const About: NextPage = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const toggleSection = (category: string) => {
    setActiveSection((prev) => (prev === category ? null : category));
  };

  return (
    <section
      className="max-w-[40rem] mx-auto px-4 w-full flex flex-col gap-10 text-white"
      id="about"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-2xl font-semibold tracking-wide"
      >
        Technical Skills
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
        className="flex flex-col gap-4"
      >
        {skillSections.map((section, idx) => {
          const isOpen = activeSection === section.category;

          return (
            <motion.div
              key={section.category}
              className="bg-white/5/0 bg-opacity-0 rounded-lg border border-white/10 backdrop-blur-md overflow-hidden"
              layout
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            >
              <button
                onClick={() => toggleSection(section.category)}
                className="w-full px-4 py-3 flex justify-between items-center cursor-pointer hover:bg-white/10 transition-colors duration-200"
              >
                <h4 className="text-lg font-medium text-left w-full">
                  {section.category}
                </h4>
                <motion.span
                  className="text-2xl font-bold ml-4 select-none"
                  animate={{ rotate: isOpen ? 45 : 0 }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                >
                  +
                </motion.span>
              </button>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    key="content"
                    initial={{ height: 0 }}
                    animate={{ height: "auto" }}
                    exit={{ height: 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-4 pb-4">
                      <div className="flex flex-col gap-4 pt-2">
                        {section.skills.map((skill, skillIdx) => (
                          <motion.div
                            key={skill.name}
                            className="flex flex-col gap-1"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{
                              duration: 0.2,
                              delay: 0.05 * skillIdx,
                            }}
                          >
                            <div className="flex justify-between text-sm text-white/80">
                              <span>{skill.name}</span>
                              <span>{skill.level}%</span>
                            </div>
                            <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                              <motion.div
                                className="h-full bg-gradient-to-r from-white to-white/90 rounded-full"
                                initial={{ width: "0%" }}
                                animate={{ width: `${skill.level}%` }}
                                transition={{
                                  duration: 0.5,
                                  delay: 0.1 + 0.03 * skillIdx,
                                  ease: "easeOut",
                                }}
                              />
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </motion.div>

      <hr className="border-white/20 mt-4" />
    </section>
  );
};

export default About;
