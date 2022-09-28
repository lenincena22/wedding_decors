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
      <ArrowBackIos
        style={{
          color: "gray",
          fontSize: "3rem",
          marginLeft: "-3rem",
          marginTop: "100%",
        }}
      />
    </div>
  );
};
const NextBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowForwardIos
        style={{
          color: "gray",
          fontSize: "3rem",
          marginLeft: "2rem",
          marginTop: "100%",
        }}
      />
    </div>
  );
};
const Testimonal = () => {
  return (
    <div className="testmonial__cont" id="testimonial">
      <div className="inner_cont_testimonial">
        <h1 className="testimonials__header">Testimonials</h1>
        <Slider
          prevArrow={<PreviousBtn />}
          nextArrow={<NextBtn />}
          slidesToShow={1}
          slidesToScroll={1}
          dots
          infinite={true}
          speed={500}
          autoplay={true}
          autoplaySpeed={5000}
        >
          {/* <Card img="https://www.tutorialrepublic.com/examples/images/clients/1.jpg" />
          <Card img="https://www.tutorialrepublic.com/examples/images/clients/1.jpg" />
          <Card img="https://www.tutorialrepublic.com/examples/images/clients/1.jpg" />
          <Card img="https://www.tutorialrepublic.com/examples/images/clients/1.jpg" /> */}
          <div className="testmonial">
            <Avatar className="testimonial__avatar"
              style={{
                width: 120,
                height: 120,
              }}
            />
            <p>
              Skj was very quick to respond and provided fair pricing to elevate
              our venue space . Very professional, prompt and excellent quality.
            </p>
            
          </div>
          <div className="testmonial">
            <Avatar className="testimonial__avatar"
              
              style={{
                width: 120,
                height: 120,
                
                
              }}
            />
            <p>
            Such a great company to work with! I was amazed at how beautiful our reception looked, it was everything I dreamed it would be!!

            </p>
            
          </div>
          <div className="testmonial">
            <Avatar className="testimonial__avatar"
              style={{
                width: 120,
                height: 120,
              }}
            />
            <p>
            My sister's wedding was amazing thanks to SKj Wedding Decorations. All the flowers were fresh and the candles, centerpieces were beautiful!! They deserve 10 stars. Thank you for te amazing decor, outstanding service and your attention to detail. I recommend them to everyone!

            </p>
            
          </div>
          <div className="testmonial">
            <Avatar className="testimonial__avatar"
              style={{
                width: 120,
                height: 120,
              }}
            />
            <p>
            SkJ was excellent to work with for our wedding. From flowers to stage to even table covers our hall looked gorgeous!


            </p>
            
          </div>
        </Slider>
      </div>
      
    </div>
  );
};

export default Testimonal;
