import React from 'react';
import { Router } from 'react-router-dom';
import Routes from './routes';
import history from './history';
import firebase from 'firebase/app';

const firebaseConfig = {
	apiKey: "AIzaSyDIOHO--xxpTYScDWmEpotYEY7-wH0cX-8",
	authDomain: "authenticationtest-bf76f.firebaseapp.com",
	databaseURL: "https://authenticationtest-bf76f.firebaseio.com",
	projectId: "authenticationtest-bf76f",
	storageBucket: "authenticationtest-bf76f.appspot.com",
	messagingSenderId: "556171208575",
	appId: "1:556171208575:web:2e1033d8e004a8b8805c4a"
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
