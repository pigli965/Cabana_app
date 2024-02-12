import React from 'react'
import { Link } from 'react-router-dom'
import './Sidebars_Mobile_Menus.css';

export const SidebarHamburgerMenu = ({events_mobile_MenuActive}) => {
  console.log("events_MenuActive: ", events_mobile_MenuActive)
  return (
      <div className={events_mobile_MenuActive ? 'nav-mobile-events-menu active' : 'nav-mobile-events-menu'}>
        <ul className='navbar-mobile-eventList'>               
              <Link to='/alege-data' className='nav-mobile-event-item' >
                Alege Data
              </Link>                 
              <Link to='/participanti' className='nav-mobile-event-item' >
                Participanti
              </Link>        
              <Link to='/finante' className='nav-mobile-event-item' >
                Finante
              </Link>                 
              <Link to='/locatie' className='nav-mobile-event-item' >
                Locatie
              </Link>                 
              <Link to='/transport' className='nav-mobile-event-item' >
                Transport
              </Link>                  
              <Link to='/catering' className='nav-mobile-event-item' >
                Catering
              </Link>               
              <Link to='/activitati' className='nav-mobile-event-item' >
                Activitati
              </Link>                                 
          </ul>        
      </div>
  )
}

export const SidebarProfile = ({profile_mobile_DropdownMenuActive}) => {
  console.log("profile_mobile_DropdownMenuActive: ", profile_mobile_DropdownMenuActive)
  return (
    <div className={profile_mobile_DropdownMenuActive ? 'profile_mobile-dropdown-menu active' : 'profile_mobile-dropdown-menu'}>
      <ul className='navbar-mobile-profileList'>
        <Link to='/profil' className='nav-mobile-profile-item'>
          Profil
          <div className='right-indicator'></div> 
        </Link>        
        <Link to='/notificari' className='nav-mobile-profile-item'>
          Notificari
          <div className='right-indicator'></div> 
        </Link>              
        <Link to='/setari' className='nav-mobile-profile-item'>
          Setari
          <div className='right-indicator'></div> 
        </Link>               
        <Link to='/asistenta' className='nav-mobile-profile-item'>
          Asistenta
          <div className='right-indicator'></div> 
        </Link>          
        <Link to='/autentificare' className='nav-mobile-profile-item'>
          Autentificare
          <div className='right-indicator'></div> 
        </Link>               
      </ul>
    </div>
  )
}

