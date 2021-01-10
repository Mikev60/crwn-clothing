import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51HtH2TEoDMfHQunIcdwXygEuPiyS067mYHyiRRHajo9UDkLypIsS1r7kj9EWKhds5tRKZhF2QODHGJCIc54ftCT000JRCl5aRu'

    const onToken= token => {
        console.log(token);
        alert('Paiement accepté')
    }

    return (
        <StripeCheckout
            label='Payer'
            name='Crwn-e-com-demo'
            billingAddress
            shippingAddress
            image='https://sendeyo.com/up/d/f3eb2117da'
            description={`Le total de vos achats est de ${price} €`}
            currency='EUR'
            amount={priceForStripe}
            panelLabel='Payer'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;