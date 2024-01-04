import React from "react";
import nodeBackend from "../utils/nodeBackend.png";
import dsa from "../utils/dsa.png";
import fitness from "../utils/fitness.png";
import inotebook from "../utils/inotebook.png";
import newsapp from "../utils/newsapp.png";
import textEditor from "../utils/textEditor.png";
import { Link } from "react-router-dom";
import { FiGithub } from "react-icons/fi";
import { LuExternalLink } from "react-icons/lu";

const OtherWork = () => {
  return (
    <div>
      <div className="bg-[#0a192f] px-[15%] pt-[8%] h-full">
        <h1 className=" text-[25px] text-center text-[#ccd6f6] font-bold">
          Other Noteworthy Projects
        </h1>

        <div className="  grid mt-[8%]  grid-cols-3 ">
          <div class=" hover:-translate-y-2 duration-300  mx-3 my-6 relative flex w-80 flex-col rounded-xl bg-[#112240] bg-clip-border text-gray-700 shadow-md">
            <div class="relative hover:-translate-y-2 duration-500 mx-4 -mt-6  overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border  shadow-2xl ">
              <Link to={""}>
                <img
                  className=" blur-[0.9px] duration-500 hover:blur-none "
                  src={nodeBackend}
                  alt=""
                />
              </Link>
            </div>
            <div class="p-6">
              <h5 class="mb-2 text-[#ccd6f6] block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                Node Backend - youtube
              </h5>
              <p class=" text-[#9ba6c5] block font-sans text-base font-light  antialiased">
                I've leveraged the power of Node to create a dynamic backend
              </p>
              <div class="ff text-[#7e8baa] mt-2 flex gap-4 text-[12px]">
                {/* <p>Node.Js</p>  */}
                <p>MongoDB</p>
                <p>Cloudinary</p>
                <p>Postman</p>
                <p>Data Modaling</p>
              </div>
            </div>
            <div class=" text-[#a1acca] text-[20px]  flex justify-center gap-6 p-6 pt-0">
              <Link
                target="_blank"
                className="hover:text-[#5ff2d0]"
                to="https://github.com/Devangptl/node-Backend"
              >
                <FiGithub />
              </Link>

              <Link
                target="_blank"
                className="hover:text-[#5ff2d0]"
                to="https://github.com/Devangptl/node-Backend"
              >
                <LuExternalLink />
              </Link>
            </div>
          </div>

          <div class=" hover:-translate-y-2 duration-300  mx-3 my-6 relative flex w-80 flex-col rounded-xl bg-[#112240] bg-clip-border text-gray-700 shadow-md">
            <div class="relative hover:-translate-y-2 duration-500 mx-4 -mt-6  overflow-hidden rounded-xl  shadow-2xl ">
              <Link to={""}>
                <img
                  className="blur-[0.9px] duration-500 hover:blur-none"
                  src={dsa}
                  alt="dsa"
                />
              </Link>
            </div>
            <div class="p-6">
              <h5 class="mb-2 text-[#ccd6f6] block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                Data Structures & Algorithms
              </h5>
              <p class=" text-[#9ba6c5] block font-sans text-base font-light  antialiased">
                I've strong the fundamentals of Data Structures and Algorithms
                using Java with Apna collage.
              </p>
              <div class="ff text-[#7e8baa] mt-2 flex gap-4 text-[12px]">
                <p>Java</p>
                <p>Apna collage</p>
                <p>Vs Code</p>
              </div>
            </div>
            <div class=" text-[#a1acca] text-[20px]  flex justify-center gap-6 p-6 pt-0">
              <Link
                target="_blank"
                className="hover:text-[#5ff2d0]"
                to="https://github.com/Devangptl/DSA"
              >
                <FiGithub />
              </Link>

              <Link
                target="_blank"
                className="hover:text-[#5ff2d0]"
                to="https://github.com/Devangptl/DSA"
              >
                <LuExternalLink />
              </Link>
            </div>
          </div>

          <div class=" hover:-translate-y-2 duration-300  mx-3 my-6 relative flex w-80 flex-col rounded-xl bg-[#112240] bg-clip-border text-gray-700 shadow-md">
            <div class="relative hover:-translate-y-2 duration-500 mx-4 -mt-6  overflow-hidden rounded-xl shadow-2xl ">
              <Link to={""}>
                <img
                  className="blur-[0.9px] duration-500 hover:blur-none"
                  src={textEditor}
                  alt=""
                />
              </Link>
            </div>
            <div class="p-6">
              <h5 class="mb-2 text-[#ccd6f6] block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                Text Editor
              </h5>
              <p class=" text-[#9ba6c5] block font-sans text-base font-light  antialiased">
                In this project, I've engineered a sophisticated yet
                user-friendly text editor using React.js
              </p>
              <div class="ff text-[#7e8baa] mt-2 flex gap-4 text-[12px]">
                <p>React.Js</p>
                <p>Vs code</p>
                <p>react-route-dom</p>
              </div>
            </div>
            <div class=" text-[#a1acca] text-[20px]  flex justify-center gap-6 p-6 pt-0">
              <Link
                target="_blank"
                className="hover:text-[#5ff2d0]"
                to="https://github.com/Devangptl/TextEditer"
              >
                <FiGithub />
              </Link>

              <Link
                target="_blank"
                className="hover:text-[#5ff2d0]"
                to="https://github.com/Devangptl/TextEditer"
              >
                <LuExternalLink />
              </Link>
            </div>
          </div>

          <div class=" hover:-translate-y-2 duration-300  mx-3 my-6 relative flex w-80 flex-col rounded-xl bg-[#112240] bg-clip-border text-gray-700 shadow-md">
            <div class="relative hover:-translate-y-2 duration-500 mx-4 -mt-6  overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border  shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600">
              <Link to={""}>
                <img
                  className="blur-[0.9px] duration-500 hover:blur-none"
                  src={fitness}
                  alt=""
                />
              </Link>
            </div>
            <div class="p-6">
              <h5 class="mb-2 text-[#ccd6f6] block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                Fitness App
              </h5>
              <p class=" text-[#9ba6c5] block font-sans text-base font-light  antialiased">
                Leveraging the power of APIs to bring real-time data, motivation
                to your wellness journey.
              </p>
              <div class="ff text-[#7e8baa] mt-2 flex gap-4 text-[12px]">
                <p>React.Js</p>
                <p>Fitness Api</p>
                <p>Axios</p>
              </div>
            </div>
            <div class=" text-[#a1acca] text-[20px]  flex justify-center gap-6 p-6 pt-0">
              <Link
                target="_blank"
                className="hover:text-[#5ff2d0]"
                to="https://github.com/Devangptl/Fitness-App"
              >
                <FiGithub />
              </Link>

              <Link
                target="_blank"
                className="hover:text-[#5ff2d0]"
                to="https://fitnesslearn.netlify.app/"
              >
                <LuExternalLink />
              </Link>
            </div>
          </div>

          <div class=" hover:-translate-y-2 duration-300  mx-3 my-6 relative flex w-80 flex-col rounded-xl bg-[#112240] bg-clip-border text-gray-700 shadow-md">
            <div class="relative hover:-translate-y-2 duration-500 mx-4 -mt-6  overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border  shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600">
              <Link to={""}>
                <img
                  className="blur-[0.9px] duration-500 hover:blur-none"
                  src={inotebook}
                  alt=""
                />
              </Link>
            </div>
            <div class="p-6">
              <h5 class="mb-2 text-[#ccd6f6] block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                iNoteBook
              </h5>
              <p class=" text-[#9ba6c5] block font-sans text-base font-light  antialiased">
                iNotebook is not just a digital notepad; it's your personal
                haven for capturing thoughts, organizing ideas.
              </p>
              <div class="ff text-[#7e8baa] mt-2 flex gap-4 text-[12px]">
                <p>React.Js</p>
                <p>MongoDB</p>
                <p>Express.Js</p>
              </div>
            </div>
            <div class=" text-[#a1acca] text-[20px]  flex justify-center gap-6 p-6 pt-0">
              <Link
                className="hover:text-[#5ff2d0]"
                to="https://github.com/Devangptl/inotebookfrontend"
              >
                <FiGithub />
              </Link>

              <Link
                className="hover:text-[#5ff2d0]"
                to="https://notebookcloud.netlify.app/"
              >
                <LuExternalLink />
              </Link>
            </div>
          </div>

          <div class=" hover:-translate-y-2 duration-300  mx-3 my-6 relative flex w-80 flex-col rounded-xl bg-[#112240] bg-clip-border text-gray-700 shadow-md">
            <div class="relative hover:-translate-y-2 duration-500 mx-4 -mt-6  overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border  shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600">
              <Link to={""}>
                <img
                  className="blur-[0.9px] duration-500 hover:blur-none"
                  src={newsapp}
                  alt="newsapp"
                />
              </Link>
            </div>
            <div class="p-6">
              <h5 class="mb-2 text-[#ccd6f6] block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                News App
              </h5>
              <p class=" text-[#9ba6c5] block font-sans text-base font-light  antialiased">
                it's real time experience the latest headlines, trends, and stories catered to your interests.
              </p>
              <div class="ff text-[#7e8baa] mt-2 flex gap-4 text-[12px]">
                <p>React.Js</p>
                <p>News Api</p>
                <p>Vs code</p>
              </div>
            </div>
            <div class=" text-[#a1acca] text-[20px]  flex justify-center gap-6 p-6 pt-0">
              <Link
                target="_blank"
                className="hover:text-[#5ff2d0]"
                to="https://github.com/Devangptl/NewsApp"
              >
                <FiGithub />
              </Link>

              <Link
                target="_blank"
                className="hover:text-[#5ff2d0]"
                to="https://github.com/Devangptl/NewsApp"
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

export default OtherWork;
