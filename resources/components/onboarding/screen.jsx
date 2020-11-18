import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import CustomButton from '../button';
import Indicators from '../indicators';
import utils from '../../utils';


function Screen (props) {
	const {title, subtitle, image=null, buttonText, screenNo, next, prev} = props;

	return (
		<View style={styles.container}>
			<Text style={styles.title}>{title}</Text>
			<Text style={styles.subtitle}>{subtitle}</Text>
			<Image source={image} style={styles.image}/>
			<CustomButton
				text={buttonText}
				textStyle={styles.btnText}
				buttonStyle={styles.btn}
			/>
			<View style={styles.bottomNav}>
				{
					prev &&
					<Text
						style={[styles.bNavText, styles.bNavPrev]}
					>
						{prev}
					</Text>
				}
				<Indicators
					total={3}
					current={screenNo}
					color={vars.primaryColor}
					style={styles.bottomIndicators}
				/>
				{
					next &&
					<Text
						style={[ styles.bNavText, styles.bNavNext ]}
					>
						{next}
					</Text>
				}
			</View>
		</View>
	)
};

const { globalStyles: vars } = utils;

const styles = StyleSheet.create({
	container: {
		paddingVertical: vars.gapMedi - 10,
		paddingHorizontal: vars.gapMedi - 10,
		height: '100%',
	},

	title: {
		fontSize: 35,
		fontWeight: 'bold',
		marginBottom: vars.gapMini,
		textTransform: 'uppercase',
	},

	subtitle: {
		color: vars.secColor,
		marginBottom: vars.gapMedi + vars.gapMini,
		fontSize: 20,
	},

	image: {
		height: 270,
		width: '100%',
		resizeMode: 'cover',
		alignSelf: 'center'
	},

	btn: {
		backgroundColor: vars.primaryColor,
		marginTop: vars.gapMedi + vars.gapNorm,
		alignSelf: 'center',
		borderRadius: 100,
		alignItems: 'center',
		justifyContent: 'center',
		minWidth: 130,
		height: 55,
	},

	btnText: {
		textTransform: 'capitalize',
		color: '#fff',
		fontSize: 25,
		fontWeight: 'bold',
		marginHorizontal: vars.gapMini - 5,
	},

	bottomNav: {
		position: 'relative',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 'auto',
	},

	bottomIndicators: {
		position: 'absolute',
	},

	bNavText: {
		color: vars.secColor,
		fontSize: 20,
	},

	bNavPrev: {
		marginRight: 'auto'
	},

	bNavNext: {
		marginLeft: 'auto'
	}
})

export default Screen;
