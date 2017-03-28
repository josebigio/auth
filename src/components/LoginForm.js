import React, { Component } from 'react';
import { Text } from 'react-native';
import { CardSection, Card, Button, Input, Spinner } from './common';
import firebase from 'firebase';

class LoginForm extends Component {

	state = {
		email: '',
		password: '',
		error:'',
		loading:false
	}

	onButtonPress() {
		this.setState({error:'', loading:true});
		console.log('onButtonPress');
		const { email, password } = this.state;
		firebase.auth().signInWithEmailAndPassword(email, password)
			.then(this.onLoginSuccess.bind(this))
			.catch((error)=>{
				console.log('error signing in',error);
				firebase.auth().createUserWithEmailAndPassword(email,password)
					.then(this.onLoginSuccess.bind(this))
					.catch(this.onLoginFail.bind(this));
			});
	}

	onLoginSuccess() {
		this.setState({
			email:'',
			password:'',
			error:'',
			loading:false
		});
	}

	onLoginFail() {
		this.setState({
			error:'Authentication failed',
			loading:false
		});
	}

	renderButton() {
		if(this.state.loading) {
			console.log('returning spinner')
			return <Spinner size={'small'}/>
		}
		console.log('returning button');
		return (
			<Button onPress={this.onButtonPress.bind(this)}>
				Log in
			</Button>
		);
	}
	
	render() {

		const { textInputStyle, errorTextStyle } = styles;
		console.log(this.state);
		
		return(
			<Card>
				<CardSection style={{backgroundColor:'red'}}>
					<Input
						label={"Email"} 
						onChangeText={(email)=>{this.setState({email})}}
						placeholder={"user@email.com"}
						value={this.state.email}/>
				</CardSection>

				<CardSection>
					<Input
						label={"Password"} 
						onChangeText={(password)=>{this.setState({password})}}
						placeholder={"password"}
						secureTextEntry
						value={this.state.password}/>
					</CardSection>
					<Text style={errorTextStyle}>{this.state.error}</Text>
				<CardSection>

					{this.renderButton()}
				</CardSection>
			</Card>
		);
	}

}

const styles = {
	errorTextStyle:{
		fontSize:20,
		color:'red',
		alignSelf:'center'
	}
}

export default LoginForm;