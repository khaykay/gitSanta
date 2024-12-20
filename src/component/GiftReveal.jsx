import React from "react";
import { Link } from "react-router-dom";
import { assets } from "../../public/assets/images";

const GiftReveal = ({ isVisible }) => {
  return (
    <div
      className={`backdrop-blur-[30px] flex flex-col gap-y-[20px] md:gap-y-[40px] justify-center items-center absolute opacity-0 top-0 left-0 w-full h-screen bg-black/1 transition-all duration-[0.4s] ${
        isVisible ? "opacity-[1] z-[5]" : ""
      }`}
    >
      <div>
        <p className="font-young text-white/90 text-[13px] uppercase mb-[1px] text-center">
          You Got a
        </p>
        <h1 className="text-white font-young text-[1.5rem] md:text-[2rem] text-center leading-[2.5rem] font-extralight">
          Santa Medal
        </h1>
      </div>
      <img src={assets.medal} className="w-[200px] md:w-[230px]" alt="" />
      <Link to="/" className="hover:scale-95 transition-transform">
        <button className="w-[170px] h-[45px] border-[3px] rounded-[8px] border-b-[#B5761A] border-[#F3A42D] button-bg text-white font-chakra font-medium text-[15.5px]">
          <span className="relative z-[2]">Finish</span>
        </button>
      </Link>
    </div>
  );
};

export default GiftReveal;
