import React from "react";
import { assets } from "../../public/assets/images";

const Loader = () => {
  return (
    <div className="h-screen flex justify-center items-center bg-loader">
      <div className="h-full">
        <img
          src={assets.loader}
          alt="santa checking the list"
          className="h-full"
        />
      </div>
    </div>
  );
};

export default Loader;
