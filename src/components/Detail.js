import React from "react";

import BodyPartImage from "../assets/icons/body-part.png";
import TargetImage from "../assets/icons/target.png";
import EquipmentImage from "../assets/icons/equipment.png";

const Detail = ({ WorkoutDetail }) => {
  // const { bodyPart, equipment, gifUrl, name, target } = WorkoutDetail;

  const extraDetail = [
    { icon: BodyPartImage, name: WorkoutDetail.bodyPart },
    { icon: TargetImage, name: WorkoutDetail.target },
    { icon: EquipmentImage, name: WorkoutDetail.equipment },
  ];

  return (
    <div className="flex flex-col md:flex-row items-center">
      <img src={WorkoutDetail.gifUrl} alt={WorkoutDetail.name} loading="lazy" />{" "}
      ;
      <div className="flex-col gap-3">
        <h1 className="text-2xl mx-5">{WorkoutDetail.name}</h1>
        <p className="flex-wrap text-sm pt-5 mx-5">
          Workouts keep you strong. {WorkoutDetail.name} {""}
          is one of the best workouts to target your {WorkoutDetail.target}.{""}{" "}
          It will help you improve your mood and gain energy.
        </p>
        {extraDetail.map((item) => {
          return (
            <div
              key={item.name}
              className="flex items-center gap-x-6 mt-4 mb-4 mx-5"
            >
              <button className="bg-[#fff2db] rounded-full w-[100px] h-[100px]">
                <img
                  src={item.icon}
                  className="w-[50px] h-[50px] mx-auto"
                  alt={WorkoutDetail.bodyPart}
                />
              </button>
              <h6 className="text-lg capitalize font-bold">{item.name}</h6>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Detail;
