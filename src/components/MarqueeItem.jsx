import React from 'react'
import Marquee from "react-fast-marquee";
import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTailwindcss } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";

export const MarqueeItem = () => {
  return (
    <div className='md:px-[15%] px-7 mt-[-4px] py-[7%] bg-[#0a192f] '>
         <Marquee  className=' text-[#7a85a2]  bg-[#0a192f]  '>
        <p className='flex items-center px-5  justify-center gap-2 font text-[20px] '><FaHtml5 /> <span className=' pt-1  text-[14px]'>HTML</span></p>
        <p className='flex items-center px-5  justify-center gap-2 font text-[20px]'><FaCss3Alt /> <span className=' pt-1 text-[14px]'>CSS</span></p>
        <p className='flex items-center px-5  justify-center gap-2 font text-[20px]'><IoLogoJavascript /> <span className=' pt-1 text-[14px]'>JavaScript</span></p>
        <p className='flex items-center px-5  justify-center gap-2 font text-[20px]'><SiTailwindcss /> <span className=' pt-1 text-[14px]'>Tailwind Css</span></p>
        <p className='flex items-center px-5  justify-center gap-2 font text-[20px] text-[#abd373] '><FaReact /> <span className=' pt-1 text-[14px]'>ReactJs</span></p>
        <p className='flex items-center px-5  justify-center gap-2 font text-[20px] text-[#abd373]'><FaNodeJs /> <span className=' pt-1 text-[14px]'>NodeJs</span></p>
        <p className='flex items-center px-5  justify-center gap-2 font text-[20px] text-[#abd373]'><SiMongodb /> <span className=' pt-1 text-[14px]'>MongoDB</span></p>
        <p className='flex items-center px-5  justify-center gap-2 font text-[20px]'><FaGithub /> <span className='pt-1  text-[14px]'>Github</span></p>

      </Marquee>
    </div>
  )
}
