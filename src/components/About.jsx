import React from "react";
import img from "../utils/img.png";

const About = () => {
  return (
    <div id="about" className=" mt-[-200px] md:mt-[0px] flex flex-col justify-center h-screen md:px-[20%] px-7   bg-[#0a192f] ">
      <div className=" ">
        <h1 className=" text-[20px] md:text-[25px] text-[#ccd6f6] font-bold">

          <span className="ff font-thin text-[#5ff2d0]">01. </span>
          About Me
        </h1>
      </div>

      <div className=" py-6 md:grid grid-cols-3 gap-4">
        <div className="col-span-2  text-[#8892b0] flex flex-col gap-3 text-[15px] md:text-[18px] ">
          <p className=" text-justify">
            Hello! My name is Devang and I enjoy creating things that live on
            the internet. My interest in web development started back in 2023
            when I decided to try building website — taught me a lot about REACTJS &
            NODEJS
          </p>
          <p className=" text-justify">
            Passionate and skilled web developer with a strong background in building dynamic and responsive web
            applications using a modern tech stack. Proficient in JavaScript, ReactJS, MongoDB, HTML5, NextJS, CSS,
            Tailwind CSS, and NodeJS. Adept at rapidly learning new technologies and adapting to diverse
            team environments to deliver high-quality projects
          </p>
  

          <div className=" text-[#5ff2d0] text-[12px] md:text-[15px] ff px-4 py-3 flex  gap-7">
            <ul className=" list-disc">
              <li>
                <span className="text-[#8892b0]">HTML</span>{" "}
              </li>
              <li>
                <span className="text-[#8892b0]">CSS</span>{" "}
              </li>
             
              <li>
                <span className="text-[#8892b0]">JavaScript</span>{" "}
              </li>
              <li>
                <span className="text-[#8892b0]">Tailwind Css</span>{" "}
              </li>
            </ul>
            <ul className=" list-disc ">
              
              <li>
                <span className="text-[#8892b0]">ReactJS</span>{" "}
              </li>
              <li>
                <span className="text-[#8892b0]">NodeJS</span>{" "}
              </li>
              <li>
                <span className="text-[#8892b0]">MongoDB</span>{" "}
              </li>
              <li>
                <span className="text-[#8892b0]">Github</span>{" "}
              </li>
              
            </ul>
          </div>
        </div>

        {/* grid 2 */}

        <div className=" imgCard m-auto mt-[-20px] text-gray-300 cursor-pointer hover:text-[black]  duration-500   border-b-2 border-[#5ff2d0] rounded-lg overflow-hidden ">
          <div className="imgShadow">
            <img className="img" src={img} alt="img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
