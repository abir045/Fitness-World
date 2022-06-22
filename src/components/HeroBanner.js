import React from "react";
import HeroBannerImage from "../assets/images/model.jpg";

const HeroBanner = () => {
  return (
    <>
      <div className="flex  p-5 relative">
        <div className="flex flex-col">
          <p className="text-red-500 font-semibold text-center text-lg sm:text-2xl">
            Fitness Club
          </p>
          <p className="font-bold text-xl sm:text-3xl text-center my-10">
            Sweat, Smile <br /> and Repeat{" "}
          </p>
          <p className="text-xl leading-5 mb-4 text-center sm:text-xl my-5">
            Checkout the most <br /> effective exercises{" "}
          </p>
          <button
            href="#exercise"
            className=" bg-red-500/75 mx-auto w-[150px] h-[50px] text-white my-5 capitalize mb-4 rounded-lg"
          >
            <h5 className="text-2xl  mx-auto font-normal">Explore</h5>
          </button>

          <p className="hidden text-red-500 font-semibold opacity-10 sm:block text-[100px] mt-[60%]">
            Exercise
          </p>
        </div>

        <div className="flex flex-col">
          <img
            src={HeroBannerImage}
            className="flex ml-5 w-[200px] rounded-bl-[50px] sm:w-[400px] sm:h-[600px]"
            alt="banner"
          />
        </div>
      </div>
    </>
  );
};

export default HeroBanner;
