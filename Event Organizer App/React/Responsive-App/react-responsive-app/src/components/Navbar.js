import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logoImage from './logoImages/white-app-logo.png';
// import DropdownMenu from './DropdownMenu';

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropMenu, setdropMenu] = useState(false);
  const [disableNavbarItem, setDisableNavbarItems] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);

  const handledropMenu = () => {
    setdropMenu(!dropMenu);
    console.log(dropMenu);
  }

  const hideEventItems = () => {
    if (window.innerWidth <= 1500 && window.innerWidth >= 1100) {
      setDisableNavbarItems(true);
    } else {
      setDisableNavbarItems(false);
    }
  };

  useEffect(() => {
    hideEventItems();
  }, []);

  window.addEventListener('nav-secondary-menu', hideEventItems);

  const closeMobileMenu = () => {
    setClick(false);
    setdropMenu(false);
    console.log('dropMenu =' + dropMenu);
  }

  const showButton = () => {
    if (window.innerWidth <= 1100) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className={disableNavbarItem ? 'navbar-secondary-container' : 'navbar-primary-container'}>
          {/* <div className={disableNavbarItem ? 'nav-secondary-menu' : 'nav-primary-menu'}>
            <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
              EventOrganizer
              <img src={logoImage} alt='logoImage'></img>
            </Link>
            <div className='menu-icon' onClick={handleClick}>
              <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-primary-menu'}>
              <li className='nav-item'>
                <Link to='/alege-data' className='nav-links' onClick={closeMobileMenu}>Alege Data</Link>
              </li>
              <li className='nav-item'>
                <Link to='/participanti' className='nav-links' onClick={closeMobileMenu}>Participanti</Link>
              </li>
              <li className='nav-item'>
                <Link to='/finante' className='nav-links' onClick={closeMobileMenu}>Finante</Link>
              </li>
              <li className='nav-item'>
                <Link to='/locatie' className='nav-links' onClick={closeMobileMenu}>Locatie</Link>
              </li>
              <li className='nav-item'>
                <Link to='/transport' className='nav-links' onClick={closeMobileMenu}>Transport</Link>
              </li>
              <li className='nav-item'>
                <Link to='/catering' className='nav-links' onClick={closeMobileMenu}>Catering</Link>
              </li>
              <li className='nav-item'>
                <Link to='/activitati' className='nav-links' onClick={closeMobileMenu}>Activitati</Link>
              </li>
              <li>
                <Link to='/autentificare' className='nav-links-mobile' onClick={closeMobileMenu}>Autentificare</Link>
              </li>
            </ul>
            {button && <Button buttonStyle='btn--outline'>Autentificare</Button>}
          </div> */}

          <div className={disableNavbarItem ? 'nav-secondary-menu' : 'navbar-primary-container nav-primary-menu'}>
            <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
              EventOrganizerz
              <img src={logoImage} alt='logoImage'></img>
            </Link>
            <div className='menu-icon' onClick={handleClick}>
              <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-primary-menu'}>
              <li className='nav-item'>
                <Link to='/alege-data' className='nav-links' onClick={closeMobileMenu}>Alege Data</Link>
              </li>
              <li className='nav-item'>
                <Link to='/participanti' className='nav-links' onClick={closeMobileMenu}>Participanti</Link>
              </li>
              <li className='nav-item'>
                <Link to='/finante' className='nav-links' onClick={closeMobileMenu}>Finante</Link>
              </li>

              <li>
                <Link to='/locatie' className={disableNavbarItem ? 'nav-link-item-menu-NOTshown' : 'nav-links'} onClick={closeMobileMenu}>Locatie</Link>
              </li>
              <li>
                <Link to='/transport' className={disableNavbarItem ? 'nav-link-item-menu-NOTshown' : 'nav-links'} onClick={closeMobileMenu}>Transport</Link>
              </li>
              <li>
                <Link to='/catering' className={disableNavbarItem ? 'nav-link-item-menu-NOTshown' : 'nav-links'} onClick={closeMobileMenu}>Catering</Link>
              </li>
              <li>
                <Link to='/activitati' className={disableNavbarItem ? 'nav-link-item-menu-NOTshown' : 'nav-links'} onClick={closeMobileMenu}>Activitati</Link>
              </li>

              <div className='nav-item' onClick={handledropMenu}>
                <div className={`nav-links ${disableNavbarItem ? 'dropdown-menu-icon-active' : 'dropdown-menu-icon'}`}>
                  . . .
                </div>            
                <div className={dropMenu ? 'dropdown-menu active' : 'dropdown-menu'}>
                  <li>
                    <Link to='/locatie' className='nav-links' onClick={closeMobileMenu}>Locatie</Link>
                  </li>
                  <li>
                    <Link to='/transport' className='nav-links' onClick={closeMobileMenu}>Transport</Link>
                  </li>
                  <li>
                    <Link to='/catering' className='nav-links' onClick={closeMobileMenu}>Catering</Link>
                  </li>
                  <li>
                    <Link to='/activitati' className='nav-links' onClick={closeMobileMenu}>Activitati</Link>
                  </li>
                </div>
              </div>
              <li>
                <Link to='/autentificare' className='nav-links-mobile' onClick={closeMobileMenu}>Autentificare</Link>
              </li>
            </ul>
            {button && <Button buttonStyle='btn--outline'>Autentificare</Button>}		
          </div>

        </div>       
      </nav>
    </>
  );
}

export default Navbar;