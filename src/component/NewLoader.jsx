import React from "react";


function NewLoader() {
  return (
    <div className="relative z-[2]  bg-[#5a1714] h-screen w-full flex justify-center items-center">
    
      <img
        src="/assets/main-loader.gif"
        className="max-w-[350px] w-[70%]"
        alt=""
      />
    </div>
  );
}

export default NewLoader;
