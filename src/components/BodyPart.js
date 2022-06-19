import React from "react";
import Icon from "../assets/icons/gym.png";

const BodyPart = ({ item, setBodyPart, bodyPart }) => {
  return (
    <div
      className="flex flex-col justify-center items-center bg-white gap-10 border-b-4 w-[250px] h-[260px] cursor-pointer "
      onClick={() => {
        setBodyPart(item);
      }}
    >
      <img
        src={Icon}
        className="w-[40px] h-[40px]  hover:scale-125 "
        alt="dumbell"
      />
      <p className="font-bold text-2xl capitalize ">{item}</p>
    </div>
  );
};

export default BodyPart;
