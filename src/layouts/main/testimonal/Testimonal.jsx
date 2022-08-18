import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Avatar } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

const PreviousBtn = (props) => {
  console.log(props);
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowBackIos style={{ color: "gray", fontSize: "3rem",marginLeft:"-3rem",marginTop:"100%" }} />
    </div>
  );
};
const NextBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowForwardIos style={{ color: "gray", fontSize: "3rem",marginLeft:"2rem",marginTop:"100%" }} />
    </div>
  );
};
const Testimonal = () => {
  return (
    <div className="testmonial__cont" id="testimonial">
      <div className="inner_cont_testimonial">
        <h1 className="testimonials__header">Testimonials</h1>
        <Slider prevArrow={<PreviousBtn/>} nextArrow={<NextBtn/>}
         slidesToShow={1}
         slidesToScroll={1}
         dots
         infinite={true}
         speed={500}
         autoplay={true}
         autoplaySpeed={5000}
         >
          <Card img="https://www.tutorialrepublic.com/examples/images/clients/1.jpg" />
          <Card img="https://www.tutorialrepublic.com/examples/images/clients/1.jpg" />
          <Card img="https://www.tutorialrepublic.com/examples/images/clients/1.jpg" />
          <Card img="https://www.tutorialrepublic.com/examples/images/clients/1.jpg" />
        </Slider>
      </div>
    </div>
  );
};
const Card = ({ img }) => {
  return (
    <div className="testmonial">
      <Avatar
        src={img}
        style={{
          width: 120,
          height: 120,
        }}
      />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu sem
        tempor, varius quam at, luctus dui. Mauris magna metus, dapibus nec
        turpis vel, semper malesuada ante. Idac bibendum scelerisque non non
        purus. Suspendisse varius nibh non aliquet.
      </p>
      <p>
        <span className="testmonial__name">Balakumar</span> Web dev
      </p>
    </div>
  );
};

export default Testimonal;
