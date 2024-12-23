import React, { useRef, useState } from "react";
import Light from "../component/Light";
import GiftReveal from "../component/GiftReveal";
import { assets } from "../../public/assets/images";
const GiftPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <>
      <GiftReveal isVisible={isVisible} setIsVisible={setIsVisible} />
      <div
        className={`h-screen w-full bg-red-400/0 backdrop-blur-[5px] flex flex-col overflow-hidden gap-y-[25px] justify-center items-center absolute top-0 ${
          isVisible ? "hidden" : ""
        }`}
      >
        <div className="light-holder absolute top-0">
          <div className="flex flex-col relative z-[30] mt-[8px]">
            <Light className={"scale-[240%] sm:scale-[140%] "} />
            <Light
              className={
                "rotate-180 hue-rotate-[90deg] mt-2 md:mt-[-7px] scale-[240%] sm:scale-[110%]"
              }
            />
          </div>
        </div>
        <div
          data-aos="zoom-out-up"
          data-aos-delay="200"
          data-aos-duration="1300"
          className=" max-w-[550px] w-full relative h-screen overflow-y-hidden"
        >
          <img
            className="absolute bottom-0 left-[50%] translate-x-[-50%]  w-full sc pointer-events-none"
            src={assets.SantaWithBox}
            alt=""
          />
          <p
            onClick={() => setIsVisible(true)}
            className="font-young uppercase  text-black text-[0.8rem] mt-5 bg-white/95 cursor-pointer gift-hold font-bold px-[10px] py-[10px] rounded-xl absolute left-[54.4%] translate-x-[-50%] bottom-[50px]"
          >
            Click to reveal!
          </p>
        </div>
      </div>
    </>
  );
};

export default GiftPage;
