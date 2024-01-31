import React from 'react'
import { Link } from 'react-router-dom'
import './Sidebars_Mobile_Menus.css';

export const SidebarHamburgerMenu = ({events_MenuActive}) => {
  console.log("events_MenuActive: ", events_MenuActive)
  return (
      <div>
          <ul className={events_MenuActive ? 'nav-mobile-events-menu active' : 'nav-mobile-events-menu'}>               
                  <Link to='/alege-data' className='nav-mobile-event-item' >Alege Data</Link>                 
                  <Link to='/participanti' className='nav-mobile-event-item' >Participanti</Link>        
                  <Link to='/finante' className='nav-mobile-event-item' >Finante</Link>                 
                  <Link to='/locatie' className='nav-mobile-event-item' >Locatie</Link>     
                  <Link to='/transport' className='nav-mobile-event-item' >Transport</Link>                  
                  <Link to='/transport' className='nav-mobile-event-item' >Transport</Link>                  
                  <Link to='/catering' className='nav-mobile-event-item' >Catering</Link>               
                  <Link to='/activitati' className='nav-mobile-event-item' >Activitati</Link>                   
              </ul>           
      </div>
  )
}

export const SidebarProfile = ({profile_mobile_DropdownMenuActive}) => {
  console.log("profile_mobile_DropdownMenuActive: ", profile_mobile_DropdownMenuActive)
  return (
    <div>
      <ul className={profile_mobile_DropdownMenuActive ? 'profile_mobile-dropdown-menu active' : 'profile_mobile-dropdown-menu'}>
          <Link to='/profil' className='nav-mobile-event-item'>Profil</Link>        
          <Link to='/notificari' className='nav-mobile-event-item'>Notificari</Link>              
          <Link to='/setari' className='nav-mobile-event-item'>Setari</Link>               
          <Link to='/asistenta' className='nav-mobile-event-item'>Asistenta</Link>          
          <Link to='/autentificare' className='nav-mobile-event-item'>Autentificare</Link>               
      </ul>
    </div>
  )
}

