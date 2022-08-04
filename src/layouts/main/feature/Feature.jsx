import React from "react";
import divider_title from "../../../assets/divider_title.webp";
import contemporary_weddings from "../../../assets/category-contemporary_wedding.jpg";
import traditional_weddings from "../../../assets/category-traditional_wedding.jpg";
import themed_weddings from "../../../assets/category-themed_wedding.jpg";

const Feature = () => {
  return (
    <div className="feature-content" id="feature">
      <div className="feature-content__wrapper">
        <p className="feature-content__caption">
          Let's Plan Your Perfect Wedding
        </p>
        <p className="feature-content__title">WELCOME</p>
        <img
          className="feature-content__divider-img"
          src={divider_title}
          alt=""
        />
      </div>
      <div className="feature-content__cards">
        <div className="feature-content__card">
          <div className="feature-content__card--img">
            <img src={contemporary_weddings} alt="" />
            <div className="border"></div>
          </div>
          <div className="feature-content__card--caption">
            Contemporary Weddings
          </div>
        </div>
        <div className="feature-content__card">
          <div className="feature-content__card--img">
            <img src={traditional_weddings} alt="" />
            <div className="border"></div>
          </div>
          <div className="feature-content__card--caption">
            Traditional Weddings
          </div>
        </div>
        <div className="feature-content__card">
          <div className="feature-content__card--img">
            <img src={themed_weddings} alt="" />
            <div className="border"></div>
          </div>
          <div className="feature-content__card--caption">Themed Weddings</div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
