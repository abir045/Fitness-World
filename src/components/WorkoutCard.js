import React from "react";
import { Link } from "react-router-dom";

const WorkoutCard = ({ workout }) => {
  return (
    <Link className="workout-card scale-110" to={`/exercise/${workout.id}`}>
      <img
        src={workout.gifUrl}
        className="mx-auto w-[250px]"
        alt={workout.name}
        loading="lazy"
      />
      <div className="flex">
        <button className="text-dark bg-red-300 text-base rounded-full p-3 m-2 capitalize">
          {workout.bodyPart}
        </button>
        <button className="text-dark bg-amber-400 text-base rounded-full p-3 m-2 capitalize">
          {workout.target}
        </button>
      </div>
      <p className="m-2 p-3 font-bold text-2xl capitalize">{workout.name}</p>
    </Link>
  );
};

export default WorkoutCard;
