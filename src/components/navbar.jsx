import React, { useState } from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import ClearIcon from "@mui/icons-material/Clear";
import Logo from "../assets/logo.png";
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <nav className="navbar flex p-3 h-15 bg-white overflow-hidden">
        <div className="logo-div">
          <img className="logo-main ml-10 h-12" src={Logo} alt="logo" />
        </div>
        <div className="menu hidden md:flex ml-auto p-2 ">
          <div className="menu-content flex space-x-8 mr-10 text-[#0F1629] hover:cursor-default">
            <a
              href="#features"
              class="mt-1 hover:underline decoration-2 decoration-sky-600 "
            >
              Features
            </a>
            <a
              href="#exchanges"
              class="mt-1 hover:underline decoration-2 decoration-sky-600"
            >
              Exchanges
            </a>
            <a
              href="#works"
              class="mt-1 hover:underline decoration-2 decoration-sky-600"
            >
              How it Works?
            </a>
            <a
              href="#Blog"
              class="mt-1 hover:underline decoration-2 decoration-sky-600"
            >
              Blog
            </a>
            <a
              href="#About"
              class="mt-1 hover:underline decoration-2 decoration-sky-600"
            >
              About us
            </a>
            <Stack spacing={2} direction="row">
              <Button className="mr-2 h-8" variant="outlined">
                Sign In
              </Button>
            </Stack>
          </div>
        </div>
        <div className="flex w-[75px] ml-auto md:hidden">
          <button onClick={toggleNavbar}>
            {isOpen ? <ClearIcon /> : <MenuIcon />}
          </button>
        </div>
      </nav>
      {isOpen && (
        <div className=" w-full  bg-white flex-col">
          <div className="flex flex-col items-center text-[#0F1629] hover:cursor-default">
            <a
              href="#features"
              class="mt-0 hover:underline decoration-2 decoration-sky-600 "
            >
              Features
            </a>
            <a
              href="#exchanges"
              class="mt-2 hover:underline decoration-2 decoration-sky-600"
            >
              Exchanges
            </a>
            <a
              href="#works"
              class="mt-2 hover:underline decoration-2 decoration-sky-600"
            >
              How it Works?
            </a>
            <a
              href="#Blog"
              class="mt-2 hover:underline decoration-2 decoration-sky-600"
            >
              Blog
            </a>
            <a
              href="#About"
              class="mt-2 hover:underline decoration-2 decoration-sky-600"
            >
              About us
            </a>
            <Stack className="mt-2 mb-3" spacing={2} direction="row">
              <Button className="h-8" variant="outlined">
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
