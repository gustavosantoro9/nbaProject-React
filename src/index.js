import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Form extends React.Component {
	findPlayers() {
		// <TO DO>
	}

	render() {
		return (
			<div className="fieldBox">
				<label>Salary Cap</label>
				<input className="inputFields" type="number"></input>
				<label>Players Limit</label>
				<input className="inputFields" type="number"></input>
				<button onClick={() => this.findPlayers()}>Search</button>
			</div>
		);
	}
}

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
	document.getElementById('root')
);