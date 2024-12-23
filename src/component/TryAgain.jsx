import React from "react";
import { assets } from "../../public/assets/images";

function TryAgain() {
  return (
    <div className="flex flex-col justify-center items-center">
      <img
        data-aos="fade-up"
        data-aos-delay="100"
        data-aos-offset="10"
        src={assets.SadSanta}
        className="w-[80px] md:w-[160px]"
        alt=""
      />
      <h1
        data-aos="fade-up"
        data-aos-delay="300"
        data-aos-offset="10"
        className="text-white font-young text-[1.5rem] md:text-[2rem] text-center leading-[2.5rem] font-extralight mt-[15px]"
      >
        Yikes!
      </h1>
      <p
        data-aos="fade-up"
        data-aos-delay="400"
        data-aos-offset="10"
        className="font-nunito text-white/90 text-[13px] font-medium uppercase mb-[-5px] text-center mt-[4px] "
      >
        Better Luck Next Time.
      </p>
    </div>
  );
}

export default TryAgain;
