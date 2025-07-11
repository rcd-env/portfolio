"use client";

import { NextPage } from "next";

import { Home, Code, User2, Briefcase, Github, Twitter } from "lucide-react";

import Link from "next/link";
import { motion } from "motion/react";

interface Props {}

const Navbar: NextPage<Props> = ({}) => {
  return (
    <motion.nav
      initial={{ opacity: 0, filter: "blur(10px)", y: 40 }}
      animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
      transition={{ duration: 0.3, delay: 1 }}
      className="fixed bottom-0 left-0 right-0 flex justify-center z-[9999999999999999]"
    >
      <div className="my-8 border-2 w-fit bg-[#191919] border-white border-opacity-10 rounded-full shadow-md">
        <div className="py-2 px-4 flex items-center justify-between gap-2 ">
          <ul className="flex gap-1 items-center justify-between">
            <li className="hover:bg-white hover:bg-opacity-10 transition-all p-2 rounded-full">
              <Link
                href="#"
                className="opacity-80 hover:opacity-100 transition-all"
              >
                <Home size={20} />
              </Link>
            </li>
            <li className="hover:bg-white hover:bg-opacity-10 transition-all p-2 rounded-full">
              <Link
                href="#about"
                className="opacity-80 hover:opacity-100 transition-all"
              >
                <User2 size={20} />
              </Link>
            </li>
            <li className="hover:bg-white hover:bg-opacity-10 transition-all p-2 rounded-full">
              <Link
                href="#experience"
                className="opacity-80 hover:opacity-100 transition-all"
              >
                <Briefcase size={20} />
              </Link>
            </li>
            <li className="hover:bg-white hover:bg-opacity-10 transition-all p-2 rounded-full">
              <Link
                href="#projects"
                className="opacity-80 hover:opacity-100 transition-all"
              >
                <Code size={20} />
              </Link>
            </li>
          </ul>
          <span className="w-[1px] h-[25px] bg-white bg-opacity-80"></span>
          <ul className="flex gap-2 items-center justify-between">
            <li className="hover:bg-white hover:bg-opacity-10 transition-all p-2 rounded-full">
              <Link
                href="https://github.com/rcd-env"
                target="_blank"
                className="opacity-80 hover:opacity-100 transition-all"
              >
                <Github size={20} />
              </Link>
            </li>
            <li className="hover:bg-white hover:bg-opacity-10 transition-all p-2 rounded-full">
              <Link
                href="https://x.com/rcd_env"
                target="_blank"
                className="opacity-80 hover:opacity-100 transition-all"
              >
                <Twitter size={20} />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
