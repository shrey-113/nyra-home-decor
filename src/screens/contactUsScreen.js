import React from "react";
import Header from "../components/Header";
import background from "../assets/main-bg.png";
import image from "../assets/img1.png";

export default function ContactUsScreen() {
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
        </div>

        <div className="two-column-layout">
          <div className="column"></div>

          <div className="column">
            <div
              className="map-div"
              style={{ marginLeft: "0", marginTop: "2rem" }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.800927996018!2d77.3599368!3d28.6357279!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfb536f9e861d%3A0x3dec5676305709e5!2sNYRA%20HOME%20DECOR!5e0!3m2!1sen!2sin!4v1697137109458!5m2!1sen!2sin"
                width="600"
                height="450"
                style={{ border: "0" }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
