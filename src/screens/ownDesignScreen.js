import React from "react";
import Header from "../components/Header";
import background from "../assets/main-bg.png";
import image from "../assets/img1.png";

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
            <a>Wallpaper</a>
            <a>Flooring</a>
            <a>Binds</a>
            <a>Furnishing</a>
          </div>
        </div>
        <div className="main-content-container">
          <div className="leftcolumn">
            <div className="indexscreen-heading">
              <div>Name of the Design</div>
            </div>
            
            <form>
                
            </form>
          </div>

          <div className="rightcolumn">
            <div className="indexscreen-image-new">
              <img src={image} alt="Your Image" className="full-size-image" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
