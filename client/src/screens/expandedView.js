import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import background from "../assets/main-bg.png";
import { Link, useParams } from "react-router-dom";

function ExpandedView() {
  const { productId, type } = useParams();

  const [productData, setProductData] = useState({});
  const apiurl = process.env.REACT_APP_API_URL;

  useEffect(() => {
    const getData = async () => {
      try {
        const queryParams = new URLSearchParams({
          designId: `${productId}`,
          designType: `${type}`,
        }).toString();
        const response = await fetch(
          `${apiurl}/design/specific?${queryParams}`
        );

        if (response.ok) {
          const data = await response.json();
          setProductData(data);
        } else {
          console.error("Failed to fetch data.");
        }
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, []);

  console.log(productData);

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
          <div className="leftcolumn leftnew">
            <div className="indexscreen-heading">
              <div className="indexscreen-heading-expanded">
                {productData.id || "LOADING"}
              </div>
            </div>

            <form className="indexscreen-text-new index-text-expanded">
              {productData.description || "LOADING"}
            </form>

            <button className="Button-know-more">
            <a href="tel:+918799772844">
              Click Here to know More!
              </a>
            </button>
          </div>

          <div className="rightcolumn-expanded">
            <div className="indexscreen-image-new-expanded">
              <img
                src={`${apiurl}/${productData.imgurl}`}
                alt={productData.id || "LOADING"}
                className="full-size-image-expanded"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ExpandedView;
