import React, { useState, useMemo } from 'react';
import { useTable } from 'react-table';
import MOCK_DATA from '../../data/DatePage/MOCK_DATA.json';
// import { COLUMNS } from './columns';
import './Date_Page.css';
import '../../App.css';

export const DatePage = () => {
  // State variables
  const [dates, setDates] = useState([]); // Array to store date values
  const [maxParticipants, setMaxParticipants] = useState(0);

  // Function to update maxParticipants
  const handleMaxParticipantsChange = (e) => {
    setMaxParticipants(Number(e.target.value));
  };

  // Function to handle date input changes
  // const handleDateChange = (index, value) => {
  //   const newDates = [...dates];
  //   newDates[index] = value;
  //   setDates(newDates);
  // };
  const handleDateChange = (index, value) => {
    // Assuming the input value is in the format "yyyy-MM-dd"
    const selectedDate = new Date(value);
  
    // Format the date as "dd-Mon-yyyy"
    const formattedDate = `${selectedDate.getDate()}-${getMonthAbbreviation(selectedDate.getMonth())}-${selectedDate.getFullYear()}`;
  
    // Use the formatted date in your state
    const newDates = [...dates];
    newDates[index] = formattedDate;
    setDates(newDates);
  };
  
  // Function to get the three-letter abbreviation of a month
  const getMonthAbbreviation = (monthIndex) => {
    const monthsAbbreviation = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return monthsAbbreviation[monthIndex];
  };

  // Function to format a date as "dd-Mon-yyyy"
  const formatDate = (inputDate) => {
    const selectedDate = new Date(inputDate);
    return `${selectedDate.getDate()}-${getMonthAbbreviation(selectedDate.getMonth())}-${selectedDate.getFullYear()}`;
  };

  // Function to remove a date input
  const removeDateInput = (index) => {
    const newDates = [...dates];
    newDates.splice(index, 1);
    setDates(newDates);
  };

  // Function to add a new date input
  const addDateInput = () => {
    const newDates = [...dates, null];
    setDates(newDates);
  }

  return (
    <div className="datePage-container">
      <div className="inputField-container">
        <div className='inputField-overflow'>
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
              <input className='inputField-date' type="date" value={date ? formatDate(date) : ''} onChange={(e) => handleDateChange(index, e.target.value)} />
              <button className='Remove-button' onClick={() => removeDateInput(index)}>Sterge Data</button>
            </div>
          ))}
        </div> 
      </div>

      <div className="table-container">
        <div className='table-item'>
          {/* Table */}
          <DateTable />
          {/* {maxParticipants > 0 && (
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
          )} */}
        </div>
      </div>
    </div>
  )
}

export const DateTable = () => {

  const columns = useMemo(() => DateCOLUMNS, [])
  const data = useMemo(() => MOCK_DATA, [])

  const tableInstance = useTable({
      columns,
      data
  })

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow,} = tableInstance

  return (
      <table {...getTableProps()}>
          <thead> 
              {headerGroups.map((headerGroups) => (
                  <tr {...headerGroups.getHeaderGroupProps()}>
                      {headerGroups.headers.map((column) => (
                              <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                          ))}
                  </tr>
              ))}  
          </thead>
          <tbody {...getTableBodyProps()}>
              {rows.map(row => {
                  prepareRow(row)
                  return (
                      <tr {...row.getRowProps()}>
                          {row.cells.map((cell) => {
                              return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                          })}   
                      </tr>
                  )
              })}       
          </tbody>
      </table>
  )
}

export const DateCOLUMNS = [
  {
      Header: 'Data 1',
      accessor: 'participant_data1'
  },

  {
      Header: 'Data 2',
      accessor: 'participant_data2'
  },

  {
      Header: 'Data 3',
      accessor: 'participant_data3'
  },

  {
      Header: 'Data 4',
      accessor: 'participant_data4'
  },

  {
      Header: 'Data 5',
      accessor: 'participant_data5'
  }
]
