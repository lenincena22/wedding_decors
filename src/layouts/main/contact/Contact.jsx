import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot,faPhone,faEnvelope } from '@fortawesome/free-solid-svg-icons'

const Contact = () => {
  return (
    <div className="contact__parent">
      <h1 className="contact__header">Contact Us</h1>
      <div className="contact__cont">
        <div className="cont-1 shape">
          <div className="contact__logo item1 "><FontAwesomeIcon className="address__icon contact_icon_posistion" icon={faLocationDot} /></div>
          <h1 className="Contact__head contact_hed1 contact_mob">Address</h1>
          
          <p className="contact_dec contact_mob">123, New Lenox Chicago, IL 60606</p>
          <div className="contact_border"></div>
        </div>
        <div className="cont-2 shape">
        <div className="contact__logo item2 "><FontAwesomeIcon className="address__icon1 contact_icon_posistion" icon={faPhone} /></div>
          <h1 className="Contact__head contact_hed2 contact_mob">Phone</h1>
          <p className="contact_dec1 contact_mob">9095322466</p>
          <div className="contact_border"></div>
        </div>
        <div className="cont-3 shape">
        <div className="contact__logo item3"><FontAwesomeIcon className="address__icon2 contact_icon_posistion" icon={faEnvelope} /></div>
          
          <h1 className="Contact__head contact_hed3 ">Email Address</h1>
          <p className="contact_dec2 contact_mob">skj_gopal@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
