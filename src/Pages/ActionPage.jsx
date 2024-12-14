import React from "react";
import { assets } from "../../public/assets/images";

const ActionPage = () => {
  return (
    <div className="h-screen flex justify-center items-center px-3 md:px-0">
      <section className="z-10 text-center h-[8.8rem] flex flex-col justify-between items-center">
        <span className="hidden">
          <h4 className="font-christmas text-[#FDAC31] text-[1.5rem] md:text-[2.5rem] 2xl:text-[5rem] ">
            Are Your Commit Logs Merry And Bright?
          </h4>
          <p className="text-[0.80rem] md:text-[1.35rem] 2xl:text-[2.5rem] text-yellow-50 font-nunito font-normal">
            Let’s find out if you’re getting Santa’s seal of approval
          </p>
        </span>
        <span>
          <h4 className="playfair text-[#FDAC31] text-[1.5rem] md:text-[2.5rem] 2xl:text-[5rem] ">
            Are Your Commit Logs Merry And Bright?
          </h4>
          <p className="text-[0.80rem] md:text-[1.35rem] 2xl:text-[2.5rem] text-yellow-50 combo">
            Let’s find out if you’re getting Santa’s seal of approval
          </p>
        </span>
        <span className="relative w-[18.5rem] md:w-[22rem] 2xl:w-[50.5rem]">
          <img
            src={assets.Cap}
            alt=""
            className="absolute h-12 -top-5 -left-6"
          />
          <span className="w-[95%] h-[2.8rem] bg-slate-300 block rounded  2xl:rounded-xl flex  gap-1">
            <input
              type="text"
              name=""
              id=""
              placeholder="Enter your github username"
              className=" p-2 2xl:p-4 w-[90%] bg-transparent placeholder:text-slate-500 placeholder:text-xs"
            />
            <button className="text-xs bg-red-600 text-white h-[90%] ">
              FIND
            </button>
          </span>
        </span>
      </section>
    </div>
  );
};

export default ActionPage;
