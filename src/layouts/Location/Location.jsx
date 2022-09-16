import React from 'react'
import locationimg from "../../assets/location/sjk_location_image.png";
const Location = () => {
  return (
    <div className='location_parent_main' id='location'>
        <h1 className='location_header'>Locations</h1>
        <div className="location_parent">
            <img className='location_img' src={locationimg} alt="" />
        </div>
    </div>
  )
}

export default Location