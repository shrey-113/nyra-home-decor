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
        <div className="main-content-container">
          <div className="leftcolumn">
            <div className="indexscreen-heading">
              <div>Renovating </div>
              <div>
                <span className="indexscreen-heading-lighter">Your</span> Home{" "}
              </div>
              <div>
                <span className="indexscreen-heading-lighter">
                  Made Simpler
                </span>
              </div>
            </div>
            <div className="indexscreen-text-new" >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, tenetur.
              </div>
          </div>
          <div className="rightcolumn">
          <div className="indexscreen-image-new">
              <img src={image} alt="Your Image" className="full-size-image" />
            </div>
          </div>
        </div>
        {/* <div className="button-container">
          <button className="explore-button">
            <span className="explore-text">Explore</span>
            <div className="explore-line"></div>
            <span className="explore-icon">&#xf178;</span>
          </button>
        </div> */}
      </div>
    </>
  );
}
