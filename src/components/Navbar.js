import React from 'react'
import { Grid, Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'


class Navbar extends React.Component {
	render(){
		return (
			<Grid.Row>
				<Grid.Column width={16}>
					<Menu borderless>
						<Link className="item" to="/">
							CityZen
						</Link>
						{this.props.currentUser
							?
							<Menu.Menu position="right">
								<Link className="item" to={`/profile`}>
									{this.props.currentUser.username}
								</Link>
								<Link className="item" to={`/`}>
									Start a Petition
								</Link>
								<Link className="item" to={`/`}>
									Browse Petitions
								</Link>
								<Menu.Item>
									About Us
								</Menu.Item>
								<Menu.Item onClick={this.props.logOut}>
									Log out
								</Menu.Item>
							</Menu.Menu>
							:
							<Menu.Menu position="right">
								<Link className="item" to="/login">
									Login
								</Link>
								<Link className="item" to="/signup">
									Sign Up
								</Link>
							</Menu.Menu>
						}
					</Menu>
				</Grid.Column>
			</Grid.Row>
		)
	}
}

export default Navbar
