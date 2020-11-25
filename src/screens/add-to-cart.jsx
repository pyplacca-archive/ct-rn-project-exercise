import React from 'react';
import Screen from '../components/onboarding/screen';
import utils from '../utils';


function AddToCart (props) {
	return (
		<Screen
			title='Add To Cart'
			subtitle={utils.lorem}
			image={require('../../assets/images/onboarding/add_to_cart.png')}
			buttonText='Next'
			screenNo={2}
			prev='online-shopping'
			next='payment-successful'
			skip='payment-successful'
			navigation={props.navigation}
		/>
	)
};

export default AddToCart;
