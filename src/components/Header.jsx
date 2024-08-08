import React from 'react'
import resume from "../utils/Resume.pdf";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div  className=' h-screen md:px-[15%] px-7  py-[5%] bg-[#0a192f] ' >
      <div className=' pt-20 '>
        <h1 className=' text-[#5ff2d0] ff text-[13px] md:text-[20px]' >Hi, my name is</h1>

        <h1 className=' mt-2 text-[#ccd6f6] text-[27px] md:text-[50px] font-black '>Devang Patel.</h1>

        <h1 className=' text-[#8892b0] md:text-[50px] text-[27px] font-black '>I build things for the web.</h1>

        <p className=' md:py-3 text-[15px] text-justify md:text-[18px] text-[#7a85a2]  md:w-[60%] ' >Aspiring for a challenging career in Software and <span className='text-[#5ff2d0]'>MERN</span> Development as to use my learned skill and experience for best results .</p>

        <Link
          to={resume}
          target="_blank"
          className=" hidden md:flex ff  font-bold text-[18px]  relative hover:text-[#0c4537] py-2 px-6 after:absolute after:h-1 after:hover:h-[200%] transition-all duration-500 hover:transition-all hover:duration-500 after:transition-all after:duration-500 after:hover:transition-all after:hover:duration-500 overflow-hidden z-20 after:z-[-20] after:bg-[#abd373] after:rounded-t-full after:w-[110px] after:bottom-0 after:left-0 text-[#95a1be] "
        >
          <span className="">Resume</span>
        </Link>
      </div>
    </div>
  )
}

export default Header
