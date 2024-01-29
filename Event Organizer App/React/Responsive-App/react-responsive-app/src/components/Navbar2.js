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

    const [isLogoHover, setIsLogoHover] = useState(false);
    const [isProfileMenuHover, setIsProfileMenuHover] = useState(false);

    const [profile_DropdownMenuActive, setProfile_DropdownMenuActive] = useState(false)
    const [events_DropdownMenuActive, setevents_DropdownMenuActive] = useState(false)

    const Trigger_DropdownMenu = () => {
        setProfile_DropdownMenuActive(!profile_DropdownMenuActive);
    }
    const Trigger_EventDropdownMenu = () => {
        setevents_DropdownMenuActive(!events_DropdownMenuActive);
    }

    return (
        <header className='navBar-container'>
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
                <div className='nav-event-item' onClick={Trigger_EventDropdownMenu}>
                    . . .
                    <ul className={events_DropdownMenuActive ? 'events_dropdown-menu-active' : 'events_dropdown-menu-inactive'}>
                        <Link to='/locatie' className='nav-profile-dropdown-item' >Locatie</Link>
                        <Link to='/transport' className='nav-profile-dropdown-item' >Transport</Link>
                        <Link to='/catering' className='nav-profile-dropdown-item' >Catering</Link>
                        <Link to='/activitati' className='nav-profile-dropdown-item' >Activitati</Link>
                    </ul>
                </div>
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
        </header> 
    )
}

export const Navbar3 = () => {

    const [profile_mobile_DropdownMenuActive, setProfile_mobile_DropdownMenuActive] = useState(false)
    const [events_MenuActive, setevents_MenuActive] = useState(false)

    
    const Trigger_EventsMenu = () => {
        setevents_MenuActive(!events_MenuActive);
        setProfile_mobile_DropdownMenuActive(false);
    }
    const Trigger_Mobile_Profile_DropdownMenu = () => {
        setProfile_mobile_DropdownMenuActive(!profile_mobile_DropdownMenuActive);
        setevents_MenuActive(false);
    }

    return (
        <div className='navBar-mobile-container'>
            <div className='navbar-hamburgerMenu' onClick={Trigger_EventsMenu}>
                {/* <i className={events_MenuActive ? 'fas fa-times' : 'fas fa-bars'} /> */}
                <img src={white_hamburgerMenu} alt='white_hamburgerMenu'></img>
            </div>

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

            <Link to='/' className='navbar-logo-mobile'>
                    <img src={white_mobile_logoImage} alt='white_mobile_logoImage'></img>       
            </Link>

            <div to='/profil' className='navbar-mobile-profile-menu' onClick={Trigger_Mobile_Profile_DropdownMenu} >
                    <img src={white_mobile_profileMenu} alt='white_mobile_profileMenu'></img>
            </div>               
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