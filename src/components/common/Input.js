import React, { Component } from 'react';
import { Text, View, TextInput } from 'react-native';

const Input = ({ label, hint, value, onChangeText, placeholder, secureTextEntry }) => {

	const { textInputStyle, labelStyle, containerStyle } = styles;

	return (
		<View style={containerStyle}>
			<Text style={labelStyle}>{label}</Text>
			<TextInput
				style={textInputStyle}
				value={value}
				autoCorrect={false}
				secureTextEntry={secureTextEntry}
				placeholder={placeholder}
				onChangeText={onChangeText}
			/>
		</View>
	);


}

const styles = {
	containerStyle:{
		flexDirection:'row',
		flex:1,
		height:40,
		alignItems:'center'
	},
	labelStyle: {
		paddingLeft:20,
		fontSize:18,
		flex:1
	},
	textInputStyle:{
		height:40,
		width:100,
		color:'#000',
		paddingRight:5,
		paddingLeft:5,
		fontSize:18,
		lineHeight:20,
		flex:2
	}
}

export { Input }