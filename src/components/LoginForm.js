import React from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'

class LoginForm extends React.Component {
	state = {
		username: "",
		password: "",
	}

	handleChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		})
	}

	handleSubmit = () => {
		fetch("http://localhost:3001/api/v1/login", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				"Accepts": "application/json",
			},
			body: JSON.stringify(this.state)
		})
		.then(res => res.json())
		.then(response => {
			if (response.errors){
				alert(response.errors)
			} else {
				this.props.setCurrentUser(response)
			}
		})
	}

	render(){
		return (
			<Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
				<Grid.Column style={{ maxWidth: 450 }}>
					<Header as='h2' color='teal' textAlign='center'>
						 <Image style={{'fontSize':100}} src='img/logo.png' />
					</Header>
					<Header as='h2' color='teal' textAlign='center'>
						 Log in to your account
					</Header>
					<Form size='large' onSubmit={this.handleSubmit}>
						<Segment stacked>
							<Form.Input
								name='username'
								fluid icon='user'
								iconPosition='left'
								placeholder='Username'
								onChange={this.handleChange}
								value={this.state.username}
							/>
							<Form.Input
								fluid
								icon='lock'
								iconPosition='left'
								placeholder='Password'
								type='password'
								onChange={this.handleChange}
								name="password"
								value={this.state.password}
							/>

							<Button color='teal' fluid size='large'>
								Login
							</Button>
						</Segment>
					</Form>
					<Message>
						New to CityZen? <a href='/signup'>Sign Up</a>
					</Message>
				</Grid.Column>
			</Grid>
		)
	}
}




export default LoginForm;
