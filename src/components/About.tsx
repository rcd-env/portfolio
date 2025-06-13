"use client";

import { NextPage } from "next";

import { motion } from "motion/react";

interface Props {}

const About: NextPage<Props> = ({}) => {
  return (
    <section
      className="max-w-[40rem] mx-auto px-[1rem] w-full flex flex-col gap-8"
      id="about"
    >
      <div>
        <motion.h2
          initial={{ opacity: 0, filter: "blur(10px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.3, delay: 0.5 }}
          className="text-2xl font-semibold"
        >
          About
        </motion.h2>
      </div>
      <div className="flex items-start justify-start flex-col gap-6">
        <motion.p
          initial={{ opacity: 0, filter: "blur(10px)" }}
          animate={{ opacity: 0.8, filter: "blur(0px)" }}
          transition={{ duration: 0.3, delay: 0.6 }}
        >
          A Learner by Choice, An Engineer by Chance.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, filter: "blur(10px)" }}
          animate={{ opacity: 0.8, filter: "blur(0px)" }}
          transition={{ duration: 0.3, delay: 0.7 }}
        >
          ---Technical Skills--- <br /> ◉ Frontend : HTML, CSS, JavaScript
          <br /> ◉ Backend : Node.js, Express.js <br /> ◉ Databases : MySQL,
          MongoDB <br /> ◉ Version Control : Git & GitHub <br /> ◉ Programming :
          C, C++, Java, JavaScript
        </motion.p>
        <motion.p
          initial={{ opacity: 0, filter: "blur(10px)" }}
          animate={{ opacity: 0.8, filter: "blur(0px)" }}
          transition={{ duration: 0.3, delay: 0.8 }}
        >
          A Little Bit More Than Average.
          <br />
          <br />| • Love for Animals & Learning is Constant • |
        </motion.p>{" "}
      </div>
    </section>
  );
};

export default About;
