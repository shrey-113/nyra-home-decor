import React from "react";

export default function Header() {
  return (
    <header>
      <div className="nyra-home-decor-original">
        <span className="nyra-home-decor-red">N</span>
        <span className="nyra-home-decor-violet">YRA</span> &nbsp; HOME DECOR
      </div>
      <ul className="nav-items">
        <li className="selected">HOME</li>
        <li>OWN DESIGN?</li>
        <li>CONTACT US</li>
      </ul>
    </header>
  );
}
