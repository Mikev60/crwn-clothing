import React from 'react';

import './cart-dropdown.styles.scss';
import CustomButton from '../customButton/customButton.component';

const CartDropdown = () => {
	return (
		<div className="cart-dropdown">
			<div className="cart-items" />
			<CustomButton>PAIEMENT</CustomButton>
		</div>
	);
};

export default CartDropdown;