import { AntDesign } from '@expo/vector-icons';
import React, { useEffect, useState } from 'react';
import {
	Text,
	View,
	StyleSheet,
	Image,
	FlatList,
	TouchableOpacity,
} from 'react-native';
const ImageDisplay = ({ productImages }) => {
	const [imageurl, setImageurl] = useState({
		url: productImages[0],
	});

	const next = () => {
		//check index
		const index = productImages.indexOf(imageurl.url);
		if (index === productImages.length - 1) {
			return setImageurl({ url: productImages[1] });
		}
		setImageurl({ url: productImages[index + 1] });
	};
	const prev = () => {
		//check Index
		const index = productImages.indexOf(imageurl.url);
		if (index === 0) {
			return setImageurl({
				url: productImages[productImages.length - 1],
			});
		}
		setImageurl({ url: productImages[index - 1] });
	};

	return (
		<View>
			<Image source={imageurl} style={{ height: 200, width: 200 }} />
			<TouchableOpacity onPress={prev}>
				<AntDesign style={styles.left} name='leftcircle' size={24} />
			</TouchableOpacity>
			<TouchableOpacity onPress={next}>
				<AntDesign style={styles.right} name='rightcircle' size={24} />
			</TouchableOpacity>
		</View>
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
		color: 'green',
	},
	right: {
		margin: 5,
		position: 'absolute',
		bottom: 100,
		right: 0,
		width: 25,
		height: 25,
		color: 'green',
	},
});

export default ImageDisplay;
