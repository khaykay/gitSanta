import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Reward from "./Reward";
import TryAgain from "./TryAgain";
import { wallpapers } from "../../public/wallpaper/wallpaper";

const GiftReveal = ({ isVisible, commit, username }) => {
  const [isReward, setIsReward] = useState(null);
  const [gift, setGift] = useState(null);

  useEffect(() => {
    if (commit >= 264) {
      const randomIndex = Math.floor(Math.random() * wallpapers.length);
      const selectedGift = wallpapers[randomIndex];
      setGift(selectedGift);
      setIsReward(true);
    } else {
      setIsReward(false);
    }
  }, [commit]);

  return (
    <>
      {isVisible && (
        <div
          data-aos="zoom-up"
          data-aos-delay="40"
          data-aos-offset="1"
          className={`backdrop-blur-[30px] flex flex-col justify-center items-center w-full h-screen bg-black/10 transition-all duration-[0.3s] px-[10px]`}
        >
          {isReward ? (
            <Reward isVisible={isVisible} gift={gift} username={username} />
          ) : (
            <TryAgain />
          )}

          <p
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-offset="10"
            className="text-yellow-100 combo w-full max-w-[450px] text-center mb-[20px] text-[8px] sm:text-xs 2xl:text:base"
          >
            {username} has made <span className="text-[#FDAC31]">{commit}</span>{" "}
            commits in the past year!
            <span>
              {`  \t ⚠️ you need a minimum of 264 commits to qualify for santa's gift`}
            </span>
          </p>
          <Link
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-offset="10"
            to="/"
            className="hover:scale-95 transition-transform"
          >
            <button className="w-[150px] md:w-[170px] h-[40px] md:h-[45px] border-[3px] rounded-[8px] border-b-[#B5761A] border-[#F3A42D] button-bg text-white font-chakra font-medium text-[15.5px]">
              <span className="relative z-[2]">Finish</span>
            </button>
          </Link>
        </div>
      )}
    </>
  );
};

export default GiftReveal;
