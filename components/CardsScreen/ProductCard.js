import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { Rating, AirbnbRating } from 'react-native-elements';

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
const img = {
	uri:
		'https://serverless-thumbnails-creator-tgtbucket-1khnw0wl97ad2.s3-us-west-1.amazonaws.com/profile/A-1600927946908.png',
};
const img2 = {
	uri:
		'https://images-na.ssl-images-amazon.com/images/I/51qMNxOvK8L._AC_UL160_.jpg',
};
const ProductCard = ({ navigation }) => {
	return (
		<>
			<View style={styles.productContainer}>
				<View style={styles.cardContainer}>
					<View>
						<Image
							source={img}
							style={{ height: 200, width: 200 }}
						/>
					</View>

					<View style={styles.productContent}>
						<View style={styles.textDescription}>
							<Text style={styles.text}>Nike Shoe</Text>
							<Text style={styles.text}>
								<Rating
									style={{ paddingLeft: 10 }}
									imageSize={20}
									readonly
									startingValue={3}
								/>
							</Text>
							<Text style={styles.text}>
								Delivered in 3 days{' '}
							</Text>
							<Text style={styles.text}>$ 56</Text>
						</View>
						<View>
							<Button style={styles.addButton}>
								<Text style={styles.textButton}>Add</Text>
							</Button>
						</View>
					</View>
				</View>
				<View style={styles.cardContainer}>
					<View>
						<Image
							source={img2}
							style={{ height: 200, width: 200 }}
						/>
					</View>

					<View style={styles.productContent}>
						<View style={styles.textDescription}>
							<Text style={styles.text}>Tomoca Coffee</Text>
							<Text style={styles.text}>
								<Rating
									style={{ paddingLeft: 10 }}
									imageSize={20}
									readonly
									startingValue={4.5}
								/>
							</Text>
							<Text style={styles.text}>
								Delivered in 1 days{' '}
							</Text>
							<Text style={styles.text}>$ 20</Text>
						</View>
						<View>
							<Button style={styles.addButton}>
								<Text style={styles.textButton}>Add</Text>
							</Button>
						</View>
					</View>
				</View>
			</View>
		</>
	);
};
const styles = StyleSheet.create({
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
