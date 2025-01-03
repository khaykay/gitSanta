import React, { useRef, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Snowfall from "react-snowfall";
import BeginPage from "./Pages/BeginPage";
import ActionPage from "./Pages/ActionPage";
import GiftPage from "./Pages/GiftPage";
import { assets } from "../public/assets/images";
import Aos from "aos";
import "aos/dist/aos.css";
import Loader from "./component/Loader";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import Preloader from "./Pages/Preloader";
import NewLoader from "./component/NewLoader";
import TryAgain from "./component/TryAgain";

const token = import.meta.env.VITE_GITHUB_TOKEN;
const client = new ApolloClient({
  uri: "https://api.github.com/graphql", // GitHub GraphQL API endpoint
  headers: {
    Authorization: ` Bearer ${token}`, // Replace with your token
  },
  cache: new InMemoryCache(),
});
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
    <ApolloProvider client={client}>
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
          <Route path="/loader" element={<Preloader />} />
        </Routes>
      </main>
    </ApolloProvider>
  );
};

export default App;
