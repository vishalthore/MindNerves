// import './Table.css';
import React, { Fragment, useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import ReactTable, { useSortBy, useTable } from 'react-table';
// import "react-table/react-table.css";


export default function Table(props) {

    const items = useSelector(state => state.items);
    
    const data = React.useMemo(
        () => 
          items
        ,
        [items]
    )
   
    const columns = React.useMemo(
        () => [
          {
            Header: 'City',
            accessor: 'city', // accessor is the "key" in the data
          },
          {
            Header: 'US state',
            accessor: 'state',
          },
          {
            Header: 'Population',
            accessor: 'population', // accessor is the "key" in the data
          },
        ],
        []
    )
   
    const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      rows,
      prepareRow,
    } = useTable({ columns, data }, useSortBy);
   
    return (
        <div>
          <table {...getTableProps()} style={{ border: 'solid 1px black',maxWidth:'500px',margin:'2rem auto' }}>
            <thead>
            {headerGroups.map(headerGroup => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map(column => (
                      <th
                          {...column.getHeaderProps(column.getSortByToggleProps())}
                          style={{
                            borderBottom: 'solid 3px red',
                            color: 'black',
                          }}
                      >
                        {column.render('Header')}
                        <span>
                          {column.isSorted
                              ? column.isSortedDesc
                                  ? '🔽'
                                  : '🔼'
                              : ''}
                       </span>
                      </th>
                  ))}
                </tr>
            ))}
            </thead>
            <tbody {...getTableBodyProps()}>
            {rows.map(row => {
              prepareRow(row)
              return (
                  <tr {...row.getRowProps()}>
                    {row.cells.map(cell => {
                      return (
                          <td
                              {...cell.getCellProps()}
                              style={{
                                padding: '10px',
                                border: 'solid 1px gray',
                              }}
                          >
                            {cell.render('Cell')}
                          </td>
                      )
                    })}
                  </tr>
              )
            })}
            </tbody>
          </table>
        </div>
    );
   }