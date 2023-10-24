import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import background from "../assets/main-bg.png";
import images from "../Slider/Data/images";
import CustomSlider from "../Slider/Components/custom.slider";

export default function Flooring() {
  return (
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
            <Link to="/binds">Binds</Link>
          </a>
          <a>
            <Link to="/furnishing">Furinshing</Link>{" "}
          </a>
        </div>
      </div>
      <div className="main-content-container">
        <CustomSlider>
          {images.map((image, index) => {
            return <img key={index} src={image.imgURL} alt={image.imgAlt} />;
          })}
        </CustomSlider>
      </div>
    </div>
  );
}
