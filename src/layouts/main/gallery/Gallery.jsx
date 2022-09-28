import React from "react";
import gallery_bg from "../../../assets/gallery-bg.jpg"
import vector_img from "../../../assets/vector-smart-object.png"
import {  Link } from "react-router-dom";

const Gallery = () => {
  return (
    <div className="gallery-content" id="gallery">
      <div className="gallery-content__wrapper">
        <div className="gallery-content__wrapper--left">
          <img className="gallery-content__bg-img" src={gallery_bg } alt="" />
        </div>
        <div className="gallery-content__wrapper--right">
          <p className="gallery-content__title">Gallery US</p>
          <p className="gallery-content__caption">
            We are inspired by your happiness
          </p>
          <img className="gallery-content__vector-img" src={vector_img} alt="" />
          <p className="gallery-content__description">
            The floristry business has a significant market in the corporate and
            social event world, as flowers play a large part in the decor of
            special events and meetings
          </p>
          
          <Link className="about-content__btn" to='/wedding_decors/gallery'>VISIT GALLERY</Link>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
