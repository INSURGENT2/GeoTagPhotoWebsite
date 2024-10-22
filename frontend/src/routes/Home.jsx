import React from "react";
import { useAuth } from "../context/AuthContext"; // Adjust import path
import Sidebar from "./Sidebar"; // Adjust import path
import "./Home.css";
import img1 from "/src/assets/img1.png";

const Home = () => {
  const { isLoggedIn } = useAuth(); // Get isLoggedIn from context

  return (
    <div className="home-page">
      <div className="home-layout">
        {isLoggedIn && <Sidebar />} {/* Conditionally render the Sidebar */}
        <div className="home1">
          <h1>Welcome to Photo Geo Tag Website</h1>
          <img className="img" src={img1} alt="Geo Tag" />
        </div>
      </div>
    </div>
  );
};

export default Home;
