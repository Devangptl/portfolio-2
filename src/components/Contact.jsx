import React from "react";

const Contact = () => {
  return (
    <div className=" bg-[#0a192f]">
      <div id="contact" className="  h-screen  flex flex-col  items-center justify-center ">
      <p className="ff text-[20px] text-[#5ff2d0] ">
        {" "}
        <span>04. </span> What’s Next?
      </p>

      <div className=" flex flex-col justify-center items-center gap-6">
        <h1 className=" text-[60px] font-bold text-[#ccd6f6] ">Get In Touch</h1>

        <p className=" px-[20%] text-center text-[#8d99b7] ">
          Although I’m not currently looking for any new opportunities, my inbox
          is always open. Whether you have a question or just want to say hi,
          I’ll try my best to get back to you!
        </p>

        <button className=" ff  font-bold text-[18px]  relative hover:text-[#0c4537] py-2 px-6 after:absolute after:h-1 after:hover:h-[200%] transition-all duration-500 hover:transition-all hover:duration-500 after:transition-all after:duration-500 after:hover:transition-all after:hover:duration-500 overflow-hidden z-20 after:z-[-20] after:bg-[#abd373] after:rounded-t-full after:w-full after:bottom-0 after:left-0 text-[#95a1be] ">
          <span className="">Say Hello</span>
        </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
