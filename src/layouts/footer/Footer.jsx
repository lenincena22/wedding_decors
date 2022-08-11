import React from 'react'
import logo from "../../assets/logo-main.png";
import sm1 from '../../assets/SmFooter/1.png'
import sm2 from '../../assets/SmFooter/2.png'
import sm3 from '../../assets/SmFooter/3.png'


const Footer = () => {
  return (
    <div className="footer__parent__cont">
      <div className="footer__logo">
        <img className='footer__logo_image' src={logo} alt="footer logo" />
      </div>
      <div className="footer__socialmedia">
        <div className="sm__whatsup sm_footer_shape">
        
        <img className='socialmedia__fotter sm_item1' src={sm1} alt="" />
        </div>

        <div className="sm__youtube sm_footer_shape">
        <img className='socialmedia__fotter sm_item2' src={sm2} alt="" />
        </div>
        <div className="sm__instagram sm_footer_shape">
        <img className='socialmedia__fotter sm_item3' src={sm3} alt="" />
        </div>
      </div>
      <div className="footer_copyrights">
        <p className='fotter__copyrights__dec'>SKJ © 2022. All Rights Reserved.</p>
      </div>
    </div>
  )
}

export default Footer;
