import { motion } from "framer-motion";
import React from "react";

type Props = {};

export default function About({}: Props) {
  return (
    <motion.div
    initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{
        duration: 1.5,
      }}
      className="flex flex-col relative h-screen text-center md:text-left
    md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-2xl">
        About
      </h3>

      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        src="https://images.unsplash.com/photo-1518644730709-0835105d9daa?ixlib=
        rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=
        crop&w=1170&q=80"
        className="-mb-20 md:mb-0 flex-shrink-0 w-[250px] h-[250px] rounded-full object-cover 
        md:rounded-lg md:w-64 md:h-84 xl:w-[600px] xl:h-[550px]"
      />
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
            Here is <span className="underline decoration-red-600">where</span> I was
        </h4>
          <p>
            I have spent the last 20 years in hospitality working as profesional
            Chef and Manager. I have always had a knack for tehnology and working
            with computers. 2018 I started software development pathway, with
            foundations on C#,.Net and python . That took me for a year to finish.
            After that I just wanted to refresh my front-end knowledge in HTML, CSS,
            jQuery, JavaScript and got super excited about Web development and
            responsive websites.I am now spending my time building projects with
            modern libraries and frameworks (NextJs, TailwindCss, Firebase,GCloud).
          </p>
      </div>
    </motion.div>
  );
}
