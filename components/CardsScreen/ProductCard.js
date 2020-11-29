import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, Image, FlatList } from 'react-native';
import { Rating, AirbnbRating } from 'react-native-elements';

import axios from 'axios';
import {
	Container,
	Header,
	Content,
	Card,
	CardItem,
	Thumbnail,
	Button,
	Icon,
	Left,
	Body,
	Right,
} from 'native-base';

import Footerui from '../Footerui';
import Headerui from '../Headerui';
import ImageDisplay from './ImageCard';

const ProductCard = ({ navigation }) => {
	useEffect(() => {
		getProduct();
	}, []);
	const [product, setProduct] = useState([]);

	const getProduct = async () => {
		try {
			const data = await axios.get(
				'http://127.0.0.1:2020/api/productInfo',
			);
			setProduct(data.data);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<>
			<View style={styles.productContainer}>
				{product.map((product) => (
					<View style={styles.cardContainer}>
						<ImageDisplay
							productImages={
								product.product_images[0].thumb_medium
							}
						/>
						<View style={styles.productContent}>
							<View style={styles.textDescription}>
								<Text style={styles.text}>
									{product.product_name}
								</Text>
								<Text style={styles.text}>
									<Rating
										style={{ paddingLeft: 10 }}
										imageSize={20}
										readonly
										startingValue={3}
									/>
								</Text>
								<Text style={styles.text}>
									Delivered in {product.product_estdelivery}{' '}
									days
								</Text>
								<Text style={styles.text}>
									$ {product.product_price}
								</Text>
							</View>
							<View>
								<Button style={styles.addButton}>
									<Text style={styles.textButton}>Add</Text>
								</Button>
							</View>
						</View>
					</View>
				))}
			</View>
		</>
	);
};
const styles = StyleSheet.create({
	left: {
		margin: 5,
		position: 'absolute',
		bottom: 100,
		left: 0,
		width: 25,
		height: 25,
		color: 'tomato',
	},
	right: {
		margin: 5,
		position: 'absolute',
		bottom: 100,
		right: 0,
		width: 25,
		height: 25,
		color: 'tomato',
	},
	productContainer: {
		flexDirection: 'column',
		backgroundColor: 'white',
	},
	cardContainer: {
		flexDirection: 'row',
		backgroundColor: 'white',
		paddingLeft: 10,
		height: 200,
		marginBottom: 20,
	},
	productContent: {
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		paddingLeft: 15,
	},
	text: {
		textAlign: 'center',
		paddingBottom: 10,
		fontWeight: '300',
	},
	addButton: {
		width: 100,
		textAlign: 'center',
		color: 'white',
	},
	textButton: {
		paddingLeft: 35,
		fontWeight: 'bold',
	},
});

export default ProductCard;
