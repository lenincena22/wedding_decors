import React from "react";

const About = () => {
  return (
    <div className="about-content" id="about">
      <div className="about-content__wrapper">
        <div className="about-content__wrapper--left">
          <p className="about-content__title">ABOUT US</p>
          <p className="about-content__caption">
            We Plan & Design Weddings That Capture the Imagination
          </p>
          <p className="about-content__description">
            Weddings are significant events in people’s lives and as such,
            couples are often willing to spend considerable amount of money to
            ensure that their weddings are well-organized. Wedding planners are
            often used by couples who work long hours and have little spare time
            available for sourcing and managing wedding venues.
          </p>
          <button>MORE ABOUT US</button>
        </div>
        <div className="about-content__wrapper--right"></div>
      </div>
    </div>
  );
};

export default About;
