import React from "react";
import Header from "../components/Header";
import background from "../assets/main-bg.png";
import image from "../assets/img1.png";

export default function IndexScreen() {
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
          <a>Wallpaper</a>
          <a>Flooring</a>
          <a>Binds</a>
          <a>Furnishing</a>
        </div>
        </div>

        <div className="two-column-layout">
          <div className="column">
            <div
              style={{
                margin: "4rem auto",
                marginLeft: "4rem",
                marginBottom: "2rem",
                width: "19.833rem",
              }}
            >
              <div className="indexscreen-heading">
                Renovating{" "}
                <span className="indexscreen-heading-lighter">Your</span> Home{" "}
                <span className="indexscreen-heading-lighter">
                  Made Simpler
                </span>
              </div>
            </div>

            <div
              className="indexscreen-text"
          
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </div>
          </div>

          <div className="column">
            <div className="indexscreen-image">
              <img src={image} alt="Your Image" className="full-size-image" />
            </div>
          </div>
        </div>
        <div className="button-container">
          <button className="explore-button">
            <span className="explore-text">Explore</span>
            <div className="explore-line"></div>
            <span className="explore-icon">&#xf178;</span>
          </button>
        </div>
      </div>
    </>
  );
}
