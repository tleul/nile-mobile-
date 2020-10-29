import React from 'react';
import { ImageBackground, Text, Image, View, StyleSheet } from 'react-native';
import { Header, ThemeProvider, Button, Icon } from 'react-native-elements';
import Footerui from './Footerui';
import logo from '../assets/logo.png';
const Headerui = ({ navigation }) => {
	const Logocomponent = () => {
		return (
			<>
				{/* <Text>Nile Mart</Text> */}
				<Image style={styles.logoimg} source={logo} />
			</>
		);
	};
	return (
		<>
			<Header
				statusBarProps={{ barStyle: 'light-content' }}
				barStyle='light-content'
				containerStyle={{
					height: 120,
					backgroundColor: '#c4dcf5',
					justifyContent: 'center',
				}}
				leftComponent={
					<Icon
						size={40}
						name='menu'
						onPress={() => navigation.toggleDrawer()}
					/>
				}
				rightComponent={<Logocomponent />}
			/>
		</>
	);
};
const styles = StyleSheet.create({
	logoimg: {
		width: 150,
		height: 70,
	},
});

export default Headerui;
