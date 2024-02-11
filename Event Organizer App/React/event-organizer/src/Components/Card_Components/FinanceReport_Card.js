// import React from 'react';
// import HomePageCard from './HomePage_Card';
// import participationListImage from './Card_Images/Finance-Report_Item.png';

// const ParticipationListCard = ({ participation_listId, title }) => {

//   return <HomePageCard title={title} image={participationListImage} linkTo={`/participation_list/${participation_listId}`} />;
// };

// export default ParticipationListCard;
import React from 'react';
import { Link } from 'react-router-dom';
import financeReportImage from './Card_Images/Finance-Report_Item.png';


const FinanceReportCard = ({finance_reportId, title}) => {
  return (
    <Link to={`/finance_report/${finance_reportId}`} className="upper-card">
      <h3 className='upper-card-title'>{title}</h3>
      <img src={financeReportImage} alt="Finance-Report_Image" className='upper-card-image' />
    </Link>
  );
};

export default FinanceReportCard;

