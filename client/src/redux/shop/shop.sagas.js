import { takeLatest, call, put } from 'redux-saga/effects';
import ShopActionsTypes from './shop.types';
import { firestore, ConvertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';
import { fetchCollectionsSuccess, fetchCollectionsFailure } from './shop.actions';

/* Résumé saga mémo
take : récupère payload de l'action une fois terminée ex const incrementPayload = yield take('INCREMENT')
takeEvery : à chaque appel de l'action, execute une action en second argument ex yield takeEvery('INCREMENT', onIncrement);
takeLatest : trigger seulement le dernier si on clic plusieurs fois par exemple 
*/

export function* fetchCollectionsAsync() {
	yield console.log('i am fired');

	try {
		const collectionRef = firestore.collection('collections');
		const snapshot = yield collectionRef.get();
		const collectionsMap = yield call(ConvertCollectionsSnapshotToMap, snapshot); // Permet de mettre en attente au cas où la fonction prend plus de temps que prévu
		yield put(fetchCollectionsSuccess(collectionsMap)); // put = manière de dispatch dans saga
	} catch (error) {
		yield put(fetchCollectionsFailure(error.message));
	}
}

export function* fetchCollectionsStart() {
	yield takeLatest(ShopActionsTypes.FETCH_COLLECTIONS_START, fetchCollectionsAsync);
}
