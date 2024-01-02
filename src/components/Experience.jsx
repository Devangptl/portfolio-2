import React from "react";
import { Link } from "react-router-dom";
import Intership from "./Intership";

const Experience = () => {
  return (
    <div id="experience" className=" px-[28%] h-screen bg-[#0a192f]">

      <div className=" ">
        <h1 className=" text-[25px] text-[#ccd6f6] font-bold">
          <span className="ff font-thin text-[#5ff2d0]">02. </span>
          Where I’ve Worked
        </h1>

        <div className="flex gap-5 py-3 text-white  px-4">
            <Link className="hover:underline-offset-8 hover:underline hover:ease-in hover:duration-700" to={"/intership"}> Intership </Link>
            <Link to={"/intership"}> Intership </Link>
            <Link to={"/intership"}> Intership </Link>
            <Link to={"/intership"}> Intership </Link>
        </div>

      </div>

    </div>
  );
};

export default Experience;
