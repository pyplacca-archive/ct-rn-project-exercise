import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';


function Indicators ({total, current, color, style}) {
	return (
		<View style={[styles.container, style]}>
			{
				Array(total).fill().map((_, i) => (
					<TouchableOpacity>
						<Text
							style={[
								{backgroundColor: color},
								styles.item,
								i+1 === current ? styles.active : {}
							]}
							key={i}
						/>
					</TouchableOpacity>
				))
			}
		</View>
	)
};

const size = 10;

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
	},

	item: {
		height: size,
		width: size,
		opacity: .5,
		marginHorizontal: 3,
		borderRadius: size
	},

	active: {
		width: 20,
		opacity: 1,
	}
});

export default Indicators;