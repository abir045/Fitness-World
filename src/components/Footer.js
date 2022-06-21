import React from "react";
import Logo from "../assets/images/Logo-1.png";

const Footer = () => {
  return (
    <div className="flex">
      <div className="flex-col items-center mx-auto">
        <img src={Logo} alt="logo" className="w-[200px] h-[40px] " />
        <h5 className="mt-5 text-center text-2xl mb-10 font-bold">
          Workout app
        </h5>
      </div>
    </div>
  );
};

export default Footer;
