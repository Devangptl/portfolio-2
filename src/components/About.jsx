import React from "react";
import img from "../utils/img.png";

const About = () => {
  return (
    <div id="about" className=" mt-[-4px] flex flex-col justify-center md:px-[12%] lg:px-[15%] px-7 bg-[#0a192f] ">
      <div className="">
        <h1 className=" text-[20px] md:text-[25px] lg:text-[25px] text-[#ccd6f6] font-bold">
          <span className="ff font-thin text-[#5ff2d0]">01. </span>
          About Me
        </h1>
      </div>

      <div className=" pt-6 font text-[#8892b0] md:flex gap-20 text-[12px] md:text-[15px] lg:text-[15px] ">

        <div className="flex flex-col mb-5 items-center gap-5">
          <p data-aos="fade-up"
            className="text-justify">
            Hello! My name is Devang and I enjoy creating things that live on
            the internet. My interest in web development started back in 2023
            when I decided to try building website — taught me a lot about REACTJS &
            NODEJS.
          </p>
          <p data-aos="fade-up" className="text-justify ">
            Passionate and skilled web developer with a strong background in building dynamic and responsive web
            applications using a modern tech stack. Proficient in JavaScript, ReactJS, MongoDB, HTML5, NextJS, CSS,
            Tailwind CSS, and NodeJS. Adept at rapidly learning new technologies and adapting to diverse
            team environments to deliver high-quality projects
          </p>
        </div>

        <div data-aos="fade-up" className=" text-[#5ff2d0] text-[12px] md:text-[15px] lg:text-[15px] ff px-4 flex gap-7">
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
    </div>
  );
};

export default About;
