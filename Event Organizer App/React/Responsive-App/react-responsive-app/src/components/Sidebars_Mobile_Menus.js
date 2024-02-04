import React from 'react'
import { Link } from 'react-router-dom'
import './Sidebars_Mobile_Menus.css';

export const SidebarHamburgerMenu = ({events_mobile_MenuActive}) => {
  console.log("events_MenuActive: ", events_mobile_MenuActive)
  return (
      <div>
          <ul className={events_mobile_MenuActive ? 'flow nav-mobile-events-menu active' : 'flow nav-mobile-events-menu'}>               
                <Link to='/AppTest/alege-data' className='nav-mobile-event-item' >
                  Alege Data
                  <div className='left-indicator'></div> 
                </Link>                 
                <Link to='/AppTest/participanti' className='nav-mobile-event-item' >
                  Participanti
                  <div className='left-indicator'></div> 
                </Link>        
                <Link to='/AppTest/finante' className='nav-mobile-event-item' >
                  Finante
                  <div className='left-indicator'></div> 
                </Link>                 
                <Link to='/AppTest/locatie' className='nav-mobile-event-item' >
                  Locatie<
                    div className='left-indicator'></div> 
                </Link>                 
                <Link to='/AppTest/transport' className='nav-mobile-event-item' >
                  Transport
                  <div className='left-indicator'></div> 
                </Link>                  
                <Link to='/AppTest/catering' className='nav-mobile-event-item' >
                  Catering
                  <div className='left-indicator'></div> 
                </Link>               
                <Link to='/AppTest/activitati' className='nav-mobile-event-item' >
                  Activitati
                  <div className='left-indicator'></div> 
                </Link>
                                  
            </ul>           
      </div>
  )
}

export const SidebarProfile = ({profile_mobile_DropdownMenuActive}) => {
  console.log("profile_mobile_DropdownMenuActive: ", profile_mobile_DropdownMenuActive)
  return (
    <div>
      <ul className={profile_mobile_DropdownMenuActive ? 'flow profile_mobile-dropdown-menu active' : 'flow profile_mobile-dropdown-menu'}>
          <Link to='/AppTest/profil' className='nav-mobile-profile-item'>
            Profil
            <div className='right-indicator'></div> 
          </Link>        
          <Link to='/AppTest/notificari' className='nav-mobile-profile-item'>
            Notificari
            <div className='right-indicator'></div> 
          </Link>              
          <Link to='/AppTest/setari' className='nav-mobile-profile-item'>
            Setari
            <div className='right-indicator'></div> 
          </Link>               
          <Link to='/AppTest/asistenta' className='nav-mobile-profile-item'>
            Asistenta
            <div className='right-indicator'></div> 
          </Link>          
          <Link to='/AppTest/autentificare' className='nav-mobile-profile-item'>
            Autentificare
            <div className='right-indicator'></div> 
          </Link>               
      </ul>
    </div>
  )
}

