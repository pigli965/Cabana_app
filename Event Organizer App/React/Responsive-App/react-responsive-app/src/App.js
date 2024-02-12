import React, { useState, useEffect, useCallback, useMemo } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//import Navbar from './components/Navbar';
import { FinantePage } from './pages/event/Finante_Page';
import { DatePage } from './pages/event/Date_Page';
import { ParticipantiPage } from './pages/event/Participanti_Page';
import { AutentificarePage } from './pages/account/Autentificare_Page';
import { LocatiePage } from './pages/event/Locatie_Page';
import { TransportPage } from './pages/event/Transport_Page';
import { CateringPage } from './pages/event/Catering_Page';
import { ActivatiPage } from './pages/event/Activati_Page';
import { ProfilPage } from './pages/account/Profil_Page';
import { NotificariPage } from './pages/account/Notificari_Page';
import { SetariPage } from './pages/account/Setari_Page';
import AsistentaPage from './pages/account/Asistenta_Page';
import { Navbar1, Navbar2, Navbar3 } from './components/Navbar2';
import { SidebarHamburgerMenu , SidebarProfile  } from './components/Sidebars_Mobile_Menus';
import { HomePage } from './pages/event/HomePage';
import { Footer } from './components/Footer';
import { NotificationBox } from './components/NotificationBox';

