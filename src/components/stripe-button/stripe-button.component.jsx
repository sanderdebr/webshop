import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_w3KRiuWGgshLn9AljmH8zCi800hV4VsZJ2';

    const onToken = token => {
        alert('Payment succesful!');
    }

    return (
        <StripeCheckout
            label='Pay Now'
            name='DIAMOND Clothing'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CIz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
};

export default StripeCheckoutButton;