import React from 'react';
import { Link } from 'react-router-dom';
import transportImage from './Card_Images/Transport_Item.png';


const TransportCard = ({transportId, title}) => {
  return (
    <Link to={`/transport/${transportId}`} className="lower-card">
      <h3 className='lower-card-title'>{title}</h3>
      <img src={transportImage} alt="Transport_Image" className='lower-card-image' />
    </Link>
  );
};

export default TransportCard;
