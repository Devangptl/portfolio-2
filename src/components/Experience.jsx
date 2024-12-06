import React from "react";

const Experience = () => {

  const experienceData = [
    {
      id: 1,
      title: "Intership - 1",
      company_name: "Grras Solutions Private Limited | Ahmedabad",
      description: "Frontend Development"
    },
    {
      id: 2,
      title: "Intership - 2 ( 6 Months )",
      company_name: "Maxgen Technologies Pvt.Ltd | Ahmedabad",
      description: "ReactJS Development"
    },
    {
      id: 3,
      title: "Present",
      company_name: "Treesha Infotech | Ahmedabad",
      description: "Front-end Developer"
    },
  ]

  return (
    <div id="experience" className=" lg:py-[100px] py-[70px] mt-[-4px] flex flex-col justify-center px-7 md:px-[12%] lg:px-[28%]  bg-[#0a192f]">

      <div className="">
        <h1 className=" text-[20px] md:text-[24px] lg:text-[25px] text-[#ccd6f6] font-bold">
          <span className="ff font-thin text-[#5ff2d0]">02. </span>
          Where I’ve Worked
        </h1>

        <div className="  text-[16px] md:text-[19px] lg:text-[20px] pl-9 lg:px-14 flex flex-col gap-5 pt-3 text-white ">
          {
            experienceData.map((item, index) => (
              <div key={index} data-aos="zoom-in" className=""  >
                <h1 className="  underline-offset-8 mb-3 font-semibold text-[#abd373] text-[18px]">{item.title}</h1>
                <p className=" font text-[16px] ">{item.company_name}</p>
                <p className=" text-[#8892b0] logoFont">{item.description}</p>
              </div>
            ))
          }
          {/* <div data-aos="zoom-in" className=""  >
            <h1 className="  underline-offset-8 mb-3 font-semibold text-[#abd373] text-[18px]">Intership - 1</h1>
            <p className=" font text-[16px] ">Grras Solutions Private Limited | Ahmedabad</p>
            <p className=" text-[#8892b0] logoFont">Frontend Development</p>
          </div>
          <div data-aos="zoom-in" className=""  >
            <h1 className="  underline-offset-8 mb-3 font-semibold text-[#abd373] text-[18px]">Intership - 2 ( 6 Months )</h1>
            <p className=" font text-[16px] ">Maxgen Technologies Pvt.Ltd | Ahmedabad</p>
            <p className=" text-[#8892b0] logoFont ">ReactJS Development</p>
          </div> */}



          {/* <div className=""  >
            <h1 className=" underline underline-offset-8 mb-3 font-semibold text-[#abd373] text-[18px]">Intership - 1</h1>
            <p className="  text-[#8892b0]">Grras Solutions Private Limited | Ahmedabad</p>
            <p className=" ff">FRONTEND DEVELOPMENT</p>
           </div> */}

        </div>

      </div>

    </div>
  );
};

export default Experience;
