import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../icon.png"

const NavBar = () => {
  return (
    <div>
      
      <div className=' shadow-2xl text-[#95a1be] flex items-center justify-between bg-[#0a192f] px-[70px] h-[80px]'>

        <Link className='cursor-pointer uppercase  active:translate-x-0.5 active:translate-y-0.5 hover:shadow-[0.5rem_0.5rem_#F44336,-0.5rem_-0.5rem_#00BCD4] transition' to={"/"}>
           <img className=' hover:scale-110 duration-300 hover:shadow-white ' width={70}  src={logo} alt="logo" /> 
        </Link>

        <div className=' ff text-[#95a1be] flex gap-5'>
            
            <a href={"#about"}> <span className=' text-[#5ff2d0]'>01. </span> About </a>
            <a href={"#experience"}> <span className=' text-[#5ff2d0]'>02. </span> Experience </a>
            <a href={"#work"}> <span className=' text-[#5ff2d0]'>03. </span> Work </a>
            <a href={"#contact"}> <span className=' text-[#5ff2d0]'>04. </span> Contact </a>
            

        </div>
            <button className=" ff  font-bold text-[18px]  relative hover:text-[#0c4537] py-2 px-6 after:absolute after:h-1 after:hover:h-[200%] transition-all duration-500 hover:transition-all hover:duration-500 after:transition-all after:duration-500 after:hover:transition-all after:hover:duration-500 overflow-hidden z-20 after:z-[-20] after:bg-[#abd373] after:rounded-t-full after:w-full after:bottom-0 after:left-0 text-[#95a1be] ">
                <span className=''>
                    Resume 
                </span>
            </button>
      </div>

    </div>
  )
}

export default NavBar
