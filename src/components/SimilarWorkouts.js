import React from "react";
import HorizontalScrollbar from "./HorizontalScrollbar";
import Loader from "./Loader";

const SimilarWorkouts = ({ targetMuscleWorkouts, equipmentWorkouts }) => {
  return (
    <div className="flex flex-col">
      <p className="mx-4 mb-5 text-3xl">
        Workout that target the same muscle group
      </p>

      <div className="flex-col">
        {targetMuscleWorkouts.length ? (
          <HorizontalScrollbar data={targetMuscleWorkouts} />
        ) : (
          <Loader />
        )}
      </div>
      {/* equipment workouts  */}
      <p className="mx-4 mb-5 text-3xl">Workout that use the same equipment</p>

      <div className="flex-col">
        {equipmentWorkouts.length ? (
          <HorizontalScrollbar data={targetMuscleWorkouts} />
        ) : (
          <Loader />
        )}
      </div>
    </div>
  );
};

export default SimilarWorkouts;
