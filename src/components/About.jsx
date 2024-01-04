import React from "react";
import img from "../img.png";

const About = () => {
  return (
    <div id="about" className=" flex flex-col justify-center h-screen px-[20%]   bg-[#0a192f] ">
      <div className=" ">
        <h1 className=" text-[25px] text-[#ccd6f6] font-bold">
          
          <span className="ff font-thin text-[#5ff2d0]">01. </span>
           About Me
        </h1>
      </div>

      <div className=" py-6 grid grid-cols-3 gap-4">
        <div className="col-span-2  text-[#8892b0] flex flex-col gap-3 text-[18px] ">
          <p>
            Hello! My name is Devang and I enjoy creating things that live on
            the internet. My interest in web development started back in 2012
            when I decided to try editing custom Tumblr themes — turns out
            hacking together a custom reblog button taught me a lot about HTML &
            CSS!
          </p>
          <p>
            Fast-forward to today, and I’ve had the privilege of working at an
            advertising agency, a start-up, a huge corporation, and a
            student-led design studio. My main focus these days is building
            accessible, inclusive products and digital experiences at
            Upstatement for a variety of clients.
          </p>
          <p>
            I also recently launched a course that covers everything you need to
            build a web app with the Spotify API using Node & React.
          </p>
          <p>Here are a few technologies I’ve been working with recently:</p>

          <div className=" text-[#5ff2d0] text-[15px] ff px-4 py-3 flex  gap-7">
            <ul className=" list-disc">
              <li>
                <span className="text-[#8892b0]">JavaScript (ES6+)</span>{" "}
              </li>
              <li>
                <span className="text-[#8892b0]">TypeScript</span>{" "}
              </li>
              <li>
                <span className="text-[#8892b0]">React</span>{" "}
              </li>
            </ul>
            <ul className=" list-disc ">
              <li>
                <span className="text-[#8892b0]">Eleventy</span>{" "}
              </li>
              <li>
                <span className="text-[#8892b0]">Node.js</span>{" "}
              </li>
              <li>
                <span className="text-[#8892b0]">WordPress</span>{" "}
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
