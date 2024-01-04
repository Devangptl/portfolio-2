import React from 'react'
import logo from "../utils/icon.png"
import resume from "../utils/Resume.pdf"
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
      
      <div className=' shadow-2xl fixed w-full z-50 text-[#95a1be] flex items-center justify-between bg-[#0a192f] px-[70px] h-[80px]'>

        <a href={'/#'} className='  ' >
           <img className=' rounded-bl-[50px]  hover:scale-110 duration-300 hover:shadow-white ' width={60}  src={logo} alt="logo" /> 
        </a>

        <div className=' ff text-[#95a1be] flex gap-5'>
            
            <a href={"#about"} className='hover:text-[#5ff2d0] duration-200'> <span className=' text-[#5ff2d0]'>01. </span> About </a>
            <a href={"#experience"} className='hover:text-[#5ff2d0] duration-200'> <span className=' text-[#5ff2d0]'>02. </span> Experience </a>
            <a href={"#work"} className='hover:text-[#5ff2d0] duration-200'> <span className=' text-[#5ff2d0]'>03. </span> Work </a>
            <a href={"#contact"} className='hover:text-[#5ff2d0] duration-200'> <span className=' text-[#5ff2d0]'>04. </span> Contact </a>
            

        </div>
            <Link to={resume} target='_blank' className=" ff  font-bold text-[18px]  relative hover:text-[#0c4537] py-2 px-6 after:absolute after:h-1 after:hover:h-[200%] transition-all duration-500 hover:transition-all hover:duration-500 after:transition-all after:duration-500 after:hover:transition-all after:hover:duration-500 overflow-hidden z-20 after:z-[-20] after:bg-[#abd373] after:rounded-t-full after:w-full after:bottom-0 after:left-0 text-[#95a1be] ">
                <span className=''>
                    Resume 
                </span>
            </Link>
      </div>

    </div>
  )
}

export default NavBar
