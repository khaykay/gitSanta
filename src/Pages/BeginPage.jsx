import { assets } from "../../public/assets/images";
import Light from "../component/Light";
import { Link } from "react-router-dom";
import { useRef, useState } from "react";

const BeginPage = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const playAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <main className="h-screen relative flex flex-col justify-center ">
      <audio ref={audioRef} src={assets.song} loop className="hidden" />;
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
      <div className="wrapper z-[5] md:mt-[-30px]">
        <div className="header flex flex-col items-center">
          <div className="top flex justify-center items-center gap-3 sm:gap-5">
            <img src={assets.arrowLeft} className="w-[5rem]" alt="" />
            <h3 className="text-grad text-white font-chakra font-semibold text-sm sm:text-[28px] sm:leading-normal">
              Git
            </h3>
            <img src={assets.arrowRight} className="w-[5rem]" alt="" />
          </div>
          <img
            src={assets.santaText}
            className=" w-[65%] sm:w-[57%] md:w-[49%] mt-[15px] rotate-[-0.4deg]"
            alt=""
          />
          <Link
            to="/search"
            className="hover:scale-95 transition-transform mt-[-20px] sm:mt-[-50px] md:mt-[-40px] "
          >
            <button
              onClick={playAudio}
              className="w-[138px] h-[38px] sm:w-[160px] sm:h-[47px] md:w-[220px] md:h-[53px] border-[3px] rounded-[8px] border-b-[#B5761A] border-[#F3A42D] button-bg text-white font-chakra font-semibold  text-center text-xs sm:text-lg"
            >
              BEGIN
            </button>
          </Link>
        </div>
      </div>
      <div className="border-y border-white/35 absolute left-0 bottom-[8dvh] py-[10px] w-full text-center flex justify-center">
        <div className="relative z-[2] flex items-center gap-[15px]">
          <img
            onClick={playAudio}
            src={assets.speackerIcon}
            className="w-[20px] rotate-180"
            alt=""
          />
          <p className="text-xs sm:text-sm text-white font-chakra text-[13px] tracking-wider">
            BEST EXPERIENCED WITH SOUND
          </p>
          <img
            onClick={playAudio}
            src={assets.speackerIcon}
            className="w-[20px]"
            alt=""
          />
        </div>
      </div>
    </main>
    // <main className={`relative h-screen`}>
    //   <audio ref={audioRef} src={assets.song} loop className="hidden" />
    //   <div className="light-holder absolute">
    //     <div className="flex flex-col relative z-[30] mt-[8px]">
    //       <Light className={"scale-[140%]"} />
    //       <Light
    //         className={"rotate-180 hue-rotate-[90deg] mt-[-7px] scale-[110%]"}
    //       />
    //     </div>
    //   </div>
    //   <div className="wrapper bg-red-300 justify-center z-[1] h-fit w-full flex flex-col items-center md:mt-[30px]">
    //     <div className="header z-[2] flex flex-col items-center">
    //       <div className="top flex justify-center items-center gap-5">
    //         <img src={assets.arrowLeft} className="w-[5rem]" alt="" />
    //         <h3 className="text-grad text-white font-chakra font-semibold text-[28px]">
    //           Git
    //         </h3>
    //         <img src={assets.arrowRight} className="w-[5rem]" alt="" />
    //       </div>
    //       <img
    //         src={assets.santaText}
    //         className="w-[57%] mt-[15px] rotate-[-0.4deg]"
    //         alt=""
    //       />
    //       <button className="w-[70%] border-3 border-[#F3A42D] bg-[#AB1E1F]">
    //         BEGIN
    //       </button>
    //       <img
    //         src={assets.BTN}
    //         alt=""
    //         className="begin bg-red-400 scale-[19%] mt-[-160px] hover:scale-[20%] transition-all delay-75"
    //       />
    //     </div>
    //   </div>
    //   <div className="border-y border-white/35 absolute left-0 bottom-[8dvh] py-[10px] w-full text-center flex justify-center">
    //     <div className="relative z-[2] flex items-center gap-[15px]">
    //       <img
    //         onClick={playAudio}
    //         src={assets.speackerIcon}
    //         className="w-[20px] rotate-180"
    //         alt=""
    //       />
    //       <p className=" text-white font-chakra text-[13px] tracking-wider">
    //         BEST EXPERIENCED WITH SOUND
    //       </p>
    //       <img
    //         onClick={playAudio}
    //         src={assets.speackerIcon}
    //         className="w-[20px]"
    //         alt=""
    //       />
    //     </div>
    //   </div>
    // </main>
  );
};

export default BeginPage;
