import React, { useState } from "react";
import { assets } from "../../public/assets/images";
import { gql, useLazyQuery } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import Light from "../component/Light";

const GET_USER_COMMITS = gql`
  query GetUserCommits($username: String!) {
    user(login: $username) {
      contributionsCollection {
        contributionCalendar {
          totalContributions
        }
      }
    }
  }
`;

const ActionPage = () => {
  const [username, setUsername] = useState("");
  const [fetchCommits] = useLazyQuery(GET_USER_COMMITS);
  const navigate = useNavigate();

  const handleFind = () => {
    if (username.trim() === "") return; // Guard against empty input

    fetchCommits({ variables: { username } })
      .then(({ data }) => {
        navigate("/loader", { state: { username, data } }); // Pass data and username to LoaderPage
      })
      .catch(() => {
        navigate("/loader", { state: { username, data: null } }); // Pass error fallback
      });
  };
  return (
    <div className="h-screen flex justify-center items-center px-3 md:px-0">
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
      <section className=" z-[3] text-center h-[9rem] flex flex-col justify-between gap-5 items-center ">
        <span>
          <h4 className="playfair text-[#FDAC31] text-[1.5rem] md:text-[2.5rem] 2xl:text-[5rem]">
            Are Your Commit Logs Merry And Bright?
          </h4>
          <p className="text-[0.80rem] md:text-[1.35rem] 2xl:text-[2.5rem] text-yellow-50 combo">
            Let’s find out if you’re getting Santa’s seal of approval
          </p>
        </span>
        <span className="relative w-[18.5rem] md:w-[22rem] 2xl:w-[50.5rem] flex justify-center items-center">
          <img
            src={assets.Cap}
            alt=""
            className="absolute h-12 -top-6 -left-5 "
          />
          <span className="w-full sm:w-[98%] h-[2.8rem] bg-slate-300 rounded  2xl:rounded-xl flex gap-1 items-center 2xl:justify-between">
            <input
              type="text"
              placeholder="Enter your github username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="p-2 2xl:p-4 w-[80%] border-0 outline-none font-nunito bg-transparent placeholder:text-slate-500 placeholder:text-sm"
            />
            <button
              onClick={handleFind}
              className={`text-xs bg-red-600 text-white h-[85%] flex justify-center items-center py-3 px-4 rounded  ${
                username.trim() === "" ? "opacity-70 cursor-not-allowed" : ""
              }`}
              disabled={username.trim() === ""}
            >
              FIND
            </button>
          </span>
        </span>
      </section>
    </div>
  );
};

export default ActionPage;
