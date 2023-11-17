import { BiHomeAlt, BiUser } from "react-icons/bi";
import { BsBriefcase, BsChatSquareText } from "react-icons/bs";
// link
// import { Link } from "react-scroll";
// import { Link } from 'react-router-dom';
import { Link, useLocation } from "react-router-dom";


import React from "react";

const Nav = () => {
  const location = useLocation();
  const pathname = location.pathname;
  return (
    <nav className="fixed bottom-2 w-full overflow-hidden z-50">
      <div className="container mx-auto">
        <div className="w-full bg-black/20 h-24 backdrop-blur-2xl  rounded-full max-w-[460px] mx-auto px-5 flex justify-between text-white/50 items-center">

          <Link
            to="/"
            activeClass="active"
            smooth={true}
            spy={true}
           offset={-200}
           className={`cursor-pointer w-[60px] h-[60px] flex items-center justify-center ${pathname === "/" ? "active" : ""}`}
          >
            <BiHomeAlt />
          </Link>

          <Link
            to="./About"
            activeClass="active"
            smooth={true}
            spy={true}
            className={`cursor-pointer w-[60px] h-[60px] flex items-center justify-center ${pathname === "/About" ? "active" : ""}`}
          >
            <BiUser />
          </Link>

          <Link
            to="/Work"
            activeClass="active"
            smooth={true}
            spy={true}
            className={`cursor-pointer w-[60px] h-[60px] flex items-center justify-center ${pathname === "/Work" ? "active" : ""}`}
          >
            <BsBriefcase />
          </Link>

          <Link
            to="/Contact"
            activeClass="active"
            smooth={true}
            spy={true}
            className={`cursor-pointer w-[60px] h-[60px] flex items-center justify-center ${pathname === "/Contact" ? "active" : ""}`}
          >
            <BsChatSquareText />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
