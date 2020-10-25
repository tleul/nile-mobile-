import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Checkout from './components/DrawerScreen/Checkout';
import Home from './components/Home';
import Products from './components/Products';
import Discount from './components/DrawerScreen/Discount';

const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const TabStack = createBottomTabNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Drawer.Navigator
				initialRouteName='Home'
				drawerLable
				drawerType='front'
				overlayColor='transparent'
				drawerContentOptions={{
					labelStyle: {
						color: 'black',
						fontWeight: 'bold',
						borderWidth: 1,
						padding: 10,
						borderRadius: 20,
					},
					style: {
						backgroundColor: 'white',
					},
				}}>
				<Drawer.Screen
					name='Home'
					component={Home}
					options={{
						drawerLabel: 'Home',
						color: 'white',
					}}
				/>
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
