import React from "react";
import work1 from "../utils/work-1.png";
import work2 from "../utils/work-2.png";
import work3 from "../utils/work-3.png";
import work4 from "../utils/ecommerce.png";
import aiCourse from "../utils/aicourse.png"
import { Link } from "react-router-dom";
import { FiGithub } from "react-icons/fi";
import { LuExternalLink } from "react-icons/lu";

const Work = () => {

  const workData = [
    {
      img: aiCourse,
      title: "AI Course Generator",
      description: "A web application that leverages Gemini AI for dynamic course creation. Built with Next.js for seamless server-side rendering, Clerk for secure user authentication, ShadCN UI for modern and accessible design, and Tailwind CSS for responsive styling.",
      tags: [
        "Next.Js",
        "Gemini AI",
        "Tailwind",
        "ShadCN",
        "Clerk"
      ],
      gitLink: "https://github.com/Devangptl/ai-course-generator.git",
      webURL: "https://ai-course-generator-devang.vercel.app/",
      latest: true,
      left: true
    },
    {
      img: work1,
      title: "Royalty Park",
      description: "A minimal, dark theme for VS Code, ReactJs , Pixabay Api , and more. Available on Visual Studio npm. Adding the search functionality.",
      tags: [
        "VScode",
        "React.js",
        "Tailwind",
        "Api"
      ],
      gitLink: "https://github.com/Devangptl/RoyalityPark",
      webURL: "https://royaltypark.netlify.app/",
      latest: false,
      left: false
    },
    {
      img: work2,
      title: "YouTube Clone",
      description: "A minimal, dark theme for VS Code, ReactJs , Pixabay Api , and more. Available on Visual Studio npm. Adding the search functionality.",
      tags: [
        "VScode",
        "React.js",
        "Tailwind",
        "YouTube Api"
      ],
      gitLink: "https://github.com/Devangptl/YouTube-Clone",
      webURL: "https://youtube-devang.netlify.app/",
      latest: false,
      left: true
    },
    {
      img: work3,
      title: "FlavorVerse",
      description: "I embarked on a culinary journey in the digital space by crafting a Recipe App using React.js. This project allows users to discover, search, and step by step recipe discription.",
      tags: [
        "VScode",
        "React.js",
        "Tailwind",
        "Recipe Api"
      ],
      gitLink: "https://github.com/Devangptl/Recipe-app",
      webURL: "https://flavourverse.netlify.app/",
      latest: false,
      left: false
    },
    {
      img: work4,
      title: "Online Electronics Shopping",
      description: "This eCommerce project leverages a modern tech stack comprising React, Tailwind CSS, Strapi, and Stripe to deliver a seamless and dynamic online shopping experience.",
      tags: [
        "React.js",
        "Redux",
        "Strapi",
        "Stripe",
        "Tailwind",
        "Recipe Api"
      ],
      gitLink: "https://github.com/Devangptl/ecommerce.git",
      webURL: "https://gadaelectronic.netlify.app/",
      latest: true,
      left: true
    },
  ]

  console.log(workData[0].tags);
  

  return (
    <div
      id="work"
      className="  pt-10 mt-[-5px]   lg:pt-4 flex flex-col  justify-center px-7 md:px-[12%] lg:px-[18%] bg-[#0a192f]"
    >
      <div>
        <div className="">
          <h1 className=" text-[20px] md:text-[24px] lg:text-[25px] text-[#ccd6f6] font-bold">
            <span className="ff font-thin text-[#5ff2d0]">03. </span>
            Some Things I’ve Built
          </h1>
        </div>

        {
          workData.map((item, index) => (

            item.left ? <div key={index} className=" mt-[15%] pb-3  lg:relative   lg:grid grid-cols-3 ">
              <div data-aos="zoom-in" className=" lg:w-[95%]  col-span-2 ">
                <img
                  className=" cursor-pointer lg:blur-[0.9px] lg:hover:-translate-x-10  hover:blur-none rounded-md duration-500  "
                  src={item.img}
                  alt="work1"
                />
              </div>
              <div data-aos="fade-up" className=" lg:absolute lg:ml-[47%] gap-7 flex flex-col">
                <div className="mt-3 lg:text-end lg:mt-2 ">
                  <p className="ff text-[13px] md:text-[15px] lg:text-[16px] text-[#5ff2d0]">
                    {/* Featured Project */}
                    {item.latest && "Latest Project"}
                  </p>
                  <h1 className=" text-[#ccd6f6]  text-[20px] md:text-[24px] lg:text-[24px] font-bold">
                    {item.title}
                  </h1>
                </div>

                <div className="  lg:mt-0 mt-[-20px]  shadow-2xl shadow-[#191919] rounded-md bg-[#112240]">
                  <p className=" font lg:pr-5 pr-2 pl-2 lg:pl-12 py-2 lg:py-4 md:text-[14px] lg:text-[14px] text-[12px] text-[#8d99b7] lg:text-end ">
                    {item.description}
                  </p>
                </div>

                <div className=" font lg:text-[14px] md:text-[14px] text-[12px] lg:mt-0 mt-[-20px] text-[#8d99b7]  lg:justify-end  flex flex-row gap-5">
                  {
                    item.tags.map((tag, index) => (
                      <p key={index}>{tag}</p>
                    ))
                  }
                </div>

                <div className=" lg:mt-[-5px] mt-[-20px] text-[#ccd6f6] text-[17px] md:text-[19px] lg:text-[20px] flex gap-7 lg:justify-end">
                  <Link
                    target="_blank"
                    className="hover:text-[#5ff2d0]"
                    to={item.gitLink}
                  >
                    <FiGithub />
                  </Link>
                  <Link
                    target="_blank"
                    className="hover:text-[#5ff2d0]"
                    to={item.webURL}
                  >
                    <LuExternalLink />
                  </Link>
                </div>
              </div>
            </div>
              :
              <div className="  mt-[15%]  mb-8  lg:relative   lg:grid grid-cols-3 ">
                <div data-aos="zoom-in" className=" lg:w-[95%] lg:ml-[54%]  col-span-2 ">
                  <img
                    className=" cursor-pointer lg:blur-[0.9px] lg:hover:translate-x-10  hover:blur-none rounded-md duration-500    "
                    src={item.img}
                    alt="work"
                  />
                </div>
                <div data-aos="fade-up" className=" lg:absolute lg:mr-[47%]   gap-7 flex flex-col">
                  <div className="mt-3 lg:mt-0 text-start">
                    <p className="ff text-[13px] lg:text-[16px]     text-[#5ff2d0]">{item.latest && "Latest Project"}</p>
                    <h1 className=" text-[#ccd6f6] text-[20px] md:text-[24px] lg:text-[24px] font-bold">
                      {item.title}
                    </h1>
                  </div>

                  <div className=" lg:mt-0 mt-[-20px]  shadow-2xl shadow-[#191919] rounded-md bg-[#112240]">
                    <p className=" font lg:pl-5 pl-2 pr-2 lg:pr-12 py-2 lg:py-4 md:text-[14px] lg:text-[14px] text-[12px] text-[#8d99b7] text-start ">
                      {item.description}
                    </p>
                  </div>

                  <div className="font lg:text-[14px] text-[12px] lg:mt-0 mt-[-20px] md:text-[14px] text-[#8d99b7] ff justify-start  flex flex-row gap-4">
                  {
                    item.tags.map((tag, index) => (
                      <p key={index}>{tag}</p>
                    ))
                  }
                    {/* <p>React.js</p>
                    <p>Redux</p>
                    <p>Strapi</p>
                    <p>Stripe</p>
                    <p>Tailwind</p> */}
                  </div>

                  <div className=" lg:mt-[-5px] mt-[-20px] md:text-[19px]  text-[#ccd6f6] text-[17px] lg:text-[20px]  flex gap-7 justify-start">
                    <Link
                      target="_blank"
                      className="hover:text-[#5ff2d0]"
                      to={item.gitLink}
                    >
                      <FiGithub />
                    </Link>
                    <Link
                      target="_blank"
                      className="hover:text-[#5ff2d0]"
                      to={item.webURL}
                    >
                      <LuExternalLink />
                    </Link>
                  </div>
                </div>
              </div>

          ))
        }
      </div>
    </div>
  );
};

export default Work;
