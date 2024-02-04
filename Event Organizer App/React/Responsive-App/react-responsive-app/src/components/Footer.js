import React from 'react'
import './Footer.css';

export const Footer = () => {
  return (
    <div className='footer-item'>
        &copy; {new Date().getFullYear()} MyCabin | All rights reserved | Terms Of Service | Privacy
    </div>
  )
}