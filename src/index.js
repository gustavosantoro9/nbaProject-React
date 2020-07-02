import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Inputs extends React.Component {
	render(){
		return (
			<div className="fieldBox">
				<label>Limite Salário</label>
				<input className="inputFields" type="number"></input>
				<label>Limite Jogadores</label>
				<input className="inputFields" type="number"></input>
				<button>Search</button>
			</div>
		);
	}
}

class Table extends React.Component {
	render(){
		return(
			<table>
				<tr>
					<th>Name</th>
					<th>Points [avg]</th>
					<th>Salary [per year]</th>
				</tr>
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
			</table>
		);
	}
}

class Menu extends React.Component {
	render(){
		return(
			<div>
				<div className="box">
				<h1>NBA Player Finder</h1>
				<Inputs />
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