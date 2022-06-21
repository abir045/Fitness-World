import React, { useEffect, useState } from "react";
import { exerciseOptions, fetchData } from "../utils/fetchData";
import HorizontalScrollbar from "./HorizontalScrollbar";

// receiving props from home page
const SearchExercises = ({ setWorkouts, bodyPart, setBodyPart }) => {
  const [search, setSearch] = useState("");

  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchWorkoutData = async () => {
      const bodyPartsData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        exerciseOptions
      );
      setBodyParts([...bodyPartsData]);
    };
    fetchWorkoutData();
  }, []);

  const handleSearch = async () => {
    if (search) {
      const exerciseData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises",
        exerciseOptions
      );
      const searchedWorkouts = exerciseData.filter(
        (exercise) =>
          exercise.name.toLowerCase().includes(search) ||
          exercise.target.toLowerCase().includes(search) ||
          exercise.equipment.toLowerCase().includes(search) ||
          exercise.bodyPart.toLowerCase().includes(search)
      );

      setSearch("");
      setWorkouts(searchedWorkouts);
    }
  };

  return (
    <div className="flex-col items-center justify-center mt-8 ">
      <h1 className="font-bold text-4xl text-center sm:text-5xl mb-4">
        Awesome workouts you <br /> should know
      </h1>

      <div className="flex flex-row">
        <label className="flex ">
          <span className="sr-only">Search</span>
          <input
            className="w-[350px] h-[56px] sm:w-[600px]  lg:w-[800px] bg-white p-4 ml-6  font-bold block border mb-8  border-slate-300 rounded-md py-2 focus:outline-none focus:border-sky-500"
            placeholder="Search Exercises"
            type="text"
            name="search"
            value={search}
            onChange={(e) => setSearch(e.target.value.toLowerCase())}
          />
        </label>
        <button
          className="items-center w-[120px] h-[56px] sm:w-[150px] bg-red-400 rounded-lg p-4 right-0 sm:text-xl"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
      <div className="relative p-4">
        <HorizontalScrollbar
          // passing  props to horizontal scroll bar
          data={bodyParts}
          bodyPart={bodyPart}
          setBodyPart={setBodyPart}
          isBodyParts
        />
      </div>
    </div>
  );
};

export default SearchExercises;
