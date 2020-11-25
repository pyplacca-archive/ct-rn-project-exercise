import React from 'react';
import { StatusBar, Text, View } from 'react-native';
import { PaymentSuccessful, AddToCart, OnlineShopping } from './src/screens'

export default function App() {
	return (
		<View>
			<StatusBar style="auto" />
			<PaymentSuccessful />
		</View>
	);
};
