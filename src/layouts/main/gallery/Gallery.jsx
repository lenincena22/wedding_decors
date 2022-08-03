import React from "react";

const Gallery = () => {
  return (
    <div className="gallery-content" id="gallery">
      <div className="gallery-content__wrapper">
        <div className="gallery-content__wrapper--left"></div>
        <div className="gallery-content__wrapper--right">
          <p className="gallery-content__title">Gallery US</p>
          <p className="gallery-content__caption">
            We are inspired by your happiness
          </p>
          <p className="gallery-content__description">
            The floristry business has a significant market in the corporate and
            social event world, as flowers play a large part in the decor of
            special events and meetings
          </p>
          <button>VISIT GALLERY</button>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
