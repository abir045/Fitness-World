import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchData, exerciseOptions, youtubeOptions } from "../utils/fetchData";
import Detail from "../components/Detail";
import WorkoutVideos from "../components/WorkoutVideos";
import SimilarWorkouts from "../components/SimilarWorkouts";

const WorkoutDetails = () => {
  const [workoutDetail, setWorkoutDetail] = useState({});
  const [workoutVideos, setWorkoutVideos] = useState([]);
  const [targetMuscleWorkouts, setTargetMuscleWorkouts] = useState([]);
  const [equipmentWorkouts, setEquipmentWorkouts] = useState([]);

  //   get access to the id from the url
  const { id } = useParams();

  useEffect(() => {
    const fetchWorkoutData = async () => {
      const workoutDbUrl = "https://exercisedb.p.rapidapi.com";
      const youtubeSearchUrl =
        "https://youtube-search-and-download.p.rapidapi.com";

      const workoutDetailData = await fetchData(
        `${workoutDbUrl}/exercises/exercise/${id}`,
        exerciseOptions
      );
      setWorkoutDetail(workoutDetailData);

      const workoutVideosData = await fetchData(
        `${youtubeSearchUrl}/search?query=${workoutDetailData.name} exercise`,
        youtubeOptions
      );

      setWorkoutVideos(workoutVideosData.contents);
      console.log(workoutVideos);

      const targetMuscleWorkoutData = await fetchData(
        `${workoutDbUrl}/exercises/target/${workoutDetailData.target}`,
        exerciseOptions
      );
      console.log(targetMuscleWorkoutData);
      setTargetMuscleWorkouts(targetMuscleWorkoutData);

      const equipmentWorkoutData = await fetchData(
        `${workoutDbUrl}/exercises/equipment/${workoutDetailData.equipment}`,
        exerciseOptions
      );

      console.log(equipmentWorkoutData);
      setEquipmentWorkouts(equipmentWorkoutData);
    };

    fetchWorkoutData();
  }, [id]);

  return (
    <div>
      <Detail WorkoutDetail={workoutDetail} />
      <WorkoutVideos workoutVideos={workoutVideos} name={workoutDetail.name} />
      <SimilarWorkouts
        targetMuscleWorkouts={targetMuscleWorkouts}
        equipmentWorkouts={equipmentWorkouts}
      />
    </div>
  );
};

export default WorkoutDetails;
