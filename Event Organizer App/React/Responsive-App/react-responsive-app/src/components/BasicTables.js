import React, { useMemo } from 'react';
import { useTable } from 'react-table';
import MOCK_DATA from '../../src/data/DatePage/MOCK_DATA.json';
import './table.css';

export const BasicTables = () => {
  const data = useMemo(() => MOCK_DATA, []);

  const columns = useMemo(() => {
    // Explicitly define columns based on your data structure
    const generatedColumns = [
      { Header: 'Date 1', accessor: 'participant_data1' },
      { Header: 'Date 2', accessor: 'participant_data2' },
      { Header: 'Date 3', accessor: 'participant_data3' },
      { Header: 'Date 4', accessor: 'participant_data4' },
      { Header: 'Date 5', accessor: 'participant_data5' },
    ];

    return generatedColumns;
  }, []);

  const tableInstance = useTable({
    columns,
    data,
  });

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = tableInstance;

  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}>{column.render('Header')}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => (
                <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
