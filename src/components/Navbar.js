import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/icons/gymnast.svg";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  return (
    <div className="flex items-center w-full justify-between space-x-5 mt-2 ">
      <Link to="/">
        <img src={Logo} className="flex justify-start w-[80px] ml-2" />
      </Link>

      <MenuIcon fontSize="large" className="sm:hidden flex mx-2" />

      <div className="hidden sm:flex sm:justify-end  space-x-5 w-full items-end mr-[5%] p-2 ">
        <div>
          <Link
            to="/"
            className="flex text-sm border-b-4 p-2 mx-2 border-red-600"
          >
            <h3> Home</h3>
          </Link>
        </div>

        <div>
          <a href="#exercises" className="flex text-sm p-3  items-center mr-4">
            <h3>Execises</h3>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
