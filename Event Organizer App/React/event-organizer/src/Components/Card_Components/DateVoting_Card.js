import React from 'react';
import { Link } from 'react-router-dom';
import dateVotingImage from './Card_Images/Date-Voting_Item.png';


const DateVotingCard = ({date_votingId, title}) => {
  return (
    <Link to={`/date_voting/${date_votingId}`} className="upper-card">
      <h3 className='upper-card-title'>{title}</h3>
      <img src={dateVotingImage} alt="Date-Voting_Image" className='upper-card-image' />
    </Link>
  );
};

export default DateVotingCard;

