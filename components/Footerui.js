import React, { Component } from 'react';
import {
	Container,
	Header,
	Content,
	Footer,
	FooterTab,
	Button,
	Icon,
	Text,
	Badge,
} from 'native-base';
const Footerui = ({ navigation }) => {
	return (
		<Container>
			<Content />
			<Footer>
				<FooterTab>
					<Button vertical>
						<Icon name='home' />
						<Text style={{ fontSize: 12 }}>Home</Text>
					</Button>

					<Button badge vertical>
						<Badge>
							<Text>1</Text>
						</Badge>
						<Icon name='heart' />
						<Text style={{ fontSize: 12 }}>Favorite</Text>
					</Button>
					<Button
						badge
						vertical
						onPress={() => navigation.navigate('checkout')}>
						<Badge>
							<Text style={{ fontSize: 12 }}>51</Text>
						</Badge>
						<Icon name='cart' />
						<Text style={{ fontSize: 12 }}>Cart</Text>
					</Button>
				</FooterTab>
			</Footer>
		</Container>
	);
};
export default Footerui;
