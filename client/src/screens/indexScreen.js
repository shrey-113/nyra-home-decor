import React, { Component } from "react";
import Header from "../components/Header";
import background from "../assets/main-bg.png";
import image from "../assets/img1.png";
import { Link } from "react-router-dom";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ReactDOM from 'react-dom';

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
            <a><Link to="/wallpapers">Wallpaper</Link></a>
            <a><Link to="/flooring">Flooring</Link></a>
            <a><Link to="/binds">Binds</Link></a>
            <a><Link to="/furnishing">Furinshing</Link> </a>
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
          <Carousel className="carousel-main"
          autoPlay
          infiniteLoop
          swipeable
          useKeyboardArrows
          >
                <div>
                    <img src="https://images.unsplash.com/photo-1487088678257-3a541e6e3922?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                    {/* <p className="legend">Legend 1</p> */}
                </div>
                <div>
                    <img src="https://images.unsplash.com/photo-1487088678257-3a541e6e3922?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                    {/* <p className="legend">Legend 2</p> */}
                </div>
                <div>
                    <img src="https://images.unsplash.com/photo-1472289065668-ce650ac443d2?auto=format&fit=crop&q=80&w=2069&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                    {/* <p className="legend">Legend 3</p> */}
                </div>
            </Carousel>
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
