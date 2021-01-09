import React from 'react'

import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors'
import CheckoutItem from '../../components/checkout-item/checkout-item.component'

import './checkout.styles.scss'

const CheckoutPage = ({cartItems, cartTotal}) => (
    <div className='checkout-page'>
        <div className='checkout-header'>
            <div className='header-block'>
                <span>Produit</span>
            </div>
            <div className='header-block'>
                <span>Description</span>
            </div>
            <div className='header-block'>
                <span>Quantité</span>
            </div>
            <div className='header-block'>
                <span>Prix</span>
            </div>
            <div className='header-block'>
                <span>Supprimer</span>
            </div>
        </div>
        {
            cartItems.map(cartItem => <CheckoutItem key={cartItem.id} cartItem={cartItem} />)
        }
        <div className='total'>Total: {cartTotal} €</div>
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    cartTotal : selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage);