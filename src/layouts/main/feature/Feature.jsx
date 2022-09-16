import React from "react";
import divider_title from "../../../assets/divider_title.webp";
import Birthdayevents from "../../../assets/IMG_5729.jpg";
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
            <a href="#gallery">
              <img src={Birthdayevents} alt="" />
              <div className="border"></div>
            </a>
          </div>
          <div className="feature-content__card--caption">
            Birthday events
          </div>
        </div>
        <div className="feature-content__card">
          <div className="feature-content__card--img">
            <a href="#gallery">
              <img src={traditional_weddings} alt="" />
              <div className="border"></div>
            </a>
          </div>
          <div className="feature-content__card--caption">
            Traditional Weddings
          </div>
        </div>
        <div className="feature-content__card">
          <div className="feature-content__card--img">
            <a href="#gallery">
              <img src={themed_weddings} alt="" />
              <div className="border"></div>
            </a>
          </div>
          <div className="feature-content__card--caption">Themed Weddings</div>
        </div>
      </div>
      <div className="feature-content__cards">
        <div className="feature-content__card">
          <div className="feature-content__card--img feature__item__4">
            {/* <img src={pandhal} alt="" /> */}
            <div className="border"></div>
          </div>
          <div className="feature-content__card--caption ">Pandal</div>
        </div>
        <div className="feature-content__card">
          <div className="feature-content__card--img feature__item__5">
            {/* <img src={outdoor} alt="" /> */}
            <div className="border"></div>
          </div>
          <div className="feature-content__card--caption">
            Grand outdoor Wedding
          </div>
        </div>
        <div className="feature-content__card">
          <div className="feature-content__card--img feature__item__6">
            {/* <img src={Garlands} alt="" /> */}
            <div className="border"></div>
          </div>
          <div className="feature-content__card--caption">Garlands</div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
