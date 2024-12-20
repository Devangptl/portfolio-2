import React from 'react'
import resume from "../utils/Resume.pdf";
import { Link } from 'react-router-dom';
import img from "../utils/devang_1.png";


const Header = () => {
  return (
    <div className='  md:px-[15%] px-7 pt-[5%] bg-[#0a192f] ' >
      <div className='pt-20 text-center flex flex-col items-center justify-center '>
        <div className="m-auto lg:mt-[-20px cursor-pointer overflow-hidden rounded-full w-24 h-24 border drop-shadow-lg">
          <img className=" scale-125 mt-2 ml-0.5" width={100} height={100} src={img} alt="img" />
        </div>
        <h1 className='text-center text-[#5ff2d0] ff text-[13px] md:text-[14px] mt-2' >Hi, I am Deveng</h1>

        {/* <h1 className=' mt-2 text-[#ccd6f6] text-[27px] md:text-[50px] font-black '>Devang Patel</h1> */}

        <h1 className=' text-[#8892b0]   md:text-[50px] text-[27px] font-black '>I build things for the web.</h1>

        <p className=' md:py-3  py-2 font text-[12px] md:text-[15px] text-[#7a85a2]  md:w-[70%] ' >Aspiring for a challenging career in Software and <span className='text-[#5ff2d0]'>MERN</span> Development as to use my learned skill and experience for best results .</p>

        <Link
          to={resume}
          target="_blank"
          className="  flex items-center justify-center  ff w-[110px]  font-bold text-[18px]  relative hover:text-[#0c4537] py-2 px-6 after:absolute after:h-1 after:hover:h-[200%] transition-all duration-500 hover:transition-all hover:duration-500 after:transition-all after:duration-500 after:hover:transition-all after:hover:duration-500 overflow-hidden z-20 after:z-[-20] after:bg-[#abd373] after:rounded-t-full after:w-[110px] after:bottom-0 after:left-0 text-[#95a1be] "
        >
          <span className="">Resume</span>
        </Link>
      </div>

    </div>
  )
}

export default Header
