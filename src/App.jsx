import React, { useRef, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Snowfall from "react-snowfall";
import BeginPage from "./Pages/BeginPage";
import ActionPage from "./Pages/ActionPage";
import GiftPage from "./Pages/GiftPage";
import { assets } from "../public/assets/images";
import Loader from "./component/Loader";

const App = () => {
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
    <main className="">
      {/* <audio ref={audioRef} src={assets.song} loop className="hidden" />; */}
      <Snowfall
        speed={[0.5, 0.7]}
        style={{ zIndex: 5 }}
        color="rgba(255, 255, 255, 0.911)"
        snowflakeCount={80}
        wind={[-0.1, 0.1]}
      />
      <Routes>
        <Route path="/" element={<BeginPage onPress={playAudio} />} />
        <Route path="/search" element={<ActionPage />} />
        <Route path="/gift" element={<GiftPage />} />
        <Route path="/loader" element={<Loader />} />
      </Routes>
    </main>
  );
};

export default App;
