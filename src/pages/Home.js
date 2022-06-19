import React from "react";
import { useState } from "react";
import HeroBanner from "../components/HeroBanner";
import SearchExercises from "../components/SearchExercises";
import Exercises from "../components/Exercises";

const Home = () => {
  const [workouts, setWorkouts] = useState([]);
  const [bodyPart, setBodyPart] = useState("all");

  return (
    <div>
      <HeroBanner />
      <SearchExercises
        setWorkouts={setWorkouts}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
      <Exercises
        setWorkouts={setWorkouts}
        bodyPart={bodyPart}
        workouts={workouts}
      />
    </div>
  );
};

export default Home;
