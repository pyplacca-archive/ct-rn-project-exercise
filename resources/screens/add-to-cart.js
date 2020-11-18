import React from 'react';
import Screen from '../components/onboarding/screen';
import utils from '../utils'


function AddToCart () {
	return (
		<Screen
			title='Add To Cart'
			subtitle={utils.lorem}
			image={require('../../assets/images/onboarding/add_to_cart.png')}
			buttonText='Next'
			prev='Previous'
			screenNo={2}
			next='Skip'
		/>
	)
};

export default AddToCart;
