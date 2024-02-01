import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//import Navbar from './components/Navbar';
import { Finante_Page } from './pages/event/Finante_Page';
import { DatePage } from './pages/event/Date_Page';
import { Participanti_Page } from './pages/event/Participanti_Page';
import { Autentificare_Page } from './pages/account/Autentificare_Page';
import { Locatie_Page } from './pages/event/Locatie_Page';
import { Transport_Page } from './pages/event/Transport_Page';
import { Catering_Page } from './pages/event/Catering_Page';
import { Activati_Page } from './pages/event/Activati_Page';
import { Profil_Page } from './pages/account/Profil_Page';
import { Notificari_Page } from './pages/account/Notificari_Page';
import { Setari_Page } from './pages/account/Setari_Page';
import Asistenta_Page from './pages/account/Asistenta_Page';
import { Navbar1, Navbar2, Navbar3 } from './components/Navbar2';
import { SidebarHamburgerMenu , SidebarProfile  } from './components/Sidebars_Mobile_Menus';

function App() {

  const [navBar2000, setNavBar2000] = useState(false);
  const [navBar1500, setNavBar1500] = useState(false);
  const [navBar1100, setNavBar1100] = useState(false);
  const [events_MenuActive, setEvents_MenuActive] = useState(false);
  const [profile_mobile_DropdownMenuActive, setProfile_mobile_DropdownMenuActive] = useState(false);

  const showNavBar = () => {
    if (window.innerWidth > 1500) {
      setNavBar2000(true);
      console.log("devicePixelRatio:", window.devicePixelRatio);
    } else {
      setNavBar2000(false);
    }
    if (window.innerWidth <= 1500 && window.innerWidth > 1100) {
      setNavBar1500(true);
      console.log("devicePixelRatio:", window.devicePixelRatio);
    } else {
      setNavBar1500(false);
    }
    if (window.innerWidth <= 1100) {
      setNavBar1100(true);
      console.log("innerWidth:", window.innerWidth);
      console.log("innerHeight:", window.innerHeight);
    } else {
      setNavBar1100(false);
    }
  };

  useEffect(() => {
    showNavBar();
  }, []);

  window.addEventListener('resize', showNavBar);

  const triggerEventsMenu = () => {
    setEvents_MenuActive(!events_MenuActive);
    setProfile_mobile_DropdownMenuActive(false);
  };

  const triggerMobileProfileDropdownMenu = () => {
    setProfile_mobile_DropdownMenuActive(!profile_mobile_DropdownMenuActive);
    setEvents_MenuActive(false);
  };

  return (
    <div className='app-container'>
      <Router>
        <nav className={navBar2000 ? 'show-navBar2000' : 'hide-navBar2000'}>
          <Navbar1 />
        </nav>
        <nav className={navBar1500 ? 'show-navBar1500' : 'hide-navBar1500'}>
          <Navbar2 />
        </nav>
        <nav className={navBar1100 ? 'show-navBar1100' : 'hide-navBar1100'}>
          <Navbar3 
          triggerEventsMenu={triggerEventsMenu}
          triggerMobileProfileDropdownMenu={triggerMobileProfileDropdownMenu}
          />
        </nav>         

        <div className='home'>

          {events_MenuActive && (
          <div>
            <SidebarHamburgerMenu events_MenuActive={events_MenuActive} />
          </div>
          )}
          {profile_mobile_DropdownMenuActive && (
            <div>
              <SidebarProfile profile_mobile_DropdownMenuActive={profile_mobile_DropdownMenuActive} />
            </div>
          )}

          <Routes>
            {/* Home Page */}
            <Route path='/' exact />

            {/* Event Pages */}
            <Route path='/alege-data' element={<DatePage />} />
            <Route path='/participanti' element={<Participanti_Page/>} />
            <Route path='/finante' element={<Finante_Page/>} />
            <Route path='/locatie' element={<Locatie_Page/>} />
            <Route path='/transport' element={<Transport_Page/>} />
            <Route path='/catering' element={<Catering_Page/>} />
            <Route path='/activitati' element={<Activati_Page/>} />          

            {/* Account Pages */}
            <Route path='/profil' element={<Profil_Page/>} />
            <Route path='/notificari' element={<Notificari_Page/>} />
            <Route path='/setari' element={<Setari_Page/>} />
            <Route path='/asistenta' element={<Asistenta_Page/>} />
            <Route path='/autentificare' element={<Autentificare_Page/>} />
          </Routes>
        </div>
        

        
      </Router>
    </div>
  );
}

export default App;
