import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import background from "../assets/main-bg.png";
import { Navigation, Pagination, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


export default function Wallpapers() {
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
      <div className="main-content-container-wallpaper">
        <div className="row1">
        <Swiper
         modules={[Navigation, Pagination, EffectFade]}
          effect={"fade"}
          navigation={true}
          pagination={{
            clickable: true
          }}
          loop={true}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="bg bg1"></div>
            {/* <img src="https://swiperjs.com/demos/images/nature-1.jpg" /> */}
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg bg2"></div>
            {/* <img src="https://swiperjs.com/demos/images/nature-2.jpg" /> */}
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg bg3"></div>
            {/* <img src="https://swiperjs.com/demos/images/nature-3.jpg" /> */}
          </SwiperSlide>
        </Swiper>
        </div>
      </div>
    </div>
  );
}
