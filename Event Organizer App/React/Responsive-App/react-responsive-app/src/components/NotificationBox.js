import React from 'react'
import './NotificationBox.css';

export const NotificationBox = ({ isSuccesful, isDateValueAdded }) => {
  return (
    <div className={isDateValueAdded ? 'notification-container active' : 'notification-container'}>
        <div className={isSuccesful ? 'notification-item-success active' : 'notification-item-success'}>
            <div className='notification-text-success'>
                Data a fost adaugata.
            </div>
            <div className='notification-value-success'>
                Reusit!
            </div>
        </div>
        <div className={!isSuccesful ? 'notification-item-failed active' : 'notification-item-failed'}>
            <div className='notification-text-failed'>
                Data nu a fost adaugata. Nr. maxim pariticipanti este 0.
            </div>
            <div className='notification-value-failed'>
                Esuat!
            </div>
        </div>          
    </div>
  )
}
