import React from "react";
import Wrapper from "../sections/Wrapper";
import avatarImage from "../assets/kishan.jpeg";
import { FaYoutube, FaGithub, FaLinkedin } from "react-icons/fa";

function About() {
  return (
    <div className="profile">
      <img src="https://avatars.githubusercontent.com/u/125589119?s=400&u=2a9c389ebf32fe0f9cb84fc4f52d4e3023c7683a&v=4" alt="" className="profile-image" />
      <h1 className="profile-text">Hi I am abdullah</h1>
      <h2 className="profile-text">The creator of this awesome pokedex</h2>

      <div className="profile-links">
        <a href="https://github.com/abdallaroom100">
          <FaGithub />
        </a>

        <a href="https://www.linkedin.com/in/abdalla-room-09991126a/">
          <FaLinkedin />
        </a>
      </div>
    </div>
  );
}

export default Wrapper(About);
