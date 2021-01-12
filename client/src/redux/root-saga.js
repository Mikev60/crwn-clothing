/* 
    Permet de créer un root saga, évitant de faire saga.run à chaque fois
*/
import { all, call } from 'redux-saga/effects';

import { fetchCollectionsStart } from './shop/shop.sagas';
import { userSagas } from './user/user.sagas'
import { cartSagas } from './cart/cart.sagas'

export default function* rootSaga() {
	yield all([call(fetchCollectionsStart), call(userSagas), call(cartSagas)]); // All prend un array de sagas, permettant d'éviter multiples yield, et de call n'importe quel saga
}
