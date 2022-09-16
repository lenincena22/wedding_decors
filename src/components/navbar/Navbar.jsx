import React, { useState } from "react";
import menuItems from "../menuitems";
import logo from "../../assets/logo-main.png";
import eventlocation from "../../assets/navbarimg/2.png";
import eventimg from "../../assets/navbarimg/1.png";
import whatsapplogo from "../../assets/navbarimg/whatsapp__skj__image.png";
// import maillogo from "../../assets/navbarimg/mail__skj.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  WhatsApp } from "@mui/icons-material";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
// import callnow from "../../assets/call_image.png";
import CountUp from "react-countup";
// import { Link } from "react-scroll";



export const Navbar = () => {
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
  };

  document.querySelectorAll('a[href^="#"]').forEach(anhor =>{
    anhor.addEventListener("click", function(e){
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior : "smooth"
      })
    })
  })
  

  return (
    <div className="navbar__parent__cont">
      <div className="contact__details__home">
        <div className="contact__num">
          <div className="contact_cont">
            <img src={whatsapplogo} className="call_now_img" alt="" />
            <div className="callus__detials">
              <h3>Call Us</h3>
              <h3>9095322466</h3>
            </div>
            {/* <img src={maillogo} className="call_now_img" alt="" /> */}
          </div>
        </div>
        <div className="mian__logo">
          <img className="main__logo__img" alt="timer" src={logo} />
          <a
            href="https://api.whatsapp.com/send/?phone=919095622466&text&type=phone_number&app_absent=0"
            className="float"
          >
            <WhatsApp
              className="my-float"
              style={{ fontSize: "3rem", marginTop: "10%", marginLeft: "5%" }}
            />
          </a>
        </div>
        <div className="mian__event__detials">
          <div className="events__happend">
            <div className="event__img__logo">
              <img src={eventimg} className="eventlocation" alt="Eventlogo" />
            </div>
            <div className="event__dec">
              <CountUp
                className="counter"
                style={{
                  fontSize: "2.5rem",
                  fontFamily: "sans-serif",
                  fontWeight: "600",
                }}
                end={1500}
                duration={3}
              />
              <span className="event__plus">
                <FontAwesomeIcon icon={faPlus} />
              </span>
              <h3 className="dec__event__main">Events hosted</h3>
            </div>
          </div>
          <div className="event__location">
            <div className="event__img__logo">
              <img
                src={eventlocation}
                className="eventlocation"
                alt="Eventlogo"
              />
            </div>
            <div className="event__dec">
              <CountUp
                className="counter"
                style={{
                  fontSize: "2.5rem",
                  fontFamily: "sans-serif",
                  fontWeight: "600",
                }}
                end={100}
                duration={3}
              />
              <span className="event__plus">
                <FontAwesomeIcon icon={faPlus} />
              </span>
              <h3 className="dec__event__main">Location</h3>
            </div>
          </div>
        </div>
      </div>
      <nav className="navbar">
        <ul className={active ? "nav-menu active" : "nav-menu"}>
          {menuItems.map((item, index) => {
            return (
              <li key={index}>
                <a href={item.url} className={item.cName}>
                  {item.title}
                </a>
                {/* <Link
                className={item.cName}
                  to={item.url}
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  {item.title}
                </Link> */}
                
              </li>
            );
          })}
        </ul>
        <div className="menu-icon" onClick={handleClick}>
          <i className={active ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
      </nav>
    </div>
  );
};

/* Call this function with a string containing the ID name to
 * the element containing the number you want to do a count animation on.*/

export default Navbar;
