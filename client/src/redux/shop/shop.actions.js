import ShopActionsTypes from './shop.types';

import {firestore, ConvertCollectionsSnapshotToMap} from '../../firebase/firebase.utils'

export const fetchCollectionsStart = () => ({
	type: ShopActionsTypes.FETCH_COLLECTIONS_START
});

export const fetchCollectionsSuccess = collectionsMap => ({
    type: ShopActionsTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: collectionsMap
})

export const fetchCollectionsFailure = error => ({
    type: ShopActionsTypes.FETCH_COLLECTIONS_FAILURE,
    payload: error
})

export const fetchCollectionsStartAsync = () => {
	return (dispatch) => {
        const collectionRef = firestore.collection('collections');
        dispatch(fetchCollectionsStart());

		collectionRef.get().then((snapshot) => {
			const collectionsMap = ConvertCollectionsSnapshotToMap(snapshot);
			dispatch(fetchCollectionsSuccess(collectionsMap))
			this.setState({ loading: false });
		}).catch(error => fetchCollectionsFailure(error));
	};
};
