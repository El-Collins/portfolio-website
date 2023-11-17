import React from "react";

import Logo from "../assets/collins logo.svg";
import { FaAngleDoubleRight } from "react-icons/fa";


const Header = () => {
  return (
    <header className="pt-4 pb-0 px-5">
      <div className="container mx-auto px-10 ">
        <div className="flex justify-between items-center">
        <a href="/"> 
          <img src={Logo} alt="logo" width={100} />
        </a>
        <button className="btn cursor-pointer text-center py-3 px-8">Hire Me<FaAngleDoubleRight className="pl-2 inline-block"/>
        </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
