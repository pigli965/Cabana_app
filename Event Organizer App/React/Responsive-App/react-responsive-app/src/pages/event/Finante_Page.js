import React, { useState} from 'react';
import './Finante_Page.css';

export const FinantePage = () => {
  return (
    <main className="finante-container">
      <div className="finante-input-container">
        <div className='finante-input-card'>
          <div className='finante-subGrid-firstRow'>
            <p className='finante-Optiune-index'>Optiunea 1</p>
          </div>
          <div className='finante-subGrid-secondRow'>
            <p className='finante-Nume-Locatie'>Pensiunea Valea Zanelor</p>
          </div>
          <div className='Categorii-tabel-wrapper'>
            <div className='finante-categorii-tabel'>
              <table className='finante-table'>
                <thead>
                  <tr>
                    <th className='finante-th'>Categorii</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className='finante-td'>Budget</td>
                  </tr>
                  <tr>
                    <td className='finante-td'>Locatie</td>
                  </tr>
                  <tr>
                    <td className='finante-td'>Transport</td>
                  </tr>
                  <tr>
                    <td className='finante-td'>Catering</td>
                  </tr>
                  <tr>
                    <td className='finante-td'>Activities</td>
                  </tr>
                  <tr>
                    <td className='finante-td'>Rezerva</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className='finante-table-item'>
              <table className='finante-table'>
                <thead>
                  <tr>
                    <th className='finante-target-th'>Target</th>
                    <th className='finante-th'>Real</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className='finante-target-td'>
                      <input 
                        className='finante-inputField-target'
                        type='number'
                      />
                    </td>
                    <td className='finante-td'>Buget Real</td>
                    {/* <input 
                      className='inputField-maxNumber' 
                      type="number" 
                      value={maxParticipants} 
                      onChange={handleMaxParticipantsChange} 
                    /> */}
                  </tr>
                  <tr>
                    <td className='finante-target-td'>
                      <input 
                        className='finante-inputField-target'
                        type='number'
                      />
                    </td>
                    <td className='finante-td'>Locatie_Real</td>
                  </tr>
                  <tr>
                    <td className='finante-target-td'>
                      <input 
                        className='finante-inputField-target'
                        type='number'
                      />
                    </td>
                    <td className='finante-td'>Transport_Real</td>
                  </tr>
                  <tr>
                    <td className='finante-target-td'>
                      <input 
                        className='finante-inputField-target'
                        type='number'
                      />
                    </td>
                    <td className='finante-td'>Catering_Real</td>
                  </tr>
                  <tr>
                    <td className='finante-target-td'>
                      <input 
                        className='finante-inputField-target'
                        type='number'
                      />
                    </td>
                    <td className='finante-td'>Activities_Real</td>
                  </tr>
                  <tr>
                    <td className='finante-target-td'>
                      <input 
                        className='finante-inputField-target'
                        type='number'
                      />
                    </td>
                    <td className='finante-td'>Rezerva_Real</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
          </div>
        </div>
        <button className='finante-add-option'>Add</button>
      </div>

      <div className="finante-output-container">
        <ProgressBar/>
      </div>
    </main>
  )
}

export const ProgressBar  = () => {
  const [targetValue, setTargetValue] = useState(100); // Total target value
  const [progressValue, setProgressValue] = useState(0); // Current progress value

  const handleInputChange = (e) => {
    const newValue = parseInt(e.target.value, 10);
    
    if (!isNaN(newValue) && newValue >= 0 && newValue <= targetValue) {
      setProgressValue(newValue);
    }
  };

  return (
    <div>
      <label>
        Target Value:
        <input
          type="number"
          value={targetValue}
          onChange={(e) => setTargetValue(parseInt(e.target.value, 10))}
        />
      </label>
      <br />

      <label>
        Progress Value:
        <input
          type="number"
          value={progressValue}
          onChange={handleInputChange}
        />
      </label>
      <br />

      <div className="progress-bar-container">
        <div
          className="progress-bar"
          style={{ width: `${(progressValue / targetValue) * 100}%` }}
        >
          {progressValue}%
        </div>
      </div>
    </div>
  );
}
