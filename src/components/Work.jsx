import React from "react";
import work1 from "../work-1.png";

const Work = () => {
  return (
    <div id="work" className="  px-[18%] h-screen bg-[#0a192f]">
        <div>

        
      <div className=" ">
        <h1 className="  text-[25px] text-[#ccd6f6] font-bold">
          <span className="ff font-thin text-[#5ff2d0]">03. </span>
          Some Things I’ve Built
        </h1>
      </div>

      <div className=" mt-9  relative   grid grid-cols-3 ">
        <div className=" w-[95%]  col-span-2 ">
          <img
            className=" cursor-pointer rounded-md opacity-55 hover:opacity-100 duration-300   "
            src={work1}
            alt=""
          />
        </div>
        <div className=" absolute ml-[47%]   gap-10 flex flex-col">
          <div className="text-end">
            <p className="ff text-[#5ff2d0]">Featured Project</p>
            <h1 className=" text-[#ccd6f6] text-[24px] font-bold">Halcyon Theme</h1>
          </div>

          <div className="  shadow-2xl shadow-[#191919] rounded-md bg-[#112240]">
            <p className="pr-5 pl-12 py-4 text-[#8d99b7] text-end ">
              A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm,
              and more. Available on Visual Studio Marketplace, Package Control,
              Atom Package Manager, and npm.
            </p>
          </div>

            <div className=" text-[#8d99b7] ff justify-end  flex flex-row gap-5">

                <p>VScode</p>
                <p>Sublime</p>
                <p>Atom</p>
                <p>iTerm2</p>
                <p>Hyper</p>



            </div>

        </div>
      </div>
      </div>
    </div>
  );
};

export default Work;
