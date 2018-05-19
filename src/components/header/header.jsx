import React from "react";
import { Link } from "react-router-dom";
import logo from "../../logo.svg";
import "./header.css";


const Header = () => (
  <header className="header">
    <ul className="header__navbar">
      <li>
        <Link className="header__link" to="/">Home</Link>
      </li>
      <li>
        <Link className="header__link" to="/about">About</Link>
      </li>
    </ul>
    <img src={logo} className="header__logo" alt="logo" />
    <h1 className="header__title">Welcome to Cost-vironment</h1>
  </header>
);

export default Header;
