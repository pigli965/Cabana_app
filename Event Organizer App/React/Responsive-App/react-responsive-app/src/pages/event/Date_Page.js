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

  // Function to remove a date input
  const removeDateInput = (index) => {
    const newDates = [...dates];
    newDates.splice(index, 1);
    setDates(newDates);
  };

  // Function to add a new date input
  const addDateInput = () => {
    setDates([...dates, '']);
  };

  return (
    <div className="datePage-container">
      <div className="inputField-container">
        {/* Input fields for dates and maxParticipants */}
        <div className='inputField-item-number'>
          <label className='Max-Participants'>Nr. maxim participati: </label>
          <input className='inputField-maxNumber' type="number" value={maxParticipants} onChange={handleMaxParticipantsChange} />
        </div>
        <button className='Add-button' onClick={addDateInput}>Adauga Data</button>
        {dates.map((date, index) => (
          <div className='inputField-item-date' key={index}>
            <label className='dateLabel'>
              Data {index + 1}: 
            </label>
            <input className='inputField-date' type="string" value={date} onChange={(e) => handleDateChange(index, e.target.value)} />
            <button className='Remove-button' onClick={() => removeDateInput(index)}>Sterge Data</button>
          </div>
        ))}
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
