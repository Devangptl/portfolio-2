import React from 'react'
import { Link } from 'react-router-dom'
import { FiGithub } from "react-icons/fi";
import { SlSocialLinkedin } from "react-icons/sl";
import { FiInstagram } from "react-icons/fi";

const Social = () => {
  return (
    <div className=' fixed'>
        <div className='  w-screen h-screen flex justify-between px-5 text-[24px] items-end '>


        <div className=' line flex flex-col  gap-6  text-[#ccd6f6]'>
            <Link to={"https://www.linkedin.com/in/devangmakani/"} className=' hover:text-[#5ff2d0] duration-200'><SlSocialLinkedin /></Link>
            <Link to={"https://github.com/Devangptl"} className=' hover:text-[#5ff2d0] duration-200'><FiGithub /></Link>
            <Link to={"https://www.instagram.com/devang_.03/"} className=' hover:text-[#5ff2d0] duration-200'><FiInstagram /></Link>
          
        </div>

        <Link to={"mailto:devangmpatel51@gmail.com"} className=' flex gap-4 line emailLine  hover:text-[#5ff2d0] duration-300 ff  text-[18px]   text-white'>
            <div>devangmpatel51@gmail.com</div>
        </Link>
        </div>
      
    </div>
  )
}

export default Social
