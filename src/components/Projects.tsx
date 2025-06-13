"use client";

import { NextPage } from "next";
import { motion, useInView } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
  tags: string[];
}

interface Props {}

const Projects: NextPage<Props> = ({}) => {
  const projects: Project[] = [
    {
      title: "RoomGo",
      description: "Currently working on it.",
      image: "/assets/RoomGo.png",
      link: "nada",
      tags: ["Node.js", "Express.js", "MongoDB", "BootStrap", "EJS"],
    },
    {
      title: "Amazon Homepage Clone",
      description:
        "A static replica of Amazon's homepage built for design and layout practice. Not responsive yet.",
      image: "/assets/AmazonClone.png",
      link: "https://amazon-clone-virid-seven.vercel.app/",
      tags: ["HTML", "CSS"],
    },
    {
      title: "Line Dropper",
      description:
        "A content generation tool that helps creators craft perfect social media posts. Just enter a topic, tone, length, and platform — it suggests optimized titles, hashtags, and descriptions.",
      image: "/assets/LineDropper.png",
      link: "https://line-dropper.vercel.app/",
      tags: ["Node.js", "Express.js", "OpenAI API", "HTML", "CSS"],
    },
    {
      title: "ClimaSphere",
      description:
        "A sleek weather app that provides real-time weather updates based on your location or search queries.",
      image: "/assets/ClimaSphere.png",
      link: "https://weather-wizard-topaz.vercel.app/",
      tags: ["JavaScript", "HTML", "CSS", "OpenWeather API"],
    },
    {
      title: "Simon Says Game",
      description:
        "A fun, interactive memory game built with JavaScript, replicating the classic 'Simon Says' gameplay.",
      image: "/assets/SimonSaysGame.png",
      link: "https://simon-says-game-murex.vercel.app/",
      tags: ["JavaScript", "HTML", "CSS"],
    },
  ];

  return (
    <section
      className="max-w-[40rem] mx-auto px-[1rem] w-full flex flex-col gap-8"
      id="projects"
    >
      <div>
        <motion.h2
          initial={{ opacity: 0, filter: "blur(10px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.3, delay: 1.1 }}
          className="text-2xl font-semibold"
        >
          Projects
        </motion.h2>
      </div>
      <div className="flex flex-col gap-8 w-full">
        <motion.div
          initial={{ opacity: 0, filter: "blur(10px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.3, delay: 1.2 }}
          className="grid grid-cols-1 gap-6 w-full grow"
        >
          {projects.map((project, index) => (
            <div
              className="border border-white border-opacity-10 rounded-xl p-4 hover:bg-white hover:bg-opacity-5 transition-all w-full backdrop-blur-xl"
              key={index}
            >
              <Link href={project.link} className="flex flex-col gap-4">
                <div className="relative aspect-video w-full overflow-hidden rounded-lg -mb-4">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={1920}
                    height={1020}
                    className="object-cover rounded-lg"
                  />
                </div>
                <hr className="opacity-10" />
                <div className="flex items-start justify-between gap-4">
                  <div className="flex flex-col gap-2">
                    <h3 className="font-medium flex items-center gap-2">
                      {project.title}
                      <ArrowUpRight
                        size={16}
                        className="opacity-0 group-hover:opacity-100 transition-opacity"
                      />
                    </h3>
                    <p className="opacity-80 text-sm">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="text-xs px-2 py-1 rounded-full bg-white bg-opacity-10"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </motion.div>
      </div>

      <hr className="border-white/20 mt-4" />
    </section>
  );
};

export default Projects;
