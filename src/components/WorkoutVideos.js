import React from "react";

const WorkoutVideos = ({ workoutVideos, name }) => {
  if (!workoutVideos) return "Loading...";

  return (
    <div className="flex flex-col p-5 w-full  md:flex-row">
      <div className="flex-col p-2">
        <h4 className="text-3xl mb-6 text-center">
          Watch <span className="text-red-400 text-3xl capitalize">{name}</span>{" "}
          workout videos
        </h4>
      </div>

      <div className="flex flex-col justify-start flex-wrap items-center md:flex-row sm:gap-[100px]">
        {workoutVideos?.slice(0, 6).map((item, index) => {
          return (
            <a
              className="flex-col text-lg p-4 sm:flex-row"
              href={`https://youtube.com/watch?v=${item.video.videoId}`}
              target="_blank"
              rel="noreferrer"
              key={index}
            >
              <img
                src={item.video.thumbnails[0].url}
                className="w-[200px]"
                alt={item.video.title}
              />
              <div>
                <h5>{item.video.title}</h5>
                <h5>{item.video.channelName}</h5>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default WorkoutVideos;
