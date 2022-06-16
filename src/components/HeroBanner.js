import React from "react";
import HeroBannerImage from "../assets/images/banner.png";

const HeroBanner = () => {
  return (
    <div className="mt-[70px] sm:mt-[212px] p-5 relative">
      <p className="text-red-500 font-semibold text-2xl">Fitness Club</p>
      <p className="font-bold text-4xl sm:text-5xl my-5">
        Sweat, Smile <br /> and Repeat{" "}
      </p>
      <p className="text-2xl leading-9 mb-4">
        Checkout the most effective exercise{" "}
      </p>
      <button
        href="#exercise"
        className="bg-red-500/75 p-4 text-white  uppercase  rounded-lg"
      >
        Explore exercises
      </button>

      <p className="hidden text-red-500 font-semibold opacity-10 sm:block text-[200px]  ">
        Exercise
      </p>

      <img src={HeroBannerImage} className="flex flex-row" alt="banner" />
    </div>
  );
};

export default HeroBanner;
