import React from "react";
import Header from "../components/Header";
import background from "../assets/main-bg.png";
import image from "../assets/img1.png";
import { Link } from "react-router-dom";

export default function OwnDesignScreen() {
  return (
    <>
      <div
        className="main--card bg-contain bg-center"
        style={{
          backgroundImage: `url(${background})`,
        }}
      >
        <div className="navbar">
          <div>
            <Header />
          </div>

          <div className="info">
            <a>
              <Link to="/wallpapers">Wallpaper</Link>
            </a>
            <a>
              <Link to="/flooring">Flooring</Link>
            </a>
            <a>
              <Link to="/blinds">Blinds</Link>
            </a>
            <a>
              <Link to="/furnishing">Furinshing</Link>{" "}
            </a>
          </div>
        </div>
        <div className="main-content-container">
          {/* <div className="leftcolumn">
            <div className="indexscreen-heading">
              <div>Name of the Design</div>
            </div>

            <form></form>
          </div>

          <div className="rightcolumn">
            <div className="indexscreen-image-new">
              <img src={image} alt="Your Image" className="full-size-image" />
            </div>
          </div> */}
          <div
            style={{
              display: "flex",
              margin: "auto",
              background:
                "linear-gradient(180deg,ffd600 0%,#d26c6a 0.01%,#600f18 100%)",
            }}
          >
            <h1 className="cumming-soon"> Coming Soon <span>...</span> </h1>
          </div>
        </div>
      </div>
    </>
  );
}
