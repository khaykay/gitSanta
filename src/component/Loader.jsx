import React from "react";
import { assets } from "../../public/assets/images";

const Loader = () => {
  return (
    <div className="h-screen flex justify-center items-center bg-loader">
      <div className="h-full relative sm:hidden">
        <img
          src={assets.loader}
          alt="santa checking the list"
          className="h-full w-screen"
        />
        <div className="h-28 absolute top-0 flex justify-between w-full ">
          <div className="h-full w-40 relative ">
            <img
              src={assets.speechPanel}
              alt=" santa's speech panel"
              className=""
            />
            <h4 className="absolute top-0 p-2 text-[9px] typewriter-text text-center ">
              Ho, ho, ho! Gather 'round, everyone! The moment of truth is here.
              Let's see who's made it to the Nice List this year or... well, you
              know the alternative!
            </h4>
          </div>
          <div className="relative ">
            <img
              src={assets.speechBubble}
              alt="rudolfs thought bubble"
              className="w-32"
            />
            <h4 className="absolute top-0 py-7 px-10 text-[8px] ">
              ... or the <span>Naughty list</span>
            </h4>
          </div>
        </div>
      </div>
      <div className="hidden sm:block max-w-[90%]">
        <img src={assets.bigLoader} alt="" className="" />
      </div>
    </div>
  );
};

export default Loader;
