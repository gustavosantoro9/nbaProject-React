import React from 'react';
import Authenticate from './auth/authenticate';
import history from './history';

class Login extends React.Component {
	success(user){
		console.log(user);
		localStorage.setItem('email', user.email);
		history.push("/menu");
	}
	
	error(errorMessage){
		console.log(errorMessage);
	}

	login() {
		Authenticate('gustavosantoro.9@gmail.com', 'firebase123', this.success, this.error);
	}
	
	render() {
    return (
      <div>
        <div className="box">
          <button onClick={ () => this.login() }>Login</button>
        </div>
      </div>
    );
  }
}

export default Login;
