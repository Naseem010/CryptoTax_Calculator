import React from "react";
import mailLogo from "../assets/mailLogo.png";
import { AiFillCaretRight } from "react-icons/ai";

const subscription = () => {
  return (
    <div className="w-auto h-[70vh] hidden md:flex justify-center items-center bg-white mt-4">
      {/* <!-- Parent div with 100vw width and margin bg-[#0052FE]--> */}
      <div className="w-[85vw] h-[50vh]  rounded-3xl bg-[#0052FE]   z-10 flex flex-row ">
        <div className="flex m-auto p-[2rem] items-center  gap-[3rem] w-auto h-auto py-5 px-10">
          <img
            src={mailLogo}
            alt="mailLogo"
            className="h-[200px] w-auto relative"
          />
          <div className="  w-auto flex flex-col  content-center  whitespace-pre-line  ">
            <h1 className=" text-[1.4rem] flex  font-bold text-white pb-4 ">
              Stay up to date with latest crypto news <br /> and events.
              Subscribe to our newsletter
            </h1>
            <div className="flex flex-row rounded-md h-auto w-full bg-white">
              <input
                type="email"
                className="block h-[8vh] w-[16rem] px-4  mr-2 rounded leading-tight bg-white text-gray-700  focus:outline-none  "
                placeholder="Enter your Email Address"
              />
              <button
                id="suscribe"
                className="bg-[#FFB800] m-[2px]  text-black font-medium   w-full rounded-r-md flex items-center justify-center"
              >
                <p className="text-[1rem]">Subscribe &nbsp;</p>
                <AiFillCaretRight className="mt-[1px]" size={15} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default subscription;
