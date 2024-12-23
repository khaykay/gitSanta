import React, { useRef, useState } from "react";
import { Route, RouterProvider, Routes } from "react-router-dom";
import Snowfall from "react-snowfall";
import BeginPage from "./Pages/BeginPage";
import ActionPage from "./Pages/ActionPage";
import GiftPage from "./Pages/GiftPage";
import { assets } from "../public/assets/images";
import Aos from "aos";
import "aos/dist/aos.css";

const App = () => {
  Aos.init({
    duration: 1800,
    offset: 80,
  });
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
    <main className="relative h-screen overflow-x-clip">
      <div className="hidden">
        <audio ref={audioRef} src={assets.song} loop className="" />;
      </div>
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
      </Routes>
    </main>
  );
};

export default App;

// import React, { useRef, useState } from "react";
// import ActionPage from "./Pages/ActionPage";
// import { Route, RouterProvider, Routes } from "react-router-dom";
// // import router from "../routes";
// import Snowfall from "react-snowfall";
// import BeginPage from "./Pages/BeginPage";
// import GiftPage from "./Pages/GiftPage";
// import { assets } from "../public/assets/images"

// const App = () => {
//   const audioRef = useRef(null);
//   const [isPlaying, setIsPlaying] = useState(false);
//   const playAudio = () => {
//     if (audioRef.current) {
//       if (isPlaying) {
//         audioRef.current.pause();
//         audioRef.current.currentTime = 0;
//       } else {
//         audioRef.current.play();
//       }
//       setIsPlaying(!isPlaying);
//     }
//   };
//   return (
//     <main className="relative h-screen overflow-x-clip">
//       <audio ref={audioRef} src={assets.song} loop className="hidden" />;
//       <Snowfall
//         speed={[0.5, 0.7]}
//         style={{ zIndex: 5 }}
//         color="rgba(255, 255, 255, 0.911)"
//         snowflakeCount={80}
//         wind={[-0.1, 0.1]}
//       />
//       <Routes>
//         <Route path="/" element={<BeginPage onPress={playAudio} />} />
//         <Route path="/search" element={<ActionPage />} />
//         <Route path="/gift" element={<GiftPage />} />
//       </Routes>
//     </main>
//   );
// };

// export default App;
