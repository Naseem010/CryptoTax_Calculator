import React, { useState } from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import ClearIcon from "@mui/icons-material/Clear";
import Logo from "../assets/logo1.png";
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <nav className="navbar flex p-3 h-20 bg-white overflow-hidden">
        <div className="logo-div lg:ml-12 ml-4">
          <img className="logo-main h-19 w-24 mt-[16px]" src={Logo} alt="logo" />
        </div>
        <div className="menu hidden md:flex ml-auto p-2 ">
          <div className="menu-content flex space-x-8 mr-6 text-[#0e1529] hover:cursor-default">
            <a
              href="#features"
              class="mt-[10px] hover:underline decoration-2 decoration-sky-600 [font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#0e1529] text-[16px] tracking-[-0.16px] leading-[normal] whitespace-nowrap"
            >
              Features
            </a>
            <a
              href="#exchanges"
              class="mt-[10px] hover:underline decoration-2 decoration-sky-600 [font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#0e1529] text-[16px] tracking-[-0.16px] leading-[normal] whitespace-nowrap"
            >
              Exchanges
            </a>
            <a
              href="#works"
              class="mt-[10px] hover:underline decoration-2 decoration-sky-600 [font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#0e1529] text-[16px] tracking-[-0.16px] leading-[normal] whitespace-nowrap"
            >
              How it Works?
            </a>
            <a
              href="#Blog"
              class="mt-[10px] hover:underline decoration-2 decoration-sky-600 [font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#0e1529] text-[16px] tracking-[-0.16px] leading-[normal] whitespace-nowrap"
            >
              Blog
            </a>
            <a
              href="#About"
              class="mt-[10px] hover:underline decoration-2 decoration-sky-600 [font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#0e1529] text-[16px] tracking-[-0.16px] leading-[normal] whitespace-nowrap"
            >
              About us
            </a>
            <Stack spacing={2} direction="row" className="h-10 rounded-[4px] border border-solid border-[#0052fe]">
              <Button className="mr-2 [font-family:'Inter-SemiBold',Helvetica] font-semibold text-primaryblue text-[16px] tracking-[-0.16px] leading-[normal] whitespace-nowrap" variant="outlined">
                Sign In
              </Button>
            </Stack>
          </div>
        </div>
        <div className="flex w-[75px] ml-auto md:hidden">
          <button className="ml-10" onClick={toggleNavbar}>
            {isOpen ? <ClearIcon /> : <MenuIcon />}
          </button>
        </div>
      </nav>
      {isOpen && (
        <div className=" w-full  bg-white flex-col">
          <div className="flex flex-col items-center text-[#0F1629] hover:cursor-default">
            <a
              href="#features"
              class="mt-0 hover:underline decoration-2 decoration-sky-600  [font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#0e1529] text-[16px] tracking-[-0.16px] leading-[normal] whitespace-nowrap"
            >
              Features
            </a>
            <a
              href="#exchanges"
              class="mt-2 hover:underline decoration-2 decoration-sky-600  [font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#0e1529] text-[16px] tracking-[-0.16px] leading-[normal] whitespace-nowrap"
            >
              Exchanges
            </a>
            <a
              href="#works"
              class="mt-2 hover:underline decoration-2 decoration-sky-600  [font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#0e1529] text-[16px] tracking-[-0.16px] leading-[normal] whitespace-nowrap"
            >
              How it Works?
            </a>
            <a
              href="#Blog"
              class="mt-2 hover:underline decoration-2 decoration-sky-600  [font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#0e1529] text-[16px] tracking-[-0.16px] leading-[normal] whitespace-nowrap"
            >
              Blog
            </a>
            <a
              href="#About"
              class="mt-2 hover:underline decoration-2 decoration-sky-600  [font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#0e1529] text-[16px] tracking-[-0.16px] leading-[normal] whitespace-nowrap"
            >
              About us
            </a>
            <Stack className="mt-2 mb-3 rounded-[4px] border border-solid border-[#0052fe]" spacing={2} direction="row">
              <Button className="h-8 [font-family:'Inter-SemiBold',Helvetica] font-semibold text-primaryblue text-[16px] tracking-[-0.16px] leading-[normal] whitespace-nowrap" variant="outlined">
                Sign In
              </Button>
            </Stack>
          </div>
        </div>
      )}
    </>
  );
}
export default Navbar;
