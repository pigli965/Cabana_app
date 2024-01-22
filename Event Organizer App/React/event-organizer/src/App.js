//#region Import Menu Icons
import portrait from '../src/img/portrait.jpg'
import user from '../src/img/user.png'
import history from '../src/img/events-history.png'
import inbox from '../src/img/envelope.png'
import settings from '../src/img/settings.png'
import help from '../src/img/question.png'
import logout from '../src/img/log-out.png'
//#endregion

//#region Import Component Items
import Header from './Components/Header'
import Sidebar from './Components/Sidebar';
import Footer from './Components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//#endregion

//#region Import Navigation Pages Items 
import { HomePage } from './Pages/HomePage';
import { ContactUsPage } from './Pages/ContactUsPage';
import { AboutUsPage } from './Pages/AboutUsPage';
//#endregion

//#region Import SideBar Pages Items 
import { DateVotingPage } from './Pages/DateVotingPage';
import { ParticipationListPage } from './Pages/ParticipationListPage';
import { FinanceReportPage } from './Pages/FinanceReportPage';
import { LocationPage } from './Pages/LocationPage';
import { TransportPage } from './Pages/TransportPage';
import { CateringPage } from './Pages/CateringPage';
import { ActivitiesPage } from './Pages/ActivitiesPage';
import { EntertainmentPage } from './Pages/EntertainmentPage';
//#endregion

//#region Import MenuBar Pages Items 
import { ProfilePage } from './Pages/ProfilePage';
import { EventsHistoryPage } from './Pages/EventsHistory';
import { InboxPage } from './Pages/InboxPage';
import { SettingsPage } from './Pages/SettingsPage';
import { HelpCenterPage } from './Pages/HelpCenterPage';
//#endregion

import React, {useState, useEffect, useRef} from 'react';

function App(){
  const [open, setOpen] = useState(false);

  //#region Profile Info Variables
  let profileName = <ProfileInformation nameText = "Tudor"/>
  let profileTitle = <ProfileInformation titleText = "Events Organizer"/>
  //#endregion

  let menuRef = useRef();

  useEffect(() => {
    let handler = (e) =>{
      if(menuRef.current && !menuRef.current.contains(e.target)){
        setOpen(false);
        console.log(menuRef.current);
      }  
    };

  document.addEventListener("mousedown", handler);

  return () => {
        document.removeEventListener("mousedown", handler);
      };
  }, [menuRef]);

  return (
    <Router>
      <div>
        <Header />
        <div className="container">
          <Sidebar />

          

          {/* Routes */}
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

            <Route path="/profile/profileId" element={<ProfilePage />} />
            <Route path="/events_history/events_historyId" element={<EventsHistoryPage />} />
            <Route path="/inbox/inboxId" element={<InboxPage />} />
            <Route path="/settings/settingsId" element={<SettingsPage />} />
            <Route path="/help_center/help_centerId" element={<HelpCenterPage />} />
          </Routes>

          {/* Menu Container */}
          <div className='menu-container' ref={menuRef}>
              <div className='menu-trigger' onClick={()=>{setOpen(!open)}}>
                <img src={portrait} alt="User Portrait" />
              </div>
          </div>

          {/* Dropdown Menu */}
          <div className={`dropdown-menu ${open? 'active' : 'inactive'}`}>       
            <h3>{profileName.props.nameText}<br/><span>{profileTitle.props.titleText}</span></h3>       
            <ul>
              <DropdownItem img = {user} href = "/profile/profileId" text = {"Profile"}/>
              <DropdownItem img = {history} href = "/events_history/events_historyId" text = {"Events History"}/>
              <DropdownItem img = {inbox} href = "/inbox/inboxId" text = {"Inbox"}/>
              <DropdownItem img = {settings} href = "/settings/settingsId" text = {"Settings"}/>
              <DropdownItem img = {help} href = "/help_center/help_centerId" text = {"Help Center"}/>
              <DropdownItem img = {logout} href = "/sign_in/sign_inId" text = {"Logout"}/>
            </ul>
          </div> 
        </div>
        

        <Footer />
      </div>
    </Router>
    
  );
}

function DropdownItem(props){
  return(
    <li className='dropdownItem'>
      <img src={props.img} alt={props.text} />
      <a href={props.href}>{props.text}</a>
    </li>
  );
}

function ProfileInformation(props){
  return(
    <li className='dropdown-menu'>
      <h1>{props.nameText}</h1>
      <h1>{props.titleText}</h1>
    </li>
  );
}

export default App;
