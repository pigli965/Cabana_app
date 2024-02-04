import React, { useState } from 'react';
import './Date_Page.css';
import '../../App.css';

export const DatePage = () => {
  // State variables
  const [dates, setDates] = useState(['']); // Array to store date values
  const [maxParticipants, setMaxParticipants] = useState(0);

  // Function to update maxParticipants
  const handleMaxParticipantsChange = (e) => {
    setMaxParticipants(Number(e.target.value));
  };

  // Function to handle date input changes
  const handleDateChange = (index, value) => {
    const newDates = [...dates];
    newDates[index] = value;
    setDates(newDates);
  };

  // Function to add a new date input
  const addDateInput = () => {
    setDates([...dates, '']);
  };

  return (
    <div className="date-page-wrapper">
      <div className="input-container">
        {/* Input fields for dates and maxParticipants */}
        {dates.map((date, index) => (
          <div key={index}>
            <label>Date {index + 1}: <input type="string" value={date} onChange={(e) => handleDateChange(index, e.target.value)} /></label>
          </div>
        ))}
        <button className='Add-button' onClick={addDateInput}>+</button>

        <label className='Max-Participants'>Max Participants: <input type="number" value={maxParticipants} onChange={handleMaxParticipantsChange} /></label>

        
      </div>

      <div className="table-container">
        {/* Table */}
        {maxParticipants > 0 && (
          <table>
            <thead>
              <tr>
                {dates.map((date, index) => (
                  <th key={index}>{date}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {Array.from({ length: maxParticipants }, (_, rowIndex) => (
                <tr key={rowIndex}>
                  {dates.map((date, colIndex) => (
                    <td key={colIndex}></td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  )
}
