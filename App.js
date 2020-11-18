import React from 'react';
// import { StatusBar } from 'expo-status-bar';
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import PaymentSuccessful from './resources/screens/payment-successful';
import AddToCart from './resources/screens/add-to-cart';
import OnlineShopping from './resources/screens/online-shopping';

export default function App() {
	return (
		<View style={styles.container}>
			<StatusBar style="auto" />
			<PaymentSuccessful />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
});
