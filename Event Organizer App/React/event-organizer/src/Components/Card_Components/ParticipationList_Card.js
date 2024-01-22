import React from 'react';
import { Link } from 'react-router-dom';
import participationListImage from './Card_Images/Participation-List_Item.png';


const ParticipationListCard = ({participation_listId, title}) => {
  return (
    <Link to={`/participation_list/${participation_listId}`} className="upper-card">
      <h3 className='upper-card-title'>{title}</h3>
      <img src={participationListImage} alt="Participation-List_Image" className='upper-card-image' />
    </Link>
  );
};

export default ParticipationListCard;