import React from "react";
import videobg from "../assets/videobg.mp4"
import logobg from "../assets/CONCERT GO6.png"

const Home = () => {
  return (
    <>
      <div className="bg">
        <div className="video-container">
        <video src={videobg} alt="background-video" autoPlay loop muted />
        <div className="overlay"></div>
        </div>
        <div className="bgtext">
         <img src={logobg} alt="background-image" />
        </div>
      </div>
    </>
  );
};

export default Home;
