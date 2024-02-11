import React from 'react';
import { Link } from 'react-router-dom';
import entertainmentImage from './Card_Images/Entertainment_Item.png';


const EntertainmentCard = ({entertainmentId, title}) => {
  return (
    <Link to={`/entertainment/${entertainmentId}`} className="lower-card">
      <h3 className='lower-card-title'>{title}</h3>
      <img src={entertainmentImage} alt="Entertainment_Image" className='lower-card-image'/>
    </Link>
  );
};

export default EntertainmentCard;