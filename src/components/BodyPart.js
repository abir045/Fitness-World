import React from "react";
import Icon from "../assets/icons/gym.png";

const BodyPart = ({ item, setBodyPart, bodyPart }) => {
  return (
    <div className="flex justify-center items-center bg-white gap-10 border-b-4 w-[250px] h-[260px] cursor-pointer ">
      <img src={Icon} className="w-[40px] h-[40px]" alt="dumbell" />
    </div>
  );
};

export default BodyPart;
