import React from "react";
import Header from "../components/Header";
import background from "../assets/main-bg.png";
import { BsFillTelephoneFill } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";

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

        <div className="main-content-container">
          <div className="leftcolumn contact-us-details">
            <div className="indexscreen-heading we-are-OP">We are open @</div>

            <div className="indexscreen-text-new address" style={{ marginTop: "20px" }}>
              557G, opposite Bikaner Sweets, <br />
              Makanpur, Nyay Khand 2,
              <br />
              Indirapuram, Ghaziabad, <br />
              Uttar Pradesh - 201014
              <br />
            </div>

            <div
              className="contact-info-container"
              style={{ marginTop: "2rem" }}
            ></div>

            <div className="contact-info" style={{ fontSize: "1.5rem" }}>
              <BsFillTelephoneFill /> &nbsp; +91 87997 72844
            </div>
            <div className="contact-info" style={{ fontSize: "1.5rem" }}>
              <AiOutlineMail /> &nbsp; enquiry@nyrahome.in
            </div>
          </div>

          <div className="rightcolumn map-right">
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
