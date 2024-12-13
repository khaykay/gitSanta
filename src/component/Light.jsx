import Lottie from "lottie-react";
import lightImage from "../../public/assets/light.json";

function Light({ className }) {
  return (
    <Lottie animationData={lightImage} className={` ${className} w-full`} />
  );
}

export default Light;
