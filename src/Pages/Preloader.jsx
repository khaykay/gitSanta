import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Loader from "../component/Loader";

const Preloader = () => {
  const navigate = useNavigate();
  const { state } = useLocation(); // State contains `username` and `data`

  useEffect(() => {
    const timeout = setTimeout(() => {
      // Navigate to gift page with data passed
      navigate("/gift", { state });
    }, 11000);

    return () => clearTimeout(timeout);
  }, [navigate, state]);

  return (
    <div className="h-screen flex justify-center items-center">
      <Loader />
    </div>
  );
};

export default Preloader;
