import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Header from "../components/Header";
import background from "../assets/main-bg.png";
import CustomSlider from "../Slider/Components/custom.slider";

export default function Browse() {
  const [imageData, setImageData] = useState([]);
  const [trendingImageData, setTrendingImageData] = useState([]);
  const apiurl = process.env.REACT_APP_API_URL;
  const { type } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const getImages = async () => {
      let category = "";
      if (type === "wallpapers") {
        category = "wallpaper";
      } else if (type === "blinds") {
        category = "blind";
      } else {
        category = type;
      }

      setImageData([]);
      setTrendingImageData([]);

      try {
        const queryParams = new URLSearchParams({
          designType: `${category}`,
        }).toString();
        const response = await fetch(`${apiurl}/design/type?${queryParams}`);
        const response2 = await fetch(
          `${apiurl}/design/trending?${queryParams}`
        );

        if (response.ok) {
          const data = await response.json();
          setImageData(data);
        } else {
          console.error("Failed to fetch data.");
          setImageData([]);
        }

        if (response2.ok) {
          const data2 = await response2.json();
          setTrendingImageData(data2);
        } else {
          console.error("Failed to fetch data.");
          setTrendingImageData([]);
        }

        if (!response.ok && !response2.ok) {
          navigate("/");
        }
      } catch (error) {
        console.log(error);
      }
    };

    getImages();
  }, [type]);

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
        <div className="info-container">
          <div className="info">
            <a>
              <Link to="/wallpapers">
                <span className={type === "wallpapers" ? "selected-color" : ""}>
                  Wallpaper
                </span>
              </Link>
            </a>
            <a>
              <Link to="/flooring">
                <span className={type === "flooring" ? "selected-color" : ""}>
                  Flooring
                </span>
              </Link>
            </a>
            <a>
              <Link to="/blinds">
                <span className={type === "blinds" ? "selected-color" : ""}>
                  Blinds
                </span>
              </Link>
            </a>
            <a>
              <Link to="/furnishing">
                <span className={type === "furnishing" ? "selected-color" : ""}>
                  Furnishing
                </span>
              </Link>
            </a>
          </div>
        </div>
      </div>
      <div className="main-content-container">
        <div className="slider-component">
          <CustomSlider>
            {trendingImageData.map((image, index) => {
              return (
                <img
                  key={index}
                  src={`${apiurl}/${image.imgurl}`}
                  alt={image.description}
                  id={image.id}
                  name={image.name}
                />
              );
            })}
          </CustomSlider>
        </div>
        <div className="all-images">
          {imageData.map((image, index) => (
            <div className="small-image-container" key={index}>
              <Link to={`product/${image.id}`}>
                <img
                  key={index}
                  src={`${apiurl}/${image.imgurl}`}
                  alt={image.description}
                  id={image.id}
                  name={image.name}
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
