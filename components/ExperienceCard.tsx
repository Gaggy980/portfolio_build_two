import React from 'react'
import {motion} from "framer-motion";

export default function ExperienceCard({}: Props) {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-5 flex-shrink-0 w-[500px]
    md:w-[600px] xl:w-[800px] snap-center bg-gray-900 p-10 hover:opacity-100 opacity-50 
    cursor-pointer transition-opacity duration-200 overflow-hidden '>
        <motion.img
        initial={{
            y: -100,
            opacity: 0,
        }}
        transition= {{ duration: 1.2,}}
        whileInView={{ opacity: 1,y: 0,}}
        viewport={{ once: true }}        
        src="https://www.pngitem.com/pimgs/m/35-351826_linkedin-icon-png-transparent-background-linkedin-logo-png.png"
        className="w-32 h-32 rounded-full object-cover xl:w-[200px] xl:h-[200px]"
      />

    <div className="px-0 md:px-10">
        <h4 className='text-4xl font-light'>CEO of Company</h4>
        <p className="font-bold text-2xl mt-1">Company Name</p>
        <div className='flex space-x-2 my-2'>
            <img src="https://mpng.subpng.com/20190125/wpj/kisspng-computer-icons-html5-scalable-vector-graphics-port-socialpack-chocolate-icon-5c4b3bbcb7d671.680718971548434364753.jpg" alt="/" 
            className="h-10 w-10 rounded-full object-cover object-center" />
            <img src="https://www.ouctus.com/assets/frontend/packages/react.png" alt="/" 
            className="h-10 w-10 rounded-full object-cover" />
            <img src="https://img1.pnghut.com/t/6/5/22/AwAudBcFa4/string-declaration-constant-computer-programming-variable.jpg" alt="/" 
            className="h-10 w-10 rounded-full object-cover" />
            <img src="https://logonoid.com/images/javascript-logo.png" alt="/" 
            className="h-10 w-10 rounded-full object-cover" />
        </div>
        <p className='uppercase py-5 text-gray-400'>Started work ...-ended ...</p>
        <ul className="list-disc space-y-4 ml-5 text-lg">
            <li>Summary points Summary points Summary points </li>
            <li>Summary points Summary points Summary points </li>
            <li>Summary points Summary points Summary points </li>
            <li>Summary points Summary points Summary points </li>
            <li>Summary points Summary points Summary points </li>
        </ul>
    </div>

    </article>
  )
}

 