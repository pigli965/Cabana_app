import React from 'react';
import { Link } from 'react-router-dom';
import locationImage from './Card_Images/Location_Item.png';


const LocationCard = ({locationId, title}) => {
  return (
    <Link to={`/location/${locationId}`} className="lower-card">
      <h3 className='lower-card-title'>{title}</h3>
      <img src={locationImage} alt="Location_Image" className='lower-card-image'/>
    </Link>
  );
};

export default LocationCard;
