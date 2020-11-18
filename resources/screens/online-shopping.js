import React from 'react';
import Screen from '../components/onboarding/screen';
import utils from '../utils'


function OnlineShopping () {
	return (
		<Screen
			title='Online Shopping'
			subtitle={utils.lorem}
			image={require('../../assets/images/onboarding/shopping.png')}
			buttonText='Next'
			// prev='Previous'
			screenNo={1}
			next='Skip'
		/>
	)
};

export default OnlineShopping;
