import React from "react";
import img from "../utils/img.png";

const About = () => {
  return (
    <div id="about" className=" lg:pt-0 pt-[100px] mt-[-4px] flex flex-col justify-center md:px-[12%]   lg:px-[15%] px-7   bg-[#0a192f] ">
      <div className="">
        <h1 className=" text-[20px] md:text-[25px] lg:text-[25px] text-[#ccd6f6] font-bold">

          <span className="ff font-thin text-[#5ff2d0]">01. </span>
          About Me
        </h1>
      </div>

      <div className="grid-cols-3 py-6 lg:gap-[50px] lg:grid">
        <div className="col-span-2 font text-[#8892b0] flex flex-col gap-3 text-[12px] md:text-[15px] lg:text-[15px] ">
          <p data-aos="fade-up"
      className="text-justify ">
            Hello! My name is Devang and I enjoy creating things that live on
            the internet. My interest in web development started back in 2023
            when I decided to try building website — taught me a lot about REACTJS &
            NODEJS
          </p>
          <p data-aos="fade-up" className="text-justify ">
            Passionate and skilled web developer with a strong background in building dynamic and responsive web
            applications using a modern tech stack. Proficient in JavaScript, ReactJS, MongoDB, HTML5, NextJS, CSS,
            Tailwind CSS, and NodeJS. Adept at rapidly learning new technologies and adapting to diverse
            team environments to deliver high-quality projects
          </p>
  

          <div data-aos="fade-up" className=" text-[#5ff2d0] text-[12px] md:text-[15px] lg:text-[15px] ff px-4 py-3 flex  gap-7">
            <ul className="list-disc ">
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
            <ul className="list-disc ">
              
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

        <div data-aos="fade-right"  data-aos-easing="linear" className="  m-auto   lg:mt-[-20px] text-gray-300 cursor-pointer hover:text-[black]  duration-500   border-b-2 border-[#5ff2d0] rounded-lg overflow-hidden ">
          <div className="flex items-center justify-center imgShadow ">
            <img width={400} height={200} className="img mt-[-130px] lg:mt-0 " src={img} alt="img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
