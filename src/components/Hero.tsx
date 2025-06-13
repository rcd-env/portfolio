"use client";

import { NextPage } from "next";
import Image from "next/image";

import { motion } from "motion/react";

interface Props {}

const Hero: NextPage<Props> = ({}) => {
  const headingText = "Rakesh Das";

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const letterAnimation = {
    hidden: {
      opacity: 0,
      filter: "blur(10px)",
    },
    show: {
      opacity: 1,
      filter: "blur(0px)",
    },
  };

  return (
    <section className="max-w-[40rem] mx-auto px-[1rem]" id="hero">
      <div className="flex items-center justify-between gap-8 max-[670px]:flex-col-reverse max-[670px]:justify-center max-[670px]:text-center">
        <div className="flex justify-start items-start flex-col gap-6 max-[670px]:items-center max-[670px]:text-center">
          <motion.h1
            variants={container}
            initial="hidden"
            animate="show"
            className="text-5xl font-bold tracking-tight text-pretty flex flex-wrap gap-2 max-[670px]:text-center max-[670px]:justify-center max-[670px]:items-center"
          >
            <motion.span className="flex flex-wrap gap-2 max-[670px]:text-center max-[670px]:justify-center max-[670px]:items-center">
              {headingText.split(" ").map((word, index) => (
                <motion.span
                  key={index}
                  variants={letterAnimation}
                  transition={{ duration: 0.5 }}
                  className="inline-block"
                >
                  {word}
                </motion.span>
              ))}
            </motion.span>
          </motion.h1>{" "}
          <motion.p
            initial={{ opacity: 0, filter: "blur(10px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="italic font-medium"
          >
            I build Product not Project.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, filter: "blur(10px)" }}
            animate={{ opacity: 0.8, filter: "blur(0px)" }}
            transition={{ duration: 0.3, delay: 0.3 }}
            className="opacity-80 max-w-[30rem] text-pretty"
          >
            CSE (AI & ML) Undergrad @ SNU || Full Stack Web Developer ||
            HackFest 25' Regional Round Winner ||
          </motion.p>
        </div>
        <motion.div
          initial={{ opacity: 0, filter: "blur(10px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.4 }}
          className="flex justify-end items-end pointer-events-none"
        >
          <Image
            src="/PFP.jpeg"
            alt="Rakesh"
            width={150}
            height={150}
            quality={100}
            className="rounded-full pointer-events-none"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
