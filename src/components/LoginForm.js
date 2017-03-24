import React, { Component } from 'react';
import { CardSection, Card, Button, Input } from './common';

class LoginForm extends Component {

	state = {
		email: '',
		password: ''
	}

	
	render() {

		const { textInputStyle } = styles;
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

				<CardSection>
					<Button>
						Log in
					</Button>
				</CardSection>
			</Card>
		);
	}

}

const styles = {
	textInputStyle : {
		height:30,
		width:100,

	}
}

export default LoginForm;