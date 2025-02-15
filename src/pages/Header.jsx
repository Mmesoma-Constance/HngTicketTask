import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "./../assets/logo.png";

const Header = () => {
  return (
    <header class="header">
      <div>
        <img src={logo} alt="logo" width="70" height="30" />
      </div>
      <div class="nav-links">
        <a href="">Events</a>
        <a href="">My Tickets</a>
        <a href="">About Project</a>
      </div>
      <button class="button">
        My Tickets <i class="arrow-icon"></i>
      </button>
    </header>
  );
};

export default Header;
