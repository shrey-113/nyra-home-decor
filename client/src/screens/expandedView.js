import React from "react";
import Header from "../components/Header";
import background from "../assets/main-bg.png";
import image from "../assets/img1.png";
import { Link } from "react-router-dom";

function ExpandedView() {
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
              <div>Name of the Design</div>
            </div>
            
            <form> 
                
            </form>
          </div>

          <div className="rightcolumn-expanded">
            <div className="indexscreen-image-new-expanded">
              <img src={'https://images.unsplash.com/photo-1472289065668-ce650ac443d2?auto=format&fit=crop&q=80&w=2069&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} alt="Your Image" className="full-size-image-expanded" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ExpandedView