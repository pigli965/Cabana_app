import React, {useState} from 'react';

import portrait from '../src/img/portrait.jpg'
import user from '../src/img/user.png'
import edit from '../src/img/edit.png'
import inbox from '../src/img/envelope.png'
import settings from '../src/img/settings.png'
import help from '../src/img/question.png'
import logout from '../src/img/log-out.png'

import Header from './Components/Header'
import Sidebar from './Components/Sidebar';
import Footer from './Components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { HomePage } from './Pages/HomePage';
import { ContactUsPage } from './Pages/ContactUsPage';
import { AboutUsPage } from './Pages/AboutUsPage';

import { DateVotingPage } from './Pages/DateVotingPage';
import { ParticipationListPage } from './Pages/ParticipationListPage';
import { FinanceReportPage } from './Pages/FinanceReportPage';
import { LocationPage } from './Pages/LocationPage';
import { TransportPage } from './Pages/TransportPage';
import { CateringPage } from './Pages/CateringPage';
import { ActivitiesPage } from './Pages/ActivitiesPage';
import { EntertainmentPage } from './Pages/EntertainmentPage';


function App(){
  const [open, setOpen] = useState(false);

  return (
    <Router>
      <div className="App">
        <Header />
        <Sidebar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact/:contactId" element={<ContactUsPage />} />
          <Route path="/about/:aboutId" element={<AboutUsPage />} />

          <Route path="/date_voting/:date_votingId" element={<DateVotingPage />} />
          <Route path="/participation_list/:participation_listId" element={<ParticipationListPage />} />
          <Route path="/finance_report/:finance_reportId" element={<FinanceReportPage />} />
          <Route path="/location/:locationId" element={<LocationPage />} />
          <Route path="/transport/:transportId" element={<TransportPage />} />
          <Route path="/catering/:cateringId" element={<CateringPage />} />
          <Route path="/activities/:activitiesId" element={<ActivitiesPage />} />
          <Route path="/entertainment/:entertainmentId" element={<EntertainmentPage />} />
        </Routes>
        <div className='menu-container'>
            <div className='menu-trigger' onClick={()=>{setOpen(!open)}}>
              <img src={portrait} alt="User Portrait" /> {/* Fix here */}
            </div>
        </div>
        <div className={`dropdown-menu ${open? 'active' : 'inactive'}`}>
          <h3>The Kiet<br/><span>Website Designer</span></h3>
          <ul>
            <DropdownItem img = {user} href = "profile/profileId" text = {"My Profile"}/>
            <DropdownItem img = {edit} href = "editprofile/editprofileId" text = {"Edit Profile"}/>
            <DropdownItem img = {inbox} href = "inbox/inboxId" text = {"Inbox"}/>
            <DropdownItem img = {settings} href = "settings/settingsId" text = {"Settings"}/>
            <DropdownItem img = {help} href = "help/helpId" text = {"Help"}/>
            <DropdownItem img = {logout} href = "sign-in/sign-inId" text = {"Logout"}/>
          </ul>
        </div>       
        <Footer />
      </div>
    </Router>
    
  );
}

function DropdownItem(props){
  return(
    <li className='dropdownItem'>
      <img src={props.img} alt={props.text} /> {/* Fix here */}
      <a href={props.href}>{props.text}</a>
    </li>
  );
}

export default App;
