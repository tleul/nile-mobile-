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
const Footerui = () => {
	return (
		<Container>
			<Content />
			<Footer>
				<FooterTab>
					<Button badge vertical>
						<Badge>
							<Text>2</Text>
						</Badge>
						<Icon name='apps' />
						<Text>Apps</Text>
					</Button>
					<Button vertical>
						<Icon name='camera' />
						<Text>Camera</Text>
					</Button>
					<Button active badge vertical>
						<Badge>
							<Text>51</Text>
						</Badge>
						<Icon active name='navigate' />
						<Text>Navigate</Text>
					</Button>
					<Button active badge vertical>
						<Badge>
							<Text>51</Text>
						</Badge>
						<Icon name='cart' />
						<Text>Cart</Text>
					</Button>
				</FooterTab>
			</Footer>
		</Container>
	);
};
export default Footerui;
