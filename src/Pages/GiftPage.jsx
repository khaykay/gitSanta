import React, { useRef, useState } from "react";
import Light from "../component/Light";
import GiftReveal from "../component/GiftReveal";
import { assets } from "../../public/assets/images";
const GiftPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <>
      <GiftReveal isVisible={isVisible} />
      <div
        className={`h-screen w-full bg-red-400/0 backdrop-blur-[5px] flex flex-col gap-y-[25px] justify-center items-center absolute`}
      >
        <Light className="absolute top-0 md:top-3 " />
        <Light className="absolute top-4 scale-y-[-1] hue-rotate-90" />
        <Light className="absolute bottom-0 md:bottom-3" />
        <Light className="absolute bottom-4 scale-y-[-1] hue-rotate-90" />
        <div
          className={`flex flex-col justify-center px-[15px] relative gap-y-[0px] w-full items-center transition-all duration-[0.6s] ${
            !isVisible ? "opacity-1" : "opacity-0"
          }`}
        >
          <img
            src={assets.Santa}
            className="mt-[-50px] relative z-10 w-[200px] md:w-[260px] drop-shadow-lg"
            alt=""
          />
          <div className="max-w-[500px] w-full py-[15px] md:h-[225px] mt-[-12px] md:mt-[-15px] rounded-full bg-clip-padding backdrop-filter  backdrop-blur-sm gift-hold overflow-hidden bg-[#6AB85F]/20 border border-gray-100/50 flex flex-col justify-center items-center relative">
            <img
              src={assets.Balls}
              className="w-[85px] md:w-[100px] absolute top-0 md:top-2 left-0 md:left-1"
              alt=""
            />
            <img
              src={assets.Balls}
              className="w-[85px] md:w-[100px] absolute top-0 md:top-2 right-0 md:right-1 scale-x-[-1]"
              alt=""
            />
            <img
              onClick={() => setIsVisible(true)}
              src={assets.GiftBox}
              className="w-[80px] md:w-[115px]"
              alt=""
            />
            <p className="font-young uppercase text-white/90 text-[0.8rem] mt-5 animate-pulse">
              Click the box to reveal!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default GiftPage;
