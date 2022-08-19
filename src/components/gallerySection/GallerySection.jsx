import React from "react";
import Navbar from "../navbar/Navbar";
import { Footer } from "../../layouts";

const GallerySection = () => {
  return (
    <div>
      <Navbar />
      <div className="header__cont">
        <div className="inner_cont">
          <h1 className="gallery__head">Gallery Grid</h1>
          <h2 className="gallery_subhead">Home | Gallery Section</h2>

        </div>
      </div>
      <div class="image-grid">
        <div class="image-row">
          <div class="image image-01"></div>
          <div class="image image-02"></div>
          <div class="image image-03"></div>
        </div>
        <div class="image-row">
          <div class="image image-04"></div>
          <div class="image image-05"></div>
        </div>
        <div class="image-row">
          <div class="image image-06"></div>
          <div class="image image-07"></div>
          <div class="image image-08"></div>
          <div class="image image-09"></div>
        </div>
        <div class="image-row">
          <div class="image image-10"></div>
          <div class="image image-11"></div>
          <div class="image image-12"></div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default GallerySection;
