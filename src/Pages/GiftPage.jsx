import React, { useRef, useState } from "react";
import Light from "../component/Light";
import GiftReveal from "../component/GiftReveal";
import { assets } from "../../public/assets/images";
import { useLocation, useNavigate } from "react-router-dom";

const GiftPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { state } = useLocation();
  const navigate = useNavigate();

  // Destructure state safely
  const username = state?.username;
  const data = state?.data;

  // Redirect to ActionPage if state is missing
  if (!username || !data) {
    return (
      <div className="h-screen flex justify-center items-center text-center">
        <p className="text-red-500">Something went wrong. Redirecting...</p>
        {setTimeout(() => navigate("/"), 3000)}
      </div>
    );
  }

  // Extract contributions
  const { totalContributions } =
    data.user.contributionsCollection.contributionCalendar;

  return (
    <div>
      {/* Gift Reveal Component */}
      <GiftReveal commit={totalContributions} isVisible={isVisible} setIsVisible={setIsVisible} />

      {/* Main Container */}
      <div
        className={`h-screen w-full bg-red-400/0 backdrop-blur-[5px] flex flex-col overflow-hidden gap-y-[25px] justify-center items-center absolute top-0 ${
          isVisible ? "hidden" : ""
        }`}
      >
        {/* Lights */}
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

        {/* Content */}
        <div
          data-aos="zoom-out-up"
          data-aos-delay="200"
          data-aos-duration="1300"
          className="max-w-[550px] w-full relative h-screen overflow-y-hidden"
        >
          {/* Santa Image */}
          <img
            className="absolute bottom-0 left-[50%] translate-x-[-50%] w-full sc pointer-events-none"
            src={assets.SantaWithBox}
            alt="Santa holding a gift box"
          />

          {/* Reveal Button */}
          <p
            onClick={() => setIsVisible(true)}
            className="font-young uppercase text-black text-[0.4rem] xss:text-[0.6rem] sm:text-[0.8rem] mt-5 bg-white/95 cursor-pointer gift-hold font-bold px-[5px] xm:px-[10px] py-[7px] xm:py-[10px] rounded-md xm:rounded-xl absolute left-[54.4%] translate-x-[-50%] bottom-[25px] xss:bottom-[35px] xm:bottom-[50px]"
          >
            Click to reveal!
          </p>
        </div>
        {/* <p className="text-yellow-50 combo">
          {username} has made{" "}
          <span className="text-[#FDAC31]">{totalContributions}</span> commits
          in the past year!
        </p> */}
      </div>
    </div>
  );
};

export default GiftPage;
