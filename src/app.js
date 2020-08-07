import React from 'react';
import { Router } from 'react-router-dom';
import Routes from './routes';
import history from './history';
import firebase from 'firebase/app';

const firebaseConfig = {
	apiKey: 'AIzaSyBrng9TBzHFmqTbvftEpX_aaeQ_Assx9KE',
	authDomain: 'nbaplayerfinder-ed48b.firebaseapp.com',
	databaseURL: 'https://nbaplayerfinder-ed48b.firebaseio.com',
	projectId: 'nbaplayerfinder-ed48b',
	storageBucket: 'nbaplayerfinder-ed48b.appspot.com',
	messagingSenderId: '251664087736',
	appId: '1:251664087736:web:b8f0daede2c788827a924d',
};

firebase.initializeApp(firebaseConfig);

function App() {
  return (
    <Router history={history}>
      <Routes />
    </Router>
  );
}

export default App;
