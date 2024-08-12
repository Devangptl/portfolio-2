import React, { useState } from "react";
// import logo from "../utils/icon.png";
import resume from "../utils/Resume.pdf";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  const handlemenu = () => {
    setOpen(!open);
  };

  return (
    <div className="fixed  z-50 w-full bg-[#0a192f] shadow-2xl md:bg-opacity-90  ">
      <div data-aos="fade-down" className="  text-[#95a1be] flex items-center justify-between  px-[20px] md:px-[70px]  h-[60px] md:h-[80px]">
        <a href={"/#"} className=" group">
          {/* <img
            className=" w-8 md:w-16  rounded-bl-[50px]  hover:scale-110 duration-300 hover:shadow-white "
            // width={60}
            src={logo}
            alt="logo"
          /> */}
          <div className='  font text-[#5ff2d0] duration-300 group-hover:text-[#abd373] text-[20px] underline decoration-[#abd373] group-hover:decoration-[#5ff2d0]  underline-offset-4'>
                    Devan<span className=' text-[#abd373] duration-300 group-hover:text-[#5ff2d0]'>g</span>
                </div>
        </a>

        <label className="fixed right-0 px-5  md:hidden hamburger">
          <input onClick={handlemenu} type="checkbox" />
          <svg viewBox="0 0 32 32">
            <path
              className="line line-top-bottom"
              d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
            ></path>
            <path className="line" d="M7 16 27 16"></path>
          </svg>
        </label>

        {
          <div
            className={
              open
                ? "fixed   bg-opacity-75 bg-[]  md:hidden right-0 h-screen top-[100%] w-full  order-r border-r-[#0a192f] ease-in-out duration-700"
                : "ease-in-out w-[100%]   h-screen   border-r-[#0a192f]  duration-700 fixed top-[100%] bottom-0  right-[-100%]"
            }
          >
            <div className="">
              
            
            <div className=" font bg-opacity-75 h-screen border border-white m-[50px]    text-[20px]  bg-[#0a192f] flex flex-col justify-center items-center   gap-4  ">
              <a
                
                href={"#about"}
                className=" hover:text-[#5ff2d0] duration-200"
              >
                {" "}
                <span className=" text-[#5ff2d0]">01. </span> About{" "}
              </a>
              <a
                
                href={"#experience"}
                className="hover:text-[#5ff2d0] duration-200"
              >
                {" "}
                <span className=" text-[#5ff2d0]">02. </span> Experience{" "}
              </a>
              <a
                
                href={"#work"}
                className="hover:text-[#5ff2d0] duration-200"
              >
                {" "}
                <span className=" text-[#5ff2d0]">03. </span> Work{" "}
              </a>
              <a
                
                href={"#contact"}
                className="hover:text-[#5ff2d0] duration-200"
              >
                {" "}
                <span className=" text-[#5ff2d0]">04. </span> Contact{" "}
              </a>
              
            </div>
            </div>
          </div>
        }

        <div className=" hidden  font text-[14px]   text-[#95a1be] md:flex gap-5">
          <a href={"#about"} className="hover:text-[#5ff2d0]  duration-200">
            {" "}
            <span className=" text-[#5ff2d0]">01. </span> About{" "}
          </a>
          <a href={"#experience"} className="hover:text-[#5ff2d0] duration-200">
            {" "}
            <span className=" text-[#5ff2d0]">02. </span> Experience{" "}
          </a>
          <a href={"#work"} className="hover:text-[#5ff2d0] duration-200">
            {" "}
            <span className=" text-[#5ff2d0]">03. </span> Work{" "}
          </a>
          <a href={"#contact"} className="hover:text-[#5ff2d0] duration-200">
            {" "}
            <span className=" text-[#5ff2d0]">04. </span> Contact{" "}
          </a>
        </div>
        <Link
          to={resume}
          target="_blank"
          className=" hidden md:flex ff  font-bold text-[18px]  relative hover:text-[#0c4537] py-2 px-6 after:absolute after:h-1 after:hover:h-[200%] transition-all duration-500 hover:transition-all hover:duration-500 after:transition-all after:duration-500 after:hover:transition-all after:hover:duration-500 overflow-hidden z-20 after:z-[-20] after:bg-[#abd373] after:rounded-t-full after:w-full after:bottom-0 after:left-0 text-[#95a1be] "
        >
          <span className="">Resume</span>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
