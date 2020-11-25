import React from 'react';
import Screen from '../components/onboarding/screen';
import utils from '../utils'


function PaymentSuccessful (props) {
	return (
		<Screen
			title='Payment Successful'
			subtitle={utils.lorem}
			image={require('../../assets/images/onboarding/successful_payment.png')}
			buttonText='Get Started'
			screenNo={3}
			prev='Previous'
			// onPrev={() => props.navigation.navigate('')}
		/>
	)
};

export default PaymentSuccessful;
