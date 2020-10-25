import React from 'react';
import { Text, View } from 'react-native';
import { Header, ThemeProvider, Button, Icon } from 'react-native-elements';
import Footerui from './Footerui';
const Headerui = ({ navigation }) => {
	return (
		<>
			<Header
				statusBarProps={{ barStyle: 'light-content' }}
				barStyle='light-content'
				containerStyle={{
					backgroundColor: '#c4dcf5',
					justifyContent: 'space-around',
				}}
				leftComponent={
					<Icon
						name='menu'
						onPress={() => navigation.toggleDrawer()}
					/>
				}
				centerComponent={{
					text: 'Nile Mart',
					style: { color: 'black', fontSize: 20, fontWeight: 'bold' },
				}}
			/>
		</>
	);
};

export default Headerui;
