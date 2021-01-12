import React from 'react';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'

import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCartHidden } from '../../redux/cart/cart.selectors'
import { selectCurrentUser } from '../../redux/user/user.selectors'
import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink } from './header.styles'
import { signOutStart } from '../../redux/user/user.actions'

const Header = ({ currentUser, hidden, signOutStart }) => (
	<HeaderContainer>
		<LogoContainer to="/">
			<Logo className="logo" />
		</LogoContainer>
		<OptionsContainer>
			<OptionLink to="/shop">
				BOUTIQUE
			</OptionLink>
			<OptionLink to="/shop">
				CONTACT
			</OptionLink>
			{currentUser ? (
				<OptionLink as='div' onClick={signOutStart}>
					DECONNEXION
				</OptionLink>
			) : (
				<OptionLink to="/signin">
					CONNEXION
				</OptionLink>
			)}
			<CartIcon />
		</OptionsContainer>
		{
			hidden ? null : <CartDropdown />
		}
	</HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
	hidden: selectCartHidden
})

const mapDispatchToProps = dispatch => ({
	signOutStart: () => dispatch(signOutStart())
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);