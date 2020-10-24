import React from 'react';
import { Text, View } from 'react-native';
import { Header, ThemeProvider, Button, Icon } from 'react-native-elements';

const Home = ({ navigation }) => {
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
				leftComponent={{ icon: 'home', color: '#fff' }}
			/>
			<Button title='Solid Button' onPress={() => console.log('hi')} />
		</>
	);
};

export default Home;
