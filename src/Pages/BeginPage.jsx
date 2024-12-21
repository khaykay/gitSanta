import { assets } from "../../public/assets/images";
import Light from "../component/Light";
import { Link } from "react-router-dom";

const BeginPage = ({ onPress }) => {
  return (
    <main className="h-screen relative flex flex-col justify-center ">
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
              onClick={onPress}
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
            src={assets.speakerIcon}
            className="w-[20px] rotate-180"
            alt=""
          />
          <p className="text-xs sm:text-sm text-white font-chakra text-[13px] tracking-wider">
            BEST EXPERIENCED WITH SOUND
          </p>
          <img src={assets.speakerIcon} className="w-[20px]" alt="" />
        </div>
      </div>
    </main>
  );
};

export default BeginPage;
