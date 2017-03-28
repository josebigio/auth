import React, { Component } from 'react';
import { Text, View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, CardSection, Spinner } from './components/common';
import LoginForm from './components/LoginForm';
export default class App extends Component {
  	
  	state = { loggedIn: null };

	componentWillMount() {
		firebase.initializeApp({
		    apiKey: "AIzaSyB6bw31BCsebQ0axaDeFuFMJ2srG5SM8YY",
		    authDomain: "auth-83441.firebaseapp.com",
		    databaseURL: "https://auth-83441.firebaseio.com",
		    storageBucket: "auth-83441.appspot.com",
		    messagingSenderId: "752796753045"
  		});
		firebase.auth().onAuthStateChanged((user)=>{
			console.log('user',user);
			if(user) {
				this.setState({loggedIn:true})
			}
			else{
				this.setState({loggedIn:false})
			}
		});
	}

	onLogout() {
		firebase.auth().signOut();
	}

	renderContent() {
		const { spinnerWrapperStyle, buttonWrapperStyle }  = styles;
		switch(this.state.loggedIn) {
			case true:
				return (
					<View style={buttonWrapperStyle}>
						<Button onPress={this.onLogout.bind(this)}>
							Log out
						</Button>
					</View>
				);
			case false:
				return <LoginForm/>;
			case null:
				return (
					<View style = {spinnerWrapperStyle}>
						<Spinner/>
					</View>
				);
		}
	}

	render() {
		console.log(this.state);
		const { appStyle } = styles;
		return (
			<View style = {appStyle}>
				<Header headerText={"Authentication"}/>
				{this.renderContent()}
			</View>
		);
	}
}

const styles = {
	appStyle:{
	},
	buttonWrapperStyle:{
		flexDirection:'row'
	},
	spinnerWrapperStyle:{
		flexDirection:'row'
	}
}
