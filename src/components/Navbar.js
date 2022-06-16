import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/Logo.png";

const Navbar = () => {
  return (
    <div className="flex justify-around space-x-10 sm:space-x-32 mt-5 sm:mt-8 px-5">
      <Link to="/">
        <img src={Logo} className="w-[48px] h-[48px]" />
      </Link>
      <div className="flex space-x-10 text-2x items-end ">
        <Link to="/" className="text-[#3a1212] border-b-4   border-red-600">
          Home{" "}
        </Link>

        <a href="#exercises" className="text-[#3A1212]">
          Execises
        </a>
      </div>
    </div>
  );
};

export default Navbar;
