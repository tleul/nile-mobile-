import { Footer } from 'native-base';
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Header, ThemeProvider, Button, Icon } from 'react-native-elements';
import Footerui from './Footerui';
import Headerui from './Headerui';
import ProductCard from './CardsScreen/ProductCard';
import ImagePicker from 'react-native-image-crop-picker';
const Home = ({ navigation }) => {
	const imagePiccker = () => {
		ImagePicker.openPicker({
			width: 300,
			height: 400,
			cropping: true,
		}).then((image) => {
			console.log(image);
		});
	};

	return (
		<>
			<Headerui navigation={navigation} />
			<Text style={styles.text}>Menu //TODO: </Text>
			<ProductCard />

			<Footerui navigation={navigation} />
		</>
	);
};
const styles = StyleSheet.create({
	text: {
		fontSize: 30,
		textAlign: 'center',
		backgroundColor: 'white',
		paddingTop: 50,
	},
});
export default Home;
