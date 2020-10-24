import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Headerui from './components/Headerui';
import Checkout from './components/Checkout';
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
export default function App() {
	return (
		<NavigationContainer>
			<Drawer.Navigator initialRouteName='Home'>
				<Drawer.Screen name='Home' component={Headerui} />
				<Drawer.Screen name='Checkout' component={Checkout} />
			</Drawer.Navigator>
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
