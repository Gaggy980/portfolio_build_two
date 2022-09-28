import Image from "next/image";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Avatar from "../public/avatar.png";
import Link from "next/link";


type Props = {};

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Hi, The Name's Igor",
      "Guy-from-Dublin",
      "{WhoLikesTo<code/>}",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div
      className="h-screen flex flex-col space-y-8 items-center 
    justify-center text-center overflow-hidden"
    >
      <BackgroundCircles />
      <div
        className="border border-gray-500 rounded-full p-2
         bg-gray-300"
      >
        <Image src={Avatar} alt="/" width={120} height={120} />
      </div>
      <div className="z-20">
          <h2 className="uppercase text-sm pb-2 tracking-[12px]">Software Engineer</h2>
          <h1 className="text-5xl lg:text-6xl font-semibold px-10">
            <span className="mr-4">{text}</span>
            <Cursor cursorColor="red" />
          </h1>

          <div className="pt-5">
            <Link href="#about">
            <button className='heroButton' >About</button>
            </Link>
            <Link href="#exsperience">
            <button className='heroButton' >Experience</button>
            </Link>
            <Link href="#skills">
            <button className='heroButton' >Skills</button>
            </Link>
            <Link href="projects">
            <button className='heroButton' >Projects</button>
            </Link>
          </div>

      </div>
    </div>
  );
}
