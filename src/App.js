import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import { Grid } from 'semantic-ui-react'
import CurrentUserProfile from './containers/CurrentUserProfile'
import Navbar from './components/Navbar'
import LoginForm from './components/LoginForm'
import SignupForm from './components/SignupForm'
import SearchResultsContainer from './containers/SearchResultsContainer'


class App extends Component {
	state = {
		currentUser: null,
		allUsers: [],
		filteredUsers: [],
		searchBar: ""
	}

	logOut = () => {
		localStorage.removeItem("token")
		this.setState({
			currentUser: null
		}, () => {
			this.props.history.push("/login")
		})
	}

	updateUser = (updatedUser) => {
		this.setState({
			currentUser: updatedUser
		})
	}

  onSearchChange = (e) => {
    let userFilter = []
    this.props.history.push('/search')
    this.setState({searchBar: e.target.value}, () => {
      userFilter = this.state.allUsers.filter(user => (user.username || user.name).includes(this.state.searchBar))
      this.setState({filteredUsers: userFilter})
    })
  }

	componentDidMount(){
		const token = localStorage.getItem("token")

		if (token){
			// load up their shit
			fetch("http://localhost:3001/api/v1/auto_login", {
				headers: {
					"Authorization": token
				}
			})
			.then(res => res.json())
			.then((response) => {
				if (response.errors) {
					alert(response.errors)
				} else {
					this.setState({
						currentUser: response
					})
				}
			})
			fetch("http://localhost:3001/api/v1/users")
			.then(res => res.json())
			.then(data =>
				this.setState({allUsers: data}, () => console.log("all users", this.state.allUsers)))
		}
	}

	setCurrentUser = (response) => {
		this.setState({
			currentUser: response.user
		}, () => {
			localStorage.setItem("token", response.token)
			this.props.history.push(`/profile`)
		})
	}
	render() {
		console.log(this.state)
		return (
			<Grid>
				<Navbar currentUser={this.state.currentUser} logOut={this.logOut} onSearchChange={this.onSearchChange} searchBar={this.state.searchBar}/>
				<Grid.Row centered>
					<Switch>
						<Route path="/profile" render={(routeProps) => {
							return <CurrentUserProfile {...routeProps} updateUser={this.updateUser} currentUser={this.state.currentUser}/>
						}} />
						<Route path="/login" render={(routeProps) => {
							return <LoginForm {...routeProps} setCurrentUser={this.setCurrentUser}/>
						}} />
						<Route path="/signup" render={(routeProps) => {
							return <SignupForm {...routeProps} setCurrentUser={this.setCurrentUser}/>
						}} />
						/* <Route path="/search" render={(routeProps) => {
							return <SearchResultsContainer {...routeProps} setCurrentUser={this.setCurrentUser} searchBar={this.state.searchBar} filteredUsers={this.state.filteredUsers}/>
						}} /> *
					</Switch>
				</Grid.Row>
			</Grid>
		);
	}
}

export default App;
