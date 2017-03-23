import React from 'react';
import { Text, View } from 'react-native';

const Header = (props) => {
	const { textStyle, viewStyle } = styles;
	const { headerText } = props;
	return (
		<View style={viewStyle}>
			<Text style={textStyle}>{headerText}</Text>
		</View>
	);
};

const styles = {
	viewStyle: {
		backgroundColor: '#f8f8f8',
		justifyContent: 'center',
		alignItems: 'center',
		height: 60,
		paddingTop: 15,
		shadowColor: 'black',
		shadowOffset: {width:0,height:0},
		shadowOpacity: 0.2,
		elevation: 10
	},
	textStyle: {
		fontSize: 20,
	}
};

export default Header;
