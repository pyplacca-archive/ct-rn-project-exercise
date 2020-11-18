import React from 'react';
import Screen from '../components/onboarding/screen';
import utils from '../utils'


function PaymentSuccessful () {
	return (
		<Screen
			title='Payment Successful'
			subtitle={utils.lorem}
			image={require('../../assets/images/onboarding/successful_payment.png')}
			buttonText='Get Started'
			prev='Previous'
			screenNo={3}
		/>
	)
};

export default PaymentSuccessful;
