import React, { useState, useMemo, useEffect } from 'react';
import { useTable } from 'react-table';
import Date_Vote from '../../data/DatePage/Date_Vote.json';
// import { COLUMNS } from './columns';
import './Date_Page.css';
import '../../App.css';

const formatDate = (inputDate, isFormatted) => {
  const selectedDate = new Date(inputDate);

  if (isFormatted) {
    return `${selectedDate.getDate()}-${getMonthAbbreviation(selectedDate.getMonth())}-${selectedDate.getFullYear()}`;
  } else {
    return `${selectedDate.getFullYear()}-${(selectedDate.getMonth() + 1).toString().padStart(2, '0')}-${selectedDate.getDate().toString().padStart(2, '0')}`;
  }
};

const getMonthAbbreviation = (monthIndex) => {
  const monthsAbbreviation = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return monthsAbbreviation[monthIndex];
};

export const DatePage = ({ isSuccesful, setIsSuccesful, setIsDateValueAdded }) => {
  // State variables
  const [dates, setDates] = useState([]); // Array to store date values
  const [maxParticipants, setMaxParticipants] = useState(0);

  // Function to update maxParticipants
  const handleMaxParticipantsChange = (e) => {
    setMaxParticipants(Number(e.target.value));
  };

  // Function to handle date input changes
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

  // Memoized value to determine isSuccesful
  const memoizedIsSuccesful = useMemo(() => {
    return maxParticipants > 0;
  }, [maxParticipants]);

  // Use useEffect to update isSuccesful after the component has rendered
  useEffect(() => {
    setIsSuccesful(memoizedIsSuccesful);
  }, [memoizedIsSuccesful, setIsSuccesful]);

  const handleAddDateNotificationSuccess = () => {
    setIsDateValueAdded(true);

    setTimeout(() => {
      setIsDateValueAdded(false);
    }, 4000);
  };

  return (
    <div className="datePage-container">
      <div className="inputField-container">
        <div className='inputField-overflow'>
          {/* Input fields for dates and maxParticipants */}
          <div className='inputField-item-number'>
            <label className='Max-Participants'>Nr. maxim participati: </label>
            <input 
              className='inputField-maxNumber' 
              type="number" 
              value={maxParticipants} 
              onChange={handleMaxParticipantsChange} 
            />
          </div>
          <button className='Add-button' onClick={addDateInput}>Adauga Data</button>
          {dates.map((date, index) => (
            <div className='inputField-item-date' key={index}>
              <label className='dateLabel'>
                Data {index + 1}: 
              </label>
              <input 
                className='inputField-date' 
                type="date" 
                value={date ? formatDate(date) : ''} 
                onChange={(e) => {handleDateChange(index, e.target.value); handleAddDateNotificationSuccess(true)}} 
              />
              <button className='Remove-button' onClick={() => removeDateInput(index)}>Sterge Data</button>
            </div>
          ))}
        </div> 
      </div>

      <div className="table-container">
        <div className='table-item'>
          {/* Table */}         
          {isSuccesful && maxParticipants > 0 && (
            <DateTable dates={dates} maxParticipants={maxParticipants} />
          )} 
        </div>
      </div>
    </div>
  )
}

export const DateTable = ({ dates, maxParticipants }) => {
  const columns = useMemo(() => getColumns(dates), [dates]);
  const data = useMemo(() => Date_Vote.slice(0, maxParticipants), [maxParticipants]);

  const tableInstance = useTable({
    columns,
    data,
  });

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = tableInstance;

  return (
    <table className='datePage-table' {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()} key="header">
            {headerGroup.headers.map((column, columnIndex) => (
              <th className='datePage-th' {...column.getHeaderProps()} key={columnIndex}>
                {column.render('Header')}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, rowIndex) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()} key={rowIndex}>
              {row.cells.map((cell, cellIndex) => (
                <td className='datePage-td' {...cell.getCellProps()} key={cellIndex}>
                  {cell.render('Cell')}
                </td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

const getColumns = (dates) => {
  // Create an array of objects with appropriate accessors
  const columns = dates.map((date, index) => ({
    Header: date ? formatDate(date, true) : `Data ${index + 1}`,
    accessor: `participant_data${index + 1}`,
  }));

  return columns;
};