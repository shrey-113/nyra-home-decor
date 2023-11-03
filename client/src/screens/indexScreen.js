import React, { Component, useEffect, useState } from "react";
import Header from "../components/Header";
import background from "../assets/main-bg.png";
import { Link, useNavigate } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ReactDOM from "react-dom";

export default function IndexScreen() {
  const [imageData, setImageData] = useState([]);
  const navigate = useNavigate();

  const apiurl = process.env.REACT_APP_API_URL; 

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(`${apiurl}/design/get`);

        if (response.ok) {
          const data = await response.json();
          console.log("DATAAAAAAAAAAAAAAAAAA", data);

          setImageData(data);
        } else {
          console.error("Failed to fetch data.");
        }
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, []);

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
          <div className="leftcolumn">
          <div className="indexscreen-image-new one">
              <Carousel
                className="carousel-main"
                autoPlay
                interval={2000}
                infiniteLoop
                swipeable
                useKeyboardArrows
                showThumbs={false}
                showStatus={false}
                showArrows={false}
              >
                {imageData?.map((image, index) => {
                  const type =
                    image.type === "wallpaper"
                      ? "wallpapers"
                      : image.type === "bind"
                      ? "blinds"
                      : image.type;
                  return (
                    <div
                      key={index}
                      onClick={() => {
                        navigate(`/${type}`);
                      }}
                    >
                      <img
                        key={index}
                        src={`${apiurl}/${image.imgurl}`}
                        alt={image.description}
                        id={image.id}
                        name={image.name}
                      />
                    </div>
                  );
                })}
              </Carousel>
            </div>
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
            <div className="indexscreen-text-new">
              Welcome to Nyra Home Decor, your one-stop destination for
              exquisite home decor solutions. Explore our wide range of stunning
              wallpapers, elegant blinds, premium floorings, and luxurious
              furnishing products. Transform your living spaces into stylish
              havens with our curated selection. Discover the perfect blend of
              beauty and luxury
            </div>
            
            <div className="button-container">
              <Link to="/wallpaper">
                <button className="explore-button">
                  <span className="explore-text">Explore</span>
                  <div className="explore-line"></div>
                  <span className="explore-icon"></span>
                </button>
              </Link>
            </div>
          </div>
          <div className="rightcolumn">
            <div className="indexscreen-image-new two">
              <Carousel
                className="carousel-main"
                autoPlay
                interval={2000}
                infiniteLoop
                swipeable
                useKeyboardArrows
                showThumbs={false}
                showStatus={false}
                showArrows={false}
              >
                {imageData?.map((image, index) => {
                  const type =
                    image.type === "wallpaper"
                      ? "wallpapers"
                      : image.type === "bind"
                      ? "blinds"
                      : image.type;
                  return (
                    <div
                      key={index}
                      onClick={() => {
                        navigate(`/${type}`);
                      }}
                    >
                      <img
                        key={index}
                        src={`${apiurl}/${image.imgurl}`}
                        alt={image.description}
                        id={image.id}
                        name={image.name}
                      />
                    </div>
                  );
                })}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
