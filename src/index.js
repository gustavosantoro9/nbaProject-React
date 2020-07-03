import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Form from './form';
import Table from './table';

class Menu extends React.Component {
  render() {
    return (
      <div>
        <div className="box">
          <h1>NBA Player Finder</h1>
          <Form />
        </div>
        <div className="box">
          <Table />
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <Menu />,
  document.getElementById('root'),
);
