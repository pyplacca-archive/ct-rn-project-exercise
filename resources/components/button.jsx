import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';


function CustomButton ({text, textStyle, buttonStyle}) {
	return (
		<TouchableOpacity style={[styles.btn, buttonStyle]}>
			<Text style={[styles.text, textStyle]}>{text}</Text>
		</TouchableOpacity>
	)
};

const styles = StyleSheet.create({

	btn: {
		paddingVertical: 10,
		paddingHorizontal: 25,
		alignItems: 'center',
	},

	text: {
		fontWeight: 'bold',
		textAlign: 'center',
	}
})

export default CustomButton
