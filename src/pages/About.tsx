import React from "react";
import Wrapper from "../sections/Wrapper";
import avatarImage from "../assets/ash.png";
import {  FaGithub, FaLinkedin } from "react-icons/fa";

function About() {
  return (
    <div className="profile">
      <img src={avatarImage} alt="" className="profile-image" />
      <h2 className="profile-text">Hi, we are Toshit Pant and Aman Kumar</h2>
      <h3 className="profile-text">The creator of this awesome pokedex</h3>
      <h4 className="profile-text">
      We built this project together with passion and dedication for kids.
      </h4>
      <div className="profile-links">
        <a href="https://github.com/pant5803">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/toshit-pant-938b0a256/">
          <FaLinkedin />
        </a>
        <a href="https://github.com/alpha7250">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/aman-kumar-781b04244/">
          <FaLinkedin />
        </a>
      </div>
    </div>
  );
}

export default Wrapper(About);
