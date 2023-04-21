import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase';
import './table.css'

const Table = () => {
    const [tableData, setTableData] = useState([]);
    /*
  useEffect(() => {
    const fetchTableData = async () => {
      const tableCollection = collection(db, 'tableData');
      const tableDataSnapshot = await getDocs(tableCollection);
      const tableData = tableDataSnapshot.docs.map(doc => doc.data());
      setTableData(tableData);
    };
    fetchTableData();
  }, []); */
  return (
    <div className='table__container'>
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Descriptions</th>
          <th>Status</th>
          <th>Due Date</th>
        </tr>
      </thead>
      <tbody>
        {tableData.map((row, index) => (
          <tr key={index}>
            <td>{row.title}</td>
            <td>{row.description}</td>
            <td>{row.status}</td>
            <td>{row.date}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
};

export default Table;