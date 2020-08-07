import * as firebase from 'firebase/app';
import authenticate from 'firebase/auth';

function Authenticate(email, password, success, error) {
	firebase.auth().signInWithEmailAndPassword(email, password)
		.then((result) => {
			success(result);
		})
		.catch((err) => {
			// Handle Errors here.
			const errorCode = err.code;
			const errorMessage = err.message;
			if (errorCode === 'auth/wrong-password') {
				alert('Wrong password.');
			} else {
				alert(errorMessage);
			}
			error(err.message);
		});

}

export default Authenticate;