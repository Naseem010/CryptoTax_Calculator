import React from "react";
import Logo from "../assets/logo.png";
import IasLogo from "../assets/IasLogo.png";
import {
  BiLogoLinkedin,
  BiLogoFacebook,
  BiLogoInstagram,
  BiLogoTwitter,
  BiLogoYoutube,
  BiLogoPinterestAlt,
} from "react-icons/bi";

const Footer = () => {
  return (
    <footer className="w-full bg-[#02042B] sm:bg-[#200E32] text-center text-blue-500   lg:text-left md:px-14">
      <div className="block text-[14px] sm:hidden text-white text-opacity-60 px-3 pt-5  sm:p-6 text-center ">
        <span>© All rights reserved by Simplify Infotech Pvt. Ltd.</span>
      </div>
      <div className="flex items-center justify-center sm:border-b-[1px] border-white  py-4 sm:p-6  lg:justify-between">
        <div className="mr-12 hidden lg:block">
          <img src={Logo} alt="Logo" />
        </div>

        {/* <!-- Social network icons container --> */}
        <div className="flex justify-center">
          <a href="#p" className="mr-6 text-blue-500 h-4 w-4 cursor-pointer">
            <BiLogoLinkedin size={20} />
          </a>
          <a href="#p" className="mr-6 text-blue-500 h-4 w-4 cursor-pointer">
            <BiLogoFacebook size={20} />
          </a>
          <a href="#p" className="mr-6 text-blue-500 h-4 w-4 cursor-pointer">
            <BiLogoInstagram size={20} />
          </a>
          <a href="#p" className="mr-6 text-blue-500 h-4 w-4 cursor-pointer">
            <BiLogoTwitter size={20} />
          </a>
          <a href="#p" className="mr-6 text-blue-500 h-4 w-4 cursor-pointer">
            <BiLogoYoutube size={20} />
          </a>
          <a href="#p" className="mr-6 text-blue-500 h-4 w-4 cursor-pointer ">
            {<BiLogoPinterestAlt size={20} />}
          </a>
        </div>
      </div>

      {/* <!-- Main container div: holds the entire content of the footer, including four sections (Tailwind Elements, Products, Useful links, and Contact), with responsive styling and appropriate padding/margins. --> */}
      <div className=" py-4 sm:pt-5 sm:pb-0 text-center md:text-left">
        <div className="grid sm:hidden ">
          {/* Footer For Mobile */}

          <div className="py-2 sm:py-0">
            <h6 className="text-white mb-4 flex justify-center font-semibold uppercase md:justify-start">
              Product
            </h6>
            <p className="  mb-2 sm:mb-4">
              <a href="#p" className="text-blue-500 hover:underline ">
                Features
              </a>
            </p>
            <p className=" mb-2 sm:mb-4">
              <a href="#p" className="text-blue-500 hover:underline ">
                How it works
              </a>
            </p>
          </div>

          <div className="py-2 sm:py-0">
            <h6 className="text-white mb-4 flex justify-center font-semibold uppercase md:justify-start">
              Company
            </h6>
            <p className=" mb-2 sm:mb-4">
              <a href="#p" className="text-blue-500 hover:underline  ">
                Backed by
              </a>
            </p>
            <p className=" mb-2 sm:mb-4">
              <a href="#p" className="text-blue-500 hover:underline ">
                Terms of use
              </a>
            </p>
            <p className=" mb-2 sm:mb-4">
              <a href="#p" className="text-blue-500 hover:underline ">
                Privacy Policy
              </a>
            </p>
          </div>
          <div className="pt-4">
            <h6 className="text-white mb-0 flex justify-center font-semibold uppercase md:justify-start">
              PR and Media enquiries
            </h6>
            <p className="mb-4">
              <a href="#p" className="text-blue-500 hover:underline ">
                communications@koinx.com
              </a>
            </p>
          </div>
        </div>

        <div className="grid-2 sm:grid gap-9 hidden  md:grid-cols-5  sm:border-b-[1px] border-white">
          {/* <!-- Tailwind Elements section --> */}
          <div className="mx-6 mb-3">
            <h6 className="text-white mb-4 flex justify-center font-semibold uppercase md:justify-start">
              Crypto Taxes for
            </h6>
            <p className="mb-4">
              <a
                href="#p"
                className="text-white text-opacity-60 cursor-pointer hover:underline "
              >
                Individual and Investor
              </a>
            </p>
            <p className="mb-4">
              <a
                href="#p"
                className="text-white text-opacity-60 cursor-pointer hover:underline "
              >
                Tax Professional and Accountants
              </a>
            </p>
            <p className="mb-4">
              <a
                href="#p"
                className="text-white text-opacity-60 cursor-pointer hover:underline "
              >
                Exchanges and Web3 projects
              </a>
            </p>
            <p className="mb-4 flex justify-center">
              <img src={IasLogo} alt="Logo" />
            </p>
          </div>
          {/* Free Tools Section */}
          <div className="">
            <h6 className="text-white mb-4 flex justify-center font-semibold uppercase md:justify-start">
              Free Tools
            </h6>
            <p className="mb-4">
              <a
                href="#p"
                className="text-white text-opacity-60 cursor-pointer hover:underline "
              >
                Crypto Price Live
              </a>
            </p>
            <p className="mb-4">
              <a
                href="#p"
                className="text-white text-opacity-60 cursor-pointer hover:underline "
              >
                Crypto Tax Calculator
              </a>
            </p>
            <p className="mb-4">
              <a
                href="#p"
                className="text-white text-opacity-60 cursor-pointer hover:underline "
              >
                Crypto Tax Saving Speculator
              </a>
            </p>
            <p className="mb-4">
              <a
                href="#p"
                className="text-white text-opacity-60 cursor-pointer hover:underline "
              >
                Crypto Profit Calculator
              </a>
            </p>
            <p className="mb-4">
              <a
                href="#p"
                className="text-white text-opacity-60 cursor-pointer hover:underline "
              >
                Crypto Converter
              </a>
            </p>
            <p className="mb-4">
              <a
                href="#p"
                className="text-white text-opacity-60 cursor-pointer hover:underline "
              >
                Crypto Staking ROI Calculator
              </a>
            </p>
          </div>
          {/* Resource Centre */}
          <div className="">
            <h6 className="text-white mb-4 flex justify-center font-semibold uppercase md:justify-start">
              Resource Centre
            </h6>
            <p className="mb-4">
              <a
                href="#p"
                className="text-white text-opacity-60 cursor-pointer hover:underline "
              >
                Crypto Tax Guides
              </a>
            </p>
            <p className="mb-4">
              <a
                href="#p"
                className="text-white text-opacity-60 cursor-pointer hover:underline "
              >
                Dumb Ways To Lose Money
              </a>
            </p>
            <p className="mb-4">
              <a
                href="#p"
                className="text-white text-opacity-60 cursor-pointer hover:underline "
              >
                Crypto Tax Saving Guide
              </a>
            </p>
            <p className="mb-4">
              <a
                href="#p"
                className="text-white text-opacity-60 cursor-pointer hover:underline "
              >
                Blogs
              </a>
            </p>
            <p className="mb-4">
              <a
                href="#p"
                className="text-white text-opacity-60 cursor-pointer hover:underline "
              >
                Crypto Buying Guides
              </a>
            </p>
            <p className="mb-4">
              <a
                href="#p"
                className="text-white text-opacity-60 cursor-pointer hover:underline "
              >
                Crypto Staking Guides
              </a>
            </p>
            <p className="mb-4">
              <a
                href="#p"
                className="text-white text-opacity-60 cursor-pointer hover:underline "
              >
                Crypto Mining Guides
              </a>
            </p>
            <p className="mb-4">
              <a
                href="#p"
                className="text-white text-opacity-60 cursor-pointer hover:underline "
              >
                Crypto Price Predictions
              </a>
            </p>
          </div>
          {/* <!-- Products section --> */}
          <div className="">
            <h6 className="text-white mb-4 flex justify-center font-semibold uppercase md:justify-start">
              Help And Support
            </h6>
            <p className="mb-4">
              <a
                href="#p"
                className="text-white text-opacity-60 cursor-pointer hover:underline "
              >
                Product Guides
              </a>
            </p>
            <p className="mb-4">
              <a
                href="#p"
                className="text-white text-opacity-60 cursor-pointer hover:underline"
              >
                How to Guides
              </a>
            </p>
            <p className="mb-4">
              <a
                href="#p"
                className="text-white text-opacity-60 cursor-pointer hover:underline "
              >
                Templates
              </a>
            </p>
            <p>
              <a
                href="#p"
                className="text-white text-opacity-60 cursor-pointer hover:underline "
              >
                Contact us
              </a>
            </p>
          </div>
          {/* <!-- Useful links section --> */}
          <div className="">
            <h6 className="text-white mb-4 flex justify-center font-semibold uppercase md:justify-start">
              Company
            </h6>
            <p className="mb-4">
              <a
                href="#p"
                className="text-white text-opacity-60 cursor-pointer hover:underline "
              >
                About Us
              </a>
            </p>
            <p className="mb-4">
              <a
                href="#p"
                className="text-white text-opacity-60 cursor-pointer hover:underline "
              >
                Backed by
              </a>
            </p>
            <p className="mb-4">
              <a
                href="#p"
                className="text-white text-opacity-60 cursor-pointer hover:underline "
              >
                Media and Press
              </a>
            </p>
            <p className="mb-4">
              <a
                href="#C"
                className="text-white text-opacity-60 cursor-pointer "
              >
                Careers{" "}
                <button className="bg-blue-600 text-white hover:underline px-2 text-sm rounded-sm">
                  We're Hiring
                </button>
              </a>
            </p>
            <p className="mb-4">
              <a
                href="#R"
                className="text-white text-opacity-60 cursor-pointer hover:underline "
              >
                Refund Policy
              </a>
            </p>
            <p className="mb-4">
              <a
                href="#B"
                className="text-white text-opacity-60 cursor-pointer hover:underline "
              >
                Brand Assets
              </a>
            </p>
            <p className="mb-4">
              <a
                href="#T"
                className="text-white text-opacity-60 cursor-pointer hover:underline "
              >
                Terms of Use
              </a>
            </p>
            <p className="mb-4">
              <a
                href="#p"
                className="text-white text-opacity-60 cursor-pointer hover:underline "
              >
                Privacy Policy
              </a>
            </p>
          </div>
          {/* <!-- Contact section --> */}
        </div>
      </div>

      {/* <!--Copyright section--> */}
      <div className="hidden sm:block text-white text-opacity-60  p-6 text-center ">
        <span>© All rights reserved by Simplify Infotech Pvt. Ltd.</span>
      </div>
    </footer>
  );
};

export default Footer;
