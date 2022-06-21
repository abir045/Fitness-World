import React from "react";

const WorkoutVideos = ({ workoutVideos, name }) => {
  if (!workoutVideos) return "Loading...";

  return (
    <div className="flex p-10">
      <h4 className="text-3xl mb-6">
        Watch <span className="text-[#ff2625] text-3xl capitalize">{name}</span>{" "}
        workout videos
      </h4>
      <div className="flex flex-col justify-start flex-wrap items-center md:flex-row md:gap-[110px]">
        {workoutVideos?.slice(0, 6).map((item, index) => {
          return (
            <a
              className="text-lg"
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
