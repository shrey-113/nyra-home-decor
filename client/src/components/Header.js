import React from "react";
import "./componentscss.css";
import "../App.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <div className="nyra-home-decor-original">
        <Link  className="nyra-home-decor-link" to="/">
          <span className="nyra-home-decor-red">N</span>
          <span className="nyra-home-decor-violet">YRA</span> &nbsp; HOME DECOR
        </Link>
      </div>
      <ul className="nav-items">
        <li>
          <Link to="/" className="header--link selected">
            HOME
          </Link>
        </li>
        <li>
          <Link to="/own">OWN DESIGN?</Link>
        </li>
        <li>
          <Link to="/contact">CONTACT US</Link>
        </li>
      </ul>
    </header>
  );
}
