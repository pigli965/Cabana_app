import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import white_logoImage from './logoImages/white-logo-item.png';
import black_logoImage from './logoImages/black-logo-item.png';
import white_profileMenu from './logoImages/white-profile-menu.png';
import hover_white_profileMenu from './logoImages/hover-white-profile-menu.png';
import './Navbar2.css';

export const Navbar1 = () => {

    const [isLogoHover, setIsLogoHover] = useState(false);
    const [isProfileMenuHover, setIsProfileMenuHover] = useState(false);

    const [profile_DropdownMenuActive, setProfile_DropdownMenuActive] = useState(false)

    const Trigger_DropdownMenu = () => {
        setProfile_DropdownMenuActive(!profile_DropdownMenuActive);
    }
    
    return (
        <div className='navBar-container'>
            <Link to='/' className='navbar-logo' 
                onMouseEnter={() => setIsLogoHover(true)}
                onMouseLeave={() => setIsLogoHover(false)} 
            >
                {isLogoHover ? (
                    <img src={black_logoImage} alt='black_logoImage'></img>
                ) : (
                    <img src={white_logoImage} alt='white_logoImage'></img>
                )}              
            </Link>
            <ul className='navbar-eventList'>
                <Link to='/alege-data' className='nav-event-item' >Alege Data</Link>
                <Link to='/participanti' className='nav-event-item' >Participanti</Link>
                <Link to='/finante' className='nav-event-item' >Finante</Link>
                <Link to='/locatie' className='nav-event-item' >Locatie</Link>
                <Link to='/transport' className='nav-event-item' >Transport</Link>
                <Link to='/catering' className='nav-event-item' >Catering</Link>
                <Link to='/activitati' className='nav-event-item' >Activitati</Link>
            </ul>
            <Link to='/profil' className='navbar-profile-menu' 
                onClick={Trigger_DropdownMenu} 
                onMouseEnter={() => setIsProfileMenuHover(true)}
                onMouseLeave={() => setIsProfileMenuHover(false)}
            >
                {isProfileMenuHover ? (
                    <img src={hover_white_profileMenu} alt='hover_white_profileMenu'></img>
                ) : (
                    <img src={white_profileMenu} alt='white_profileMenu'></img>
                )}
            </Link>
                
            <ul className={profile_DropdownMenuActive ? 'profile_dropdown-menu-active' : 'profile_dropdown-menu-inactive'}>
                <Link to='/profil' className='nav-profile-dropdown-item'>Profil</Link>
                <Link to='/notificari' className='nav-profile-dropdown-item'>Notificari</Link>
                <Link to='/setari' className='nav-profile-dropdown-item'>Setari</Link>
                <Link to='/asistenta' className='nav-profile-dropdown-item'>Asistenta</Link>
                <Link to='/autentificare' className='nav-profile-dropdown-item'>Autentificare</Link>
            </ul>
        </div> 
    )
  }

export const Navbar2 = () => {
  return (
    <ul className='navBar-container'>
        Item_1
        Item_2
        Item_3
        Item_4
    </ul>
  )
}

export const Navbar3 = () => {
    return (
        <ul className='navBar-container'>
            Profil
            Autentificare
        </ul>
    )
  }