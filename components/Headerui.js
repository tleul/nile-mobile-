import React from 'react';
import { Text, View } from 'react-native';
import { Header, ThemeProvider, Button, Icon } from 'react-native-elements';
import Footerui from './Footerui';
const Headerui = ({ navigation }) => {
	return (
		<>
			<Header
				leftComponent={
					<Icon
						name='menu'
						onPress={() => navigation.toggleDrawer()}
					/>
				}
				centerComponent={{
					text: 'Nile Mart',
					style: { color: '#fff' },
				}}
			/>
		</>
	);
};

export default Headerui;
