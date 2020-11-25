import React from 'react';
import { StatusBar, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { PaymentSuccessful, AddToCart, OnlineShopping } from './src/screens'


const Stack = createStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator screenOptions={{headerShown: false}}>
				<Stack.Screen name="online-shopping" component={OnlineShopping} />
				<Stack.Screen name="add-to-cart" component={AddToCart} />
				<Stack.Screen name="payment-successful" component={PaymentSuccessful} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};
