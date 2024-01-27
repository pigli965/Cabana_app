// DropdownMenu.js
import React from 'react';
import { Link } from 'react-router-dom';
import './DropdownMenu.css'; // Create a separate CSS file for styling if needed

const DropdownMenu = ({ isOpen, closeMobileMenu }) => {
  return (
    <div className={isOpen ? 'dropdown-menu active' : 'dropdown-menu'}>
      {/* Add your additional links here */}
      <Link to='/additional-link-1' className='dropdown-link' onClick={closeMobileMenu}>Additional Link 1</Link>
      <Link to='/additional-link-2' className='dropdown-link' onClick={closeMobileMenu}>Additional Link 2</Link>
      {/* Add more links as needed */}
    </div>
  );
};

export default DropdownMenu;