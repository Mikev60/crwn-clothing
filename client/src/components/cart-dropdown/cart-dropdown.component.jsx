import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'
import { withRouter } from 'react-router-dom';

import './cart-dropdown.styles.scss';
import CustomButton from '../customButton/customButton.component';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

const CartDropdown = ({cartItems, history, dispatch}) => {
	return (
		<div className="cart-dropdown">
			<div className="cart-items">
				{
					cartItems.length ? 
					cartItems.map(item => <CartItem key={item.id} item={item} />) 
					: <span class='empty-message'>Votre panier est vide</span>
				}
			</div>
			<CustomButton onClick={() => {
				history.push('/checkout')
				dispatch(toggleCartHidden())
				}}>PAIEMENT</CustomButton>
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropdown));
