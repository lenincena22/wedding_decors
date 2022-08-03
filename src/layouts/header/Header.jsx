import React from 'react'
import headerfancyline from '../../assets/header__fancyline.png'

export const Header = () => {
  return (
    <div className='header__cont'>
      <div className="inner_cont">
        <div class="animate seven">
			<span>W</span><span>e'</span><span>ll</span>&nbsp;<span >make</span> &nbsp;
			<span>y</span><span>o</span><span>u</span><span>r</span><span>W</span><span>e</span><span>d</span><span>d</span><span>i</span><span>n</span>
      <span>g</span>
      <br /><span className='header_dec_space'>p</span><span>e</span><span>r</span><span>f</span><span>e</span><span>c</span><span>t</span>
      
		</div>
        <img src={headerfancyline} alt=""  className='header__fancyline'/>
      </div>
    </div>
  )
}

export default Header;