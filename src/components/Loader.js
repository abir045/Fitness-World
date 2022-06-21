import React from "react";
import { infinitySpin } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="flex items-center w-full">
      <infinitySpin color="gray" />
    </div>
  );
};

export default Loader;
