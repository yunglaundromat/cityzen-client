import React from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'

class SignupForm extends React.Component {
	state = {
		name: "",
		username: "",
		password: "",
		passwordConfirmation: "",
	}

	handleChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		})
	}

	createUser = () => {
		fetch("http://localhost:3001/api/v1/users", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				"Accepts": "application/json",
			},
			body: JSON.stringify(this.state)
		})
		.then(res => res.json())
		.then((response) => {
			if (response.errors) {
				alert(response.errors)
			} else {
				this.props.setCurrentUser(response)
			}
		})
	}

	handleSubmit = () => {
		if(this.state.password === this.state.passwordConfirmation){
			this.createUser()
		} else {
			alert("Passwords don't match!")
		}
	}

	render(){
		return (
      <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
				<Grid.Column style={{ maxWidth: 450 }}>
					<Header as='h2' color='teal' textAlign='center'>
						<Image src='img/logo.png' /> Create an account
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
								name='name'
								fluid icon='address card outline'
								iconPosition='left'
								placeholder='Full Name'
								onChange={this.handleChange}
								value={this.state.name}
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
              <Form.Input
								fluid
								icon='redo alternate'
								iconPosition='left'
								placeholder='Confirm Password'
								type='password'
								onChange={this.handleChange}
								name="passwordConfirmation"
								value={this.state.passwordConfirmation}
							/>

							<Button color='teal' fluid size='large'>
								Login
							</Button>
						</Segment>
					</Form>
          <Message>
						Already have an account? <a href='/login'>Log in</a>
					</Message>
				</Grid.Column>
			</Grid>
		)
	}
}

export default SignupForm;
