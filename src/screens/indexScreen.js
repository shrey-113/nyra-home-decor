import React from "react";
import Header from "../components/Header";

export default function IndexScreen() {
  return (
    <>
      <div className="main--card">
        <Header />
        <div className="info">
          <a>Wallpaper</a>
          <a>Flooring</a>
          <a>Binds</a>
          <a>Furnishing</a>
        </div>
      </div>
    </>
  );
}
