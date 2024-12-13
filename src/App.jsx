import React from "react";
// import ActionPage from "./Pages/ActionPage";
import { RouterProvider } from "react-router-dom";
import router from "../routes";
import Snowfall from "react-snowfall";
import Light from "./component/Light";

const App = () => {
  return (
    <main className="relative h-fit overflow-x-clip">
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
