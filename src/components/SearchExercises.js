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

      setWorkouts(searchedWorkouts);
      setSearch([]);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center mt-8 ">
      <h1 className="font-bold text-xl sm:text-4xl text-center mb-4">
        Awesome workouts you <br /> should know
      </h1>

      <div className="flex flex-col mx-auto sm:flex-row">
        <label className="flex">
          <span className="sr-only ">Search</span>
          <input
            className="w-[200px] text-center h-[56px] sm:w-[600px]  lg:w-[800px] bg-white p-4  font-bold block border mb-4  border-slate-300 rounded-md py-2 focus:outline-none focus:border-sky-500"
            placeholder="Search Exercises"
            type="text"
            name="search"
            value={search}
            onChange={(e) => setSearch(e.target.value.toLowerCase())}
          />
        </label>
        <button
          className="items-center mx-auto w-[120px] h-[56px] sm:w-[150px] bg-red-400 rounded-lg p-4 right-0 sm:text-xl"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
      <div className="w-[400px] mt-3 p-2 sm:w-[600px] md:w-[800px] lg:w-[1000px]">
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
