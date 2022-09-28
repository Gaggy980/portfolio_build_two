import React from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";

type Props = {};

function Skills({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className=" flex relative flex-col text-center md:text-left  max-w-[2000px]
   xl:px-10 min-h-screen justify-center items-center mx-auto xl:space-y-0"
    >
      <h3 className="absolute  top-24 uppercase tracking-[20px] text-2xl text-gray-400">
        skills
      </h3>
      <h3 className="absolute top-36 uppercase tracking-[2.5px] text-gray-500">
        Hover over a skill for current profieciency
      </h3>

      <div className="grid grid-cols-4 gap-5">
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
      </div>
    </motion.div>
  );
}

export default Skills;
