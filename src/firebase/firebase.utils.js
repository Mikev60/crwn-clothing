import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { putResolve } from 'redux-saga/effects';

const config = {
	apiKey: 'AIzaSyDUjWMGesJPYewhaQ_nmblzDe2q1sANls4',
	authDomain: 'crwn-ecommerce-app.firebaseapp.com',
	projectId: 'crwn-ecommerce-app',
	storageBucket: 'crwn-ecommerce-app.appspot.com',
	messagingSenderId: '734506965053',
	appId: '1:734506965053:web:920cc98e2e1d777057f254'
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
	if (!userAuth) return;

	const userRef = firestore.doc(`users/${userAuth.uid}`);
	const snapshot = await userRef.get();

	if (!snapshot.exists) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				...additionalData
			});
		} catch (error) {
			console.log('error creating user',error.message);
		}
	}

	return userRef;
};

export const ConvertCollectionsSnapshotToMap = (collections) => {
	const transformedCollections = collections.docs.map(document => {
		const { title, items} = document.data();
		return {
			routeName: encodeURI(title.toLowerCase()),
			id: document.id, 
			title, 
			items
		}
	})
	
	return transformedCollections.reduce((accumulator, collection) => {
		accumulator[collection.title.toLowerCase()] = collection;
		return accumulator;
	}, {})
}

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
	const collectionRef = firestore.collection(collectionKey);
	console.log(collectionRef);

	const batch = firestore.batch();
	objectsToAdd.forEach(obj => {
		const newDocRef = collectionRef.doc();
		batch.set(newDocRef, obj);
	})

	return await batch.commit();
}

export const getCurrentUser = () => {
	return new Promise((resolve, reject) => {
		const unsuscribe = auth.onAuthStateChanged(userAuth => {
			unsuscribe();
			resolve(userAuth);
		}, reject)
	})
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;
