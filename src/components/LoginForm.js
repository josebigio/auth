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
						onChangeText={(text)=>{this.setState({email:text})}}
						placeholder={"user@email.com"}
						value={this.state.email}/>
				</CardSection>

				<CardSection>
					<Input
						label={"Password"} 
						onChangeText={(text)=>{this.setState({password:text})}}
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