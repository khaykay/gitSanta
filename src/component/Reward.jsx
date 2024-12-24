import React, { useEffect, useState } from "react";
import ConfettiExplosion from "react-confetti-explosion";
import { assets } from "../../public/assets/images";

function Reward({ isVisible }) {
  const [showConfetti, setShowConfetti] = useState(false);
  useEffect(() => {
    if (isVisible) {
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 3500);
    }
  }, [isVisible]);

  return (
    <>
      <div className="absolute top-[30%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        {showConfetti && (
          <ConfettiExplosion
            zIndex={5}
            force={0.8}
            width={1000}
            particleCount={250}
            duration={3500}
            particleSize={6}
          />
        )}
      </div>
      <div>
        <p
          data-aos="fade-up"
          data-aos-delay="300"
          className="font-young text-white/90 text-[13px] uppercase mb-[1px] text-center"
        >
          You Got a
        </p>
        <h1
          data-aos="fade-up"
          data-aos-delay="300"
          className="text-white font-young text-[1.5rem] md:text-[2rem] text-center leading-[2.5rem] font-extralight"
        >
          Santa Medal
        </h1>
      </div>
      <img
        data-aos="fade-up"
        data-aos-delay="300"
        data-aos-offset="10"
        src={assets.medal}
        className="w-[200px] md:w-[230px]"
        alt=""
      />
    </>
  );
}

export default Reward;
