import React from 'react';
import { Link } from 'react-router-dom';
import cateringImage from './Card_Images/Catering_Item.png';


const CateringCard = ({cateringId, title}) => {
  return (
    <Link to={`/catering/${cateringId}`} className="lower-card">
      <h3 className='lower-card-title'>{title}</h3>
      <img src={cateringImage} alt="Catering_Image" className='lower-card-image'/>
    </Link>
  );
};

export default CateringCard;