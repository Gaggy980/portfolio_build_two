/* eslint-disable react/jsx-key */
import React from "react";
import { motion } from "framer-motion";

type Props = {};

function Projects({}: Props) {
  const projects = [1, 2, 3, 4, 5];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full
  justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-2xl text-gray-400">
        Projects
      </h3>
      <div
        className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x
      snap-mandatory z-20 scrollbar scrollbar-track-gary-400/20 scrollbar-thumb-red-600/40"
      >
        {projects.map((project, i) => (
          <div
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 
          items-center justify-center p-20 md:p-44 h-screen "
          >
            <motion.img
              initial={{ y: -300, opacity: 0 }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              src="https://dempseygraphics.com/wp-content/uploads/2018/12/eureka-casino-mockup-1080x607.jpg"
              alt="*"
            />
            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-4xl font-semibold text-center">
                <span className="underline decoration-red-600/60">
                  Case Study {i + 1} of {projects.length}:
                </span>{" "}
                web app
              </h4>
              <p className="text-lg text-center md:text-left">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Necessitatibus, porro. Deserunt quod voluptatibus dolor corporis
                officia aliquid, ipsum eum fugiat praesentium eligendi tempora,
                a maiores doloremque possimus reiciendis numquam? Cupiditate.
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-red-600/20 left-0 h-[500px] -skew-y-12"></div>
    </motion.div>
  );
}

export default Projects;
