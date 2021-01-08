import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey: 'AIzaSyDUjWMGesJPYewhaQ_nmblzDe2q1sANls4',
	authDomain: 'crwn-ecommerce-app.firebaseapp.com',
	projectId: 'crwn-ecommerce-app',
	storageBucket: 'crwn-ecommerce-app.appspot.com',
	messagingSenderId: '734506965053',
	appId: '1:734506965053:web:920cc98e2e1d777057f254'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
//provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
