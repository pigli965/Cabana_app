import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import white_logoImage from './logoImages/white-logo-item.png';
import black_logoImage from './logoImages/black-logo-item.png';
import white_profileMenu from './logoImages/white-profile-menu.png';
import hover_white_profileMenu from './logoImages/hover-white-profile-menu.png';
import white_hamburgerMenu from './logoImages/white-hamburger-menu.png';
import white_mobile_profileMenu from './logoImages/white-mobile-profile-menu.png';
import white_mobile_logoImage from './logoImages/white-mobile-logo-item.png';
import './Navbar2.css';

export const Navbar1 = ({triggerDropdownMenu, profile_DropdownMenuActive}) => {

    const [isLogoHover, setIsLogoHover] = useState(false);
    const [isProfileMenuHover, setIsProfileMenuHover] = useState(false);

    // const [profile_DropdownMenuActive, setProfile_DropdownMenuActive] = useState(false)

    // const triggerDropdownMenu = () => {
    //     setProfile_DropdownMenuActive(!profile_DropdownMenuActive);
    // }
    
    return (
        <div className='navBar-container'>
            <Link to='/AppTest/home' className='navbar-logo' 
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
                <Link to='/AppTest/alege-data' className='nav-event-item' >Alege Data</Link>
                <Link to='/AppTest/participanti' className='nav-event-item' >Participanti</Link>
                <Link to='/AppTest/finante' className='nav-event-item' >Finante</Link>
                <Link to='/AppTest/locatie' className='nav-event-item' >Locatie</Link>
                <Link to='/AppTest/transport' className='nav-event-item' >Transport</Link>
                <Link to='/AppTest/catering' className='nav-event-item' >Catering</Link>
                <Link to='/AppTest/activitati' className='nav-event-item' >Activitati</Link>
            </ul>
            <div className='navbar-profile-menu' 
                onClick={triggerDropdownMenu} 
                onMouseEnter={() => setIsProfileMenuHover(true)}
                onMouseLeave={() => setIsProfileMenuHover(false)}
            >
                {isProfileMenuHover ? (
                    <img src={hover_white_profileMenu} alt='hover_white_profileMenu'></img>
                ) : (
                    <img src={white_profileMenu} alt='white_profileMenu'></img>
                )}
            </div>
                
            <ul className={profile_DropdownMenuActive ? 'flow profile_dropdown-menu active' : 'flow profile_dropdown-menu'}>
                <Link to='/AppTest/profil' className='nav-profile-dropdown-item'>Profil</Link>
                <Link to='/AppTest/notificari' className='nav-profile-dropdown-item'>Notificari</Link>
                <Link to='/AppTest/setari' className='nav-profile-dropdown-item'>Setari</Link>
                <Link to='/AppTest/asistenta' className='nav-profile-dropdown-item'>Asistenta</Link>
                <Link to='/AppTest/autentificare' className='nav-profile-dropdown-item'>Autentificare</Link>
            </ul>
        </div>        
    )
}

export const Navbar2 = ({
    triggerMediumResolution_DropdownMenu,
    triggerMediumResolution_EventDropdownMenu,
    profile_MediumResolutionDropdownMenuActive,
    events_MediumResolutionDropdownMenuActive,
}) => {
    const [isLogoHover, setIsLogoHover] = useState(false);
    const [isProfileMenuHover, setIsProfileMenuHover] = useState(false);

    return (
        <header className='navBar-container'>
            <Link to='/AppTest/home' className='navbar-logo' 
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
                <Link to='/AppTest/alege-data' className='nav-event-item' >Alege Data</Link>
                <Link to='/AppTest/participanti' className='nav-event-item' >Participanti</Link>
                <Link to='/AppTest/finante' className='nav-event-item' >Finante</Link>
                <div className='nav-event-menu-item' onClick={triggerMediumResolution_EventDropdownMenu}>
                    . . .
                    <ul className={events_MediumResolutionDropdownMenuActive ? 'flow events_dropdown-menu active' : 'flow events_dropdown-menu'}>
                        <Link to='/AppTest/locatie' className='nav-profile-dropdown-item' >Locatie</Link>
                        <Link to='/AppTest/transport' className='nav-profile-dropdown-item' >Transport</Link>
                        <Link to='/AppTest/catering' className='nav-profile-dropdown-item' >Catering</Link>
                        <Link to='/AppTest/activitati' className='nav-profile-dropdown-item' >Activitati</Link>
                    </ul>
                </div>
                  
            </ul>
                     
            <div className='navbar-profile-menu' 
                onClick={triggerMediumResolution_DropdownMenu} 
                onMouseEnter={() => setIsProfileMenuHover(true)}
                onMouseLeave={() => setIsProfileMenuHover(false)}

            >
                {isProfileMenuHover ? (
                    <img src={hover_white_profileMenu} alt='hover_white_profileMenu'></img>
                ) : (
                    <img src={white_profileMenu} alt='white_profileMenu'></img>
                )}
            </div>
                
            <ul className={profile_MediumResolutionDropdownMenuActive ? 'flow profile_dropdown-menu active' : 'flow profile_dropdown-menu'}>
                <Link to='/AppTest/profil' className='nav-profile-dropdown-item'>Profil</Link>
                <Link to='/AppTest/notificari' className='nav-profile-dropdown-item'>Notificari</Link>
                <Link to='/AppTest/setari' className='nav-profile-dropdown-item'>Setari</Link>
                <Link to='/AppTest/asistenta' className='nav-profile-dropdown-item'>Asistenta</Link>
                <Link to='/AppTest/autentificare' className='nav-profile-dropdown-item'>Autentificare</Link>
            </ul>
        </header> 
    )
}

export const Navbar3 = ({ triggerMobileEventsMenu, triggerMobileProfileDropdownMenu }) => {
    return (
        <nav className='navBar-mobile-container'>
            <div className='navbar-hamburgerMenu' onClick={triggerMobileEventsMenu}>
                <img src={white_hamburgerMenu} alt='white_hamburgerMenu'></img>
            </div>

            <Link to='/AppTest/home' className='navbar-logo-mobile'>
                    <img src={white_mobile_logoImage} alt='white_mobile_logoImage'></img>       
            </Link>

            <div className='navbar-mobile-profile-menu' onClick={triggerMobileProfileDropdownMenu} >
                    <img src={white_mobile_profileMenu} alt='white_mobile_profileMenu'></img>
            </div>               
        </nav>
    )
}