import React from "react";
import heroLanding from "../assets/heroLanding.png";
import videobg from "../assets/videobg.mp4"
import logobg from "../assets/CONCERT GO6.png"

const Home = () => {
  return (
    <>
      <div class="bg">
        {/* <img src={heroLanding} alt="landing page bg" className="w-screen" /> */}
        <div class="video-container">
        <video src={videobg} autoPlay loop muted />
        <div class="overlay"></div>
        </div>
        <div class="bgtext">
         <img src={logobg} />
        </div>
      </div>
    </>
  );
};

export default Home;
