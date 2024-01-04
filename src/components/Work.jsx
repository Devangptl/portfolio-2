import React from "react";
import work1 from "../utils/work-1.png";
import work2 from "../utils/work-2.png";
import work3 from "../utils/work-3.png";
import { Link } from "react-router-dom";
import { FiGithub } from "react-icons/fi";
import { LuExternalLink } from "react-icons/lu";

const Work = () => {
  return (
    <div
      id="work"
      className=" pt-4 flex flex-col justify-center  px-[18%] bg-[#0a192f]"
    >
      <div>
        <div className=" ">
          <h1 className="  text-[25px] text-[#ccd6f6] font-bold">
            <span className="ff font-thin text-[#5ff2d0]">03. </span>
            Some Things I’ve Built
          </h1>
        </div>

        {/* first work */}

        <div className=" mt-[7%]  relative   grid grid-cols-3 ">
          <div className=" w-[95%]  col-span-2 ">
            <img
              className=" cursor-pointer blur-[0.9px] hover:-translate-x-10  hover:blur-none rounded-md duration-500  "
              src={work1}
              alt=""
            />
          </div>
          <div className=" absolute ml-[47%]   gap-8 flex flex-col">
            <div className="text-end">
              <p className="ff text-[#5ff2d0]">
                {/* Featured Project */}
                Latest Project
              </p>
              <h1 className=" text-[#ccd6f6] text-[24px] font-bold">
                Royalty Park
              </h1>
            </div>

            <div className="  shadow-2xl shadow-[#191919] rounded-md bg-[#112240]">
              <p className="pr-5 pl-12 py-4 text-[#8d99b7] text-end ">
                A minimal, dark theme for VS Code, ReactJs , Pixabay Api , and
                more. Available on Visual Studio npm. Adding the search
                functionality.
              </p>
            </div>

            <div className=" text-[#8d99b7] ff justify-end  flex flex-row gap-5">
              <p>VScode</p>
              <p>React.js</p>
              <p>Api</p>
              <p>Tailwind</p>
            </div>

            <div className=" text-[#ccd6f6] text-[24px] flex gap-7 justify-end">
              <Link
                target="_blank"
                className="hover:text-[#5ff2d0]"
                to="https://github.com/Devangptl/RoyalityPark"
              >
                <FiGithub />
              </Link>
              <Link
                target="_blank"
                className="hover:text-[#5ff2d0]"
                to="https://royaltypark.netlify.app/"
              >
                <LuExternalLink />
              </Link>
            </div>
          </div>
        </div>

        {/* second work */}

        <div className="   mt-[15%]  relative   grid grid-cols-3 ">
          <div className=" w-[95%] ml-[54%]  col-span-2 ">
            <img
              className=" cursor-pointer blur-[0.9px] hover:translate-x-10  hover:blur-none rounded-md duration-500    "
              src={work2}
              alt="work2"
            />
          </div>
          <div className=" absolute mr-[47%]   gap-8 flex flex-col">
            <div className="text-start">
              <p className="ff text-[#5ff2d0]">Latest Project</p>
              <h1 className=" text-[#ccd6f6] text-[24px] font-bold">
                YouTube Clone
              </h1>
            </div>

            <div className="  shadow-2xl shadow-[#191919] rounded-md bg-[#112240]">
              <p className="pl-5 pr-12 py-4 text-[#8d99b7] text-start ">
                One of my recent endeavors involved building a YouTube clone
                using React.js. I recreated the core functionalities of YouTube,
                allowing users to browse videos, search for content, and watch
                their favorite clips.
              </p>
            </div>

            <div className=" text-[#8d99b7] ff justify-start  flex flex-row gap-4">
              <p>VScode</p>
              <p>React.js</p>
              <p>YouTube API</p>
              <p>Tailwind</p>
            </div>

            <div className=" text-[#ccd6f6] text-[24px] flex gap-7 justify-start">
              <Link
                target="_blank"
                className="hover:text-[#5ff2d0]"
                to="https://github.com/Devangptl/YouTube-Clone"
              >
                <FiGithub />
              </Link>
              <Link
                target="_blank"
                className="hover:text-[#5ff2d0]"
                to="https://youtube-devang.netlify.app/"
              >
                <LuExternalLink />
              </Link>
            </div>
          </div>
        </div>

        {/* third work */}

        <div className=" mt-[15%]  relative   grid grid-cols-3 ">
          <div className=" w-[95%]  col-span-2 ">
            <img
              className=" cursor-pointer blur-[0.9px] hover:-translate-x-10  hover:blur-none rounded-md duration-500   "
              src={work3}
              alt="work3"
            />
          </div>
          <div className=" absolute ml-[47%]   gap-8 flex flex-col">
            <div className="text-end">
              <p className="ff text-[#5ff2d0]">Featured Project</p>
              <h1 className=" text-[#ccd6f6] text-[24px] font-bold">
                FlavorVerse
              </h1>
            </div>

            <div className="  shadow-2xl shadow-[#191919] rounded-md bg-[#112240]">
              <p className="pr-5 pl-12 py-4 text-[#8d99b7] text-end ">
                I embarked on a culinary journey in the digital space
                by crafting a Recipe App using React.js. This project allows
                users to discover, search, and step by step recipe discription .
              </p>
            </div>

            <div className=" text-[#8d99b7] ff justify-end  flex flex-row gap-5">
              <p>VScode</p>
              <p>React.js</p>
              <p>Recipe API</p>
              <p>Tailwind</p>
            </div>

            <div className=" text-[#ccd6f6] text-[24px] flex gap-7 justify-end">
              <Link
                className="hover:text-[#5ff2d0]"
                to="https://github.com/Devangptl/Recipe-app"
              >
                <FiGithub />
              </Link>
              <Link
                className="hover:text-[#5ff2d0]"
                to="https://flavourverse.netlify.app/"
              >
                <LuExternalLink />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
