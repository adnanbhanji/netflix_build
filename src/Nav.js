import React, { useEffect, useState } from "react";
import "./Nav.css";
import { BiSearchAlt } from "react-icons/bi";
import { AiFillBell } from "react-icons/ai";
import { BiSolidDownArrow } from "react-icons/bi";

const Nav = () => {
  const [bgBlack, setBgBlack] = useState(false);

  const setBackground = () => {
    if (window.scrollY > 100) {
      console.log("more");
      setBgBlack(true);
    } else {
      setBgBlack(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", setBackground);
    return () => window.removeEventListener("scroll", setBackground);
  }, []);

  return (
    <div>
      <div className={`nav__content ${bgBlack && "nav__black"} `}>
        <img
          className="logo"
          src="https://images.ctfassets.net/y2ske730sjqp/6bhPChRFLRxc17sR8jgKbe/6fa1c6e6f37acdc97ff635cf16ba6fb3/Logos-Readability-Netflix-logo.png"
          alt="logo"
        />
        <div className="text">
          <p>Home</p>
          <p>TV Shows</p>
          <p>Movies</p>
          <p>News & Popular</p>
          <p>My list</p>
          <p>Browse by languages</p>
        </div>
        <div className="icons">
          <BiSearchAlt className="icon" />
          <AiFillBell className="icon" />
        </div>
        <div className="icons-end">
          <BiSolidDownArrow className="icontwo" />
        </div>
        <img
          className="user"
          src="https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-88wkdmjrorckekha.jpg"
          alt="user"
        />
      </div>
    </div>
  );
};

export default Nav;