function App() {
  const [isSuccesful, setIsSuccesful] = useState(false);
  const [isDateValueAdded, setIsDateValueAdded] = useState(false);

//#region Navigation Bar and their Menu Status variables 
  const [navBar2000, setNavBar2000] = useState(false);
  const [navBar1500, setNavBar1500] = useState(false);
  const [navBar1100, setNavBar1100] = useState(false);

  const [profile_DropdownMenuActive, setProfile_DropdownMenuActive] = useState(false)
  const [events_mobile_MenuActive, setEvents_mobile_MenuActive] = useState(false);
  const [profile_mobile_DropdownMenuActive, setProfile_mobile_DropdownMenuActive] = useState(false);
  const [profile_MediumResolutionDropdownMenuActive, setProfile_MediumResolutionDropdownMenuActive] = useState(false);
  const [events_MediumResolutionDropdownMenuActive, setEvents_MediumResolutionDropdownMenuActive] = useState(false);
  // Define close functions within the component scope
  const closeMaximumResolutioneMenus = useCallback(() => {
    setProfile_DropdownMenuActive(false);
  }, [setProfile_DropdownMenuActive]);

  const closeMediumResolutioneMenus = useCallback(() => {
    setEvents_MediumResolutionDropdownMenuActive(false);
    setProfile_MediumResolutionDropdownMenuActive(false);
  }, [setEvents_MediumResolutionDropdownMenuActive, setProfile_MediumResolutionDropdownMenuActive]);

  const closeMobileMenus = useCallback(() => {
    setEvents_mobile_MenuActive(false);
    setProfile_mobile_DropdownMenuActive(false);
  }, [setEvents_mobile_MenuActive, setProfile_mobile_DropdownMenuActive]);

  const showNavBar = useCallback(() => {
    if (window.innerWidth > 1500) {
      setNavBar2000(true);
      closeMobileMenus();
      closeMediumResolutioneMenus();
    } else {
      setNavBar2000(false);
    }
    if (window.innerWidth <= 1500 && window.innerWidth > 1100) {
      setNavBar1500(true);
      closeMaximumResolutioneMenus();
      closeMobileMenus();
    } else {
      setNavBar1500(false);
    }
    if (window.innerWidth <= 1100) {
      setNavBar1100(true);
      closeMaximumResolutioneMenus();
      closeMediumResolutioneMenus();
    } else {
      setNavBar1100(false);
    }
  }, [setNavBar2000, setNavBar1500, setNavBar1100, closeMobileMenus, closeMediumResolutioneMenus, closeMaximumResolutioneMenus]);

  const memoizedShowNavBar = useMemo(() => showNavBar, [showNavBar]);

  useEffect(() => {
    memoizedShowNavBar();
  }, [memoizedShowNavBar]);

  useEffect(() => {
    window.addEventListener('resize', memoizedShowNavBar);

    return () => {
      window.removeEventListener('resize', memoizedShowNavBar);
    };
  }, [memoizedShowNavBar]);
//#endregion
//#region Maximum Resolution Profile Dropdown Menu 
  const triggerDropdownMenu = () => {
      setProfile_DropdownMenuActive(!profile_DropdownMenuActive);
  }
//#endregion
//#region Medium Resolution Profile Dropdown Menu & Event Dropdown Menu
  const triggerMediumResolution_DropdownMenu = () => {
    setProfile_MediumResolutionDropdownMenuActive(!profile_MediumResolutionDropdownMenuActive);
    setEvents_MediumResolutionDropdownMenuActive(false);
  }
  const triggerMediumResolution_EventDropdownMenu = () => {
    setEvents_MediumResolutionDropdownMenuActive(!events_MediumResolutionDropdownMenuActive);
    setProfile_MediumResolutionDropdownMenuActive(false);
  }
//#endregion
//#region Mobile Resolution Profile Dropdown Menu & Event Dropdown Menu
  const triggerMobileEventsMenu = () => {
    setEvents_mobile_MenuActive(!events_mobile_MenuActive);
    setProfile_mobile_DropdownMenuActive(false);
  };

  const triggerMobileProfileDropdownMenu = () => {
    setProfile_mobile_DropdownMenuActive(!profile_mobile_DropdownMenuActive);
    setEvents_mobile_MenuActive(false);
  };
//#endregion

  return (
    <div className='app-container'>
      <Router>
        <header className='app-header'>
          <nav className={navBar2000 ? 'show-navBar2000' : 'hide-navBar2000'}>
            <Navbar1 
            triggerDropdownMenu={triggerDropdownMenu}
            profile_DropdownMenuActive={profile_DropdownMenuActive}
            />
          </nav>
          <nav className={navBar1500 ? 'show-navBar1500' : 'hide-navBar1500'}>
            <Navbar2
              triggerMediumResolution_DropdownMenu={triggerMediumResolution_DropdownMenu}
              triggerMediumResolution_EventDropdownMenu={triggerMediumResolution_EventDropdownMenu}
              profile_MediumResolutionDropdownMenuActive={profile_MediumResolutionDropdownMenuActive}
              events_MediumResolutionDropdownMenuActive={events_MediumResolutionDropdownMenuActive}
            />     
          </nav>
          <nav className={navBar1100 ? 'show-navBar1100' : 'hide-navBar1100'}>
            <Navbar3 
            triggerMobileEventsMenu={triggerMobileEventsMenu}
            triggerMobileProfileDropdownMenu={triggerMobileProfileDropdownMenu}
            />
          </nav> 
        </header>               

        <main className='app-content'>
          
          <Routes>
            {/* Home Page */}
            <Route path='/' exact element={<HomePage />}/>

            {/* Event Pages */}
            <Route path='/alege-data' element={<DatePage isSuccesful={isSuccesful} setIsSuccesful={setIsSuccesful} setIsDateValueAdded={setIsDateValueAdded}/>} />
            <Route path='/participanti' element={<ParticipantiPage/>} />
            <Route path='/finante' element={<FinantePage/>} />
            <Route path='/locatie' element={<LocatiePage/>} />
            <Route path='/transport' element={<TransportPage/>} />
            <Route path='/catering' element={<CateringPage/>} />
            <Route path='/activitati' element={<ActivatiPage/>} />          

            {/* Account Pages */}
            <Route path='/profil' element={<ProfilPage/>} />
            <Route path='/notificari' element={<NotificariPage/>} />
            <Route path='/setari' element={<SetariPage/>} />
            <Route path='/asistenta' element={<AsistentaPage/>} />
            <Route path='/autentificare' element={<AutentificarePage/>} />
          </Routes>
        </main>
        
        <aside className='app-sidebar'>
          {events_mobile_MenuActive && (
            <aside>
              <SidebarHamburgerMenu events_mobile_MenuActive={events_mobile_MenuActive} />
            </aside>
            )}
          {profile_mobile_DropdownMenuActive && (
            <aside>
              <SidebarProfile profile_mobile_DropdownMenuActive={profile_mobile_DropdownMenuActive} />
            </aside>
          )}
        </aside>
        
        <div className='app-notification'>
            <NotificationBox 
              isSuccesful={isSuccesful} 
              isDateValueAdded={isDateValueAdded}
            />
        </div>

        <footer className='app-footer'>
          <Footer />
        </footer>
      </Router>
    </div>
  );
}

export default App;
