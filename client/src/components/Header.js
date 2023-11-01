import React from "react";
import "./componentscss.css";
import "../App.css";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();

  return (
    <header>
      <div className="nyra-home-decor-original">
        <Link className="nyra-home-decor-link" to="/">
          <span className="nyra-home-decor-red">N</span>
          <span className="nyra-home-decor-violet">YRA</span>
          <span className="nyra-home-decor-HOME">
            &nbsp;HOME DECOR
          </span>
        </Link>
      </div>
      <ul className="nav-items">
        <li>
          <Link to="/" className={location.pathname === '/' ? 'header--link selected' : 'header--link'}>
            HOME
          </Link>
        </li>
        <li>
          <Link to="/own" className={location.pathname === '/own' ? 'header--link selected' : 'header--link'}>
            OWN DESIGN?
          </Link>
        </li>
        <li>
          <Link to="/contact" className={location.pathname === '/contact' ? 'header--link selected' : 'header--link'}>
            CONTACT US
          </Link>
        </li>
      </ul>
    </header>
  );
}
