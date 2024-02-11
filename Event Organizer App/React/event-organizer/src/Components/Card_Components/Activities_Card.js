import React from 'react';
import { Link } from 'react-router-dom';
import activitiesImage from './Card_Images/Activities_Item.png';


const ActivitiesCard = ({activitiesId, title}) => {
  return (
    <Link to={`/activities/${activitiesId}`} className="lower-card">
      <h3 className='lower-card-title'>{title}</h3>
      <img src={activitiesImage} alt="Activities_Image" className='lower-card-image'/>
    </Link>
  );
};

export default ActivitiesCard;