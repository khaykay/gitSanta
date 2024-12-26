import React, { useState, useEffect } from "react";
import { assets } from "../../public/assets/images";
import TypingEffect from "../TypingEffect";

const Loader = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 8500);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="h-screen flex justify-center items-center bg-loader w-screen">
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
            <div className="absolute top-1 p-2 text-[9px]">
              <TypingEffect
                text="Ho , ho, ho! Gather 'round, everyone! The moment of truth is here.
              Let's see who's made it to the Nice List this year or... well, you
              know the alternative!"
                speed={50}
              />
            </div>
          </div>
          {isVisible && (
            <div className="relative fade-in-div">
              <img
                src={assets.speechBubble}
                alt="rudolfs thought bubble"
                className="w-32"
              />
              <h4 className="absolute top-0 py-7 px-11 text-[8px] text-center ">
                ... or the{" "}
                <span className="text-red-500 text-[9px]">Naughty list 😈</span>
              </h4>
            </div>
          )}
        </div>
      </div>
      <div className="hidden sm:block max-w-[65%] relative">
        <img src={assets.bigLoader} alt="" className="" />
        <div className="absolute top-5 lg:top-12 2xl:top-20 left-4 p-2 text-[8px]  lg:text-xs 2xl:text-sm text-white w-[22%] ">
          <TypingEffect
            text="Ho, ho, ho! Gather 'round, everyone! The moment of truth is here.
              Let's see who's made it to the Nice List this year or... well, you
              know the alternative!"
            speed={50}
            style="text-white"
          />
        </div>
        {isVisible && (
          <div className="absolute top-0 right-3  fade-in-div w-[30%]">
            <img
              src={assets.speechBubble}
              alt="rudolfs thought bubble"
              className=""
            />
            <h4 className=" absolute top-0 h-[80%] text-[8px]  lg:text-xs 2xl:text-sm text-center w-full flex items-center justify-center">
              <span className=" w-1/2 ml-5">
                <span>... or the </span>
                <span className="text-red-500 text-[10px] lg:text-[13px] 2xl:text-[15px]">
                  Naughty list 😈
                </span>
              </span>
            </h4>
          </div>
        )}
      </div>
    </div>
  );
};

export default Loader;
