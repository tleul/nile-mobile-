import { Container } from 'native-base';
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Header, ThemeProvider, Button, Icon } from 'react-native-elements';
import Footerui from '../Footerui';
import Headerui from '../Headerui';

const Discount = ({ navigation }) => {
	return (
		<>
			<Headerui navigation={navigation} />
			<View>
				<Text style={styles.textDiscount}>Discount</Text>
			</View>
			<Footerui navigation={navigation} />
		</>
	);
};
const styles = StyleSheet.create({
	textDiscount: {
		color: 'red',
		fontSize: 50,
		textAlign: 'center',
		paddingTop: 50,
		backgroundColor: 'white',
	},
});

export default Discount;
