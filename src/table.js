import React from 'react';
import './index.css';

class Table extends React.Component {
  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Points [avg]</th>
            <th>Salary [per year]</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Lebron James</td>
            <td>28.7</td>
            <td>37,600.000</td>
          </tr>
          <tr>
            <td>Stephen Curry</td>
            <td>27.7</td>
            <td>38,600.000</td>
          </tr>
          <tr>
            <td>Kawhi Leonard</td>
            <td>25.4</td>
            <td>32,000.000</td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default Table;
