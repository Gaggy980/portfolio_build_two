import { motion } from "framer-motion";
import React from "react";

type Props = {
  directionLeft?: boolean;
};

function Skill({ directionLeft }: Props) {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        initial={{
          x: directionLeft ? -200 : 200,
          opacity: 0,
        }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        src="https://w7.pngwing.com/pngs/446/313/png-transparent-tampa-bay-buccaneers-pittsburgh-pirates-dream-league-soccer-american-football-sport-american-football.png"
        className="rounded-full border-red-800 object-cover w-24 h-24 xl:w-32 xl:h-32 filter group-hover:grayscale
     transition duration-300 ease-in-out"
      />
      <div
        className="absolute opacity-0 group-hover:opacity-90 transition duration-300 ease-in-out group-hover:bg-red-800
     w-24 h-24 xl:w-32 xl:h-32 rounded-full"
      >
        <div className="flex items-center justify-center h-full ">
          <p className="text-3xl font-bold text-white opacity-100">100%</p>
        </div>
      </div>
    </div>
  );
}

export default Skill;
