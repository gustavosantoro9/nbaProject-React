import React from 'react';
import './index.css';

class Form extends React.Component {
  findPlayers() {
    // <TO DO>
  }

  render() {
    return (
      <div className="fieldBox">
        <label>Salary Cap</label>
        <input className="inputFields" type="number" />
        <label>Players Limit</label>
        <input className="inputFields" type="number" />
        <button type="submit" onClick={() => this.findPlayers()}>Search</button>
      </div>
    );
  }
}

export default Form;
