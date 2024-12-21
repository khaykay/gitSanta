import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "../routes";
import Snowfall from "react-snowfall";

const App = () => {
  return (
    <main className="relative h-screen overflow-x-clip">
      <Snowfall
        speed={[0.5, 0.7]}
        style={{ zIndex: 10 }}
        color="rgba(255, 255, 255, 0.911)"
        snowflakeCount={80}
        wind={[-0.1, 0.1]}
      />
      <RouterProvider router={router} />
    </main>
  );
};

export default App;
