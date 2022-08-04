import React from "react";
import "./about.css";
// import about_us from "../../../assets/about_us.jpg";
import vector_img from "../../../assets/vector-smart-object.png"

const About = () => {
  // const images = document.querySelectorAll(".slide"),
  //   next = document.querySelector(".next"),
  //   prev = document.querySelector(".prev");

  // let current = 0;\

  // function changeImage() {
  //   images.forEach((img) => {
  //     img.classList.remove("show");
  //     img.style.display = "none";
  //   });

  //   images[current].classList.add("show");
  //   images[current].style.display = "block";
  // }

  // // Calling first time
  // changeImage();

  // next.addEventListener("click", function () {
  //   current++;

  //   if (current > images.length - 1) {
  //     current = 0;
  //   } else if (current < 0) {
  //     current = images.length - 1;
  //   }

  //   changeImage();
  // });
  // prev.addEventListener("click", function () {
  //   current--;

  //   if (current > images.length - 1) {
  //     current = 0;
  //   } else if (current < 0) {
  //     current = images.length - 1;
  //   }

  //   changeImage();
  // });

  // // Auto change in 5 seconds

  // setInterval(() => {
  //   next.click();
  // }, 5000);

  return (
    <div className="about-content" id="about">
      <div className="about-content__wrapper">
        <div className="about-content__wrapper--left">
          <p className="about-content__title">ABOUT US</p>
          <p className="about-content__caption">
            We Plan & Design Weddings That Capture the Imagination
          </p>
          <img className="about-content__vector-img" src={vector_img} alt="" />
          <p className="about-content__description">
            Weddings are significant events in people’s lives and as such,
            couples are often willing to spend considerable amount of money to
            ensure that their weddings are well-organized. Wedding planners are
            often used by couples who work long hours and have little spare time
            available for sourcing and managing wedding venues.
          </p>
          <button className="about-content__btn">MORE ABOUT US</button>
        </div>
        <div className="about-content__wrapper--right">
          {/* <div className="slider">
            <div className="slide">
              <img src={about_us} alt="" />
              <div className="caption">Caption First</div>
            </div>
            <div className="slide">
              <img src={about_us} alt="" />
              <div className="caption">Caption Second</div>
            </div>
            <div className="slide">
              <img src={about_us} alt="" />
              <div className="caption">Caption Third</div>
            </div>
            <div className="slide">
              <img src={about_us} alt="" />
              <div className="caption">Caption Fourth</div>
            </div>
            <div className="slide">
              <img src={about_us} alt="" />
              <div className="caption">Caption Fifth</div>
            </div>

            <a className="prev">&#10094;</a>
            <a className="next">&#10095;</a>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default About;
