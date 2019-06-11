import React from 'react'
import { Grid, Menu, Input } from 'semantic-ui-react'
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
								<Link className="item" to={`/createpetition`}>
									Start a Petition
								</Link>
								<Menu.Item>
									About Us
								</Menu.Item>
                <Menu.Item>
                  <Input icon='search' placeholder='Search users' value={this.props.searchBar} onChange={(e) => this.props.onSearchChange(e)}/>
                </Menu.Item>
								<Menu.Item onClick={this.props.logOut}>
									Log Out
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
