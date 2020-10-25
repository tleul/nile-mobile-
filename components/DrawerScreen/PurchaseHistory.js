import { Container } from 'native-base';
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Header, ThemeProvider, Button, Icon } from 'react-native-elements';
import Footerui from '../Footerui';
import Headerui from '../Headerui';

const PurchaseHistory = ({ navigation }) => {
	return (
		<>
			<Headerui navigation={navigation} />
			<View>
				<Text style={styles.textPurchaseHistory}>PurchaseHistory</Text>
			</View>
			<Footerui />
		</>
	);
};
const styles = StyleSheet.create({
	textPurchaseHistory: {
		color: 'red',
		fontSize: 50,
		textAlign: 'center',
		paddingTop: 50,
		backgroundColor: 'white',
	},
});

export default PurchaseHistory;
