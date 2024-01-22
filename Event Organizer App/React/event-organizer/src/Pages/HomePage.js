import React from 'react';
import LocationCard from "../Components/Card_Components/Location_Card";
import TransportCard from '../Components/Card_Components/Transport_Card';
import CateringCard from '../Components/Card_Components/Catering_Card';
import ActivitiesCard from '../Components/Card_Components/Activities_Card';
import EntertainmentCard from '../Components/Card_Components/Entertainemnt_Card';
import DateVotingCard from '../Components/Card_Components/DateVoting_Card';
import ParticipationListCard from '../Components/Card_Components/ParticipationList_Card';
import FinanceReportCard from '../Components/Card_Components/FinanceReport_Card';

export const HomePage = () => {
    return(
        <div className='home-container'>
            <div className="upper-card-container">
                <DateVotingCard locationId=":date_votingId" title="Date Voting" />
                <ParticipationListCard transportId=":participation_listId" title="Participation List" />
                <FinanceReportCard cateringId=":finance_reportId" title="Finance Report" />
            </div>
            <div className="lower-card-container">
                <LocationCard locationId=":locationId" title="Location" />
                <TransportCard transportId=":transportId" title="Transport" />
                <CateringCard cateringId=":cateringId" title="Catering" />
                <ActivitiesCard activitiesId=":activitiesId" title="Activities" />
                <EntertainmentCard entertainmentId=":entertainmentId" title="Entertainment" />
            </div>
        </div>
    );
}