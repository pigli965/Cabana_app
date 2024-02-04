import React from 'react'
import './HomePage.css'

export const HomePage = () => {
  return (
    <div className='card-container'>
      <div className='overview-card'>
        <h2 className='overview-card-title'>Detalii Eveniment</h2>
        <p className='overview-card-date'>Data Eveniment:</p>
      </div>

      <div className='tutorial-card'>
        <h2 className='tutorial-card-title'>Tutorial</h2>
      </div>
    </div>
  )
}
