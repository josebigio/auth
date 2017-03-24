import React, { Component } from 'react';
import { Text, View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';

export default class App extends Component {

	componentWillMound() {
		 firebase.initializeApp({
		    apiKey: "AIzaSyB6bw31BCsebQ0axaDeFuFMJ2srG5SM8YY",
		    authDomain: "auth-83441.firebaseapp.com",
		    databaseURL: "https://auth-83441.firebaseio.com",
		    storageBucket: "auth-83441.appspot.com",
		    messagingSenderId: "752796753045"
  		});
	}

	render() {
		return (
			<View>
				<Header headerText={"Auth"}/>
				<Text>Hello World</Text>
			</View>
		);
	}
}