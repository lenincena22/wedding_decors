import React from "react";
import "./about.css";

import vector_img from "../../../assets/vector-smart-object.png"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

import "slick-carousel/slick/slick-theme.css";
import sliderimage1 from '../../../assets/aboutUsSlider/1.png'
import sliderimage2 from '../../../assets/aboutUsSlider/2.png'
import sliderimage3 from '../../../assets/aboutUsSlider/3.png'
import sliderimage4 from '../../../assets/aboutUsSlider/4.png'
import sliderimage5 from '../../../assets/aboutUsSlider/5.png'
import sliderimage6 from '../../../assets/aboutUsSlider/6.png'
import sliderimage7 from '../../../assets/aboutUsSlider/7.png'

import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

const PreviousBtn = (props) => {
  console.log(props);
  const { arrowleft, onClick } = props;
  return (
    <div className={arrowleft} onClick={onClick}>
      <ArrowBackIos className="backwardarrow" style={{ color: "white", fontSize: "3rem",marginTop:"13rem"}} />
    </div>
  );
};
const NextBtn = (props) => {
  const { arrowright, onClick } = props;
  return (
    <div className={arrowright} onClick={onClick}>
      <ArrowForwardIos className="forwardarrow" style={{ color: "white", fontSize: "3rem",marginTop:"13rem", }} />
    </div>
  );
};
const About = () => {

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
          <div className="about__slider">
              <Slider className="slider_cont"  prevArrow={<PreviousBtn/>} nextArrow={<NextBtn/>}
               slidesToShow={1}
               slidesToScroll={1}
              dots
               infinite={true}
               speed={500}
               autoplay={true}
               autoplaySpeed={5000}>
                <div >
                  <img className="sliderimg_aboutus"src={sliderimage1} alt="" />
                </div>
                <div >
                  <img className="sliderimg_aboutus" src={sliderimage2} alt="" />
                </div>
                <div >
                  <img className="sliderimg_aboutus" src={sliderimage3} alt="" />
                </div>
                <div >
                  <img className="sliderimg_aboutus" src={sliderimage4} alt="" />
                </div>
                <div >
                  <img className="sliderimg_aboutus" src={sliderimage5} alt="" />
                </div>
                <div >
                  <img className="sliderimg_aboutus" src={sliderimage6} alt="" />
                </div>
                <div >
                  <img className="sliderimg_aboutus" src={sliderimage7} alt="" />
                </div>
              </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};


export default About;

