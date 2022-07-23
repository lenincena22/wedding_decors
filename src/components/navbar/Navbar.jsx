import React, {  useState } from "react";
import menuItems from '../menuitems'




export const Navbar = () => {
  const [active,setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
  }
  return (
    <div >
      <div className="contact__details__home">
        <div className="contact__num">
          <h3>Call Us</h3>
          <h3>9095322466</h3>
        </div>
        <div className="mian__logo">

        </div>

      </div>
      <nav className='navbar'>
        
      <ul className={active ? "nav-menu active" : "nav-menu"}>
        {menuItems.map((item, index) => {
          return (
            <li key={index}>
              <a href={item.url} className={item.cName}>
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>
      <div className="menu-icon" onClick={handleClick}>
        <i className={active ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
    </nav>
    </div>
  )
}


export default Navbar