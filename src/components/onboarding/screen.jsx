import React from 'react';
import { StatusBar, View, Text, Image, StyleSheet } from 'react-native';
import CustomButton from '../button';
import Indicators from '../indicators';
import utils from '../../utils';


function Screen (props) {
	const {
		title, subtitle, image=null, buttonText, screenNo,
		next, skip, prev
	} = props;

	const switchScreen = name => {
		if (name) {
			props.navigation.navigate(name)
		}
	}

	return (
		<View style={styles.container}>
			<StatusBar style="auto" />
			<Text style={styles.title}>{title}</Text>
			<Text style={styles.subtitle}>{subtitle}</Text>
			<Image source={image} style={styles.image}/>
			<CustomButton
				text={buttonText}
				textStyle={styles.btnText}
				buttonStyle={styles.btn}
				onPress={() => switchScreen(next)}
			/>
			<View style={styles.bottomNav}>
				{
					prev ?
					<CustomButton
						text='Previous'
						textStyle={styles.bNavText}
						buttonStyle={[styles.bNavBtn, styles.bNavPrev]}
						onPress={() => switchScreen(prev)}
					/>
					: null
				}
				<Indicators
					current={screenNo}
					color={vars.primaryColor}
					style={styles.bottomIndicators}
				/>
				{
					skip ?
					<CustomButton
						text='Skip'
						textStyle={styles.bNavText}
						buttonStyle={[styles.bNavBtn, styles.bNavNext]}
						onPress={() => switchScreen(skip)}
					/>
					: null
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
		backgroundColor: '#fff'
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

	bNavBtn: {
		paddingVertical: 0,
		paddingHorizontal: 0,
	},

	bNavPrev: {
		marginRight: 'auto'
	},

	bNavNext: {
		marginLeft: 'auto',
	}
})

export default Screen;
