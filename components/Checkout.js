import { Container } from 'native-base';
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Header, ThemeProvider, Button, Icon } from 'react-native-elements';
import Footerui from './Footerui';
import Headerui from './Headerui';

const Checkout = ({ navigation }) => {
	return (
		<>
			<Header
				rightComponent={
					<Icon
						name='menu'
						onPress={() => navigation.toggleDrawer()}
					/>
				}
				centerComponent={{
					text: 'Nile Mart',
					style: { color: '#fff' },
				}}
				leftComponent={
					<Icon
						name='arrow-back'
						onPress={() => navigation.goBack()}
					/>
				}
			/>
			<View>
				<Text>Yes</Text>
				<Button
					title='Checkout'
					onPress={() => navigation.navigate('checkout')}
				/>
			</View>
			<Footerui />
		</>
	);
};

export default Checkout;
