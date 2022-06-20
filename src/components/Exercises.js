import { PagesRounded } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { exerciseOptions, fetchData } from "../utils/fetchData";
import Pagination from "./Pagination";
import WorkoutCard from "./WorkoutCard";
// receiving props from home
const Exercises = ({ workouts, setWorkouts, bodyPart }) => {
  console.log(workouts);

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  // get current posts

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentWorkouts = workouts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);

    window.scrollTo({ top: 1800, behavior: "smooth" });
  };

  useEffect(() => {
    const fetchWorkoutData = async () => {
      let workoutsData = [];
      if (bodyPart === "all") {
        workoutsData = await fetchData(
          "https://exercisedb.p.rapidapi.com/exercises",
          exerciseOptions
        );
      } else {
        workoutsData = await fetchData(
          `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
          exerciseOptions
        );
      }
      setWorkouts(workoutsData);
    };

    fetchWorkoutData();
  }, [bodyPart]);

  return (
    <div id="exercises">
      <h3 className="mb-5 text-2xl m-2 p-2 mr-4">Showing Results</h3>
      <div className="flex flex-wrap gap-[50px] md:gap-[110px] justify-center">
        {currentWorkouts.map((workout, index) => (
          <WorkoutCard key={index} workout={workout} />
        ))}
      </div>

      {/* pagination */}

      <div className="mt-4">
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={workouts.length}
          paginate={paginate}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
};

export default Exercises;
