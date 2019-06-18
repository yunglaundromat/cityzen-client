import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import { Grid } from 'semantic-ui-react'
import CurrentUserProfile from './containers/CurrentUserProfile'
import UserProfile from './containers/UserProfile'
import AppContainer from './containers/AppContainer'
import PetitionForm from './components/PetitionForm'
import Navbar from './components/Navbar'
import LoginForm from './components/LoginForm'
import SignupForm from './components/SignupForm'
import SearchResultsContainer from './containers/SearchResultsContainer'


class App extends Component {
	state = {
		currentUser: null,
		currentUserFollowees: [],
		selectedPetition: null,
		selectedUser: null,
		allUsers: [],
		filteredUsers: [],
		searchBar: "",
		petitionTitle: "",
		petitionLocation: "",
		petitionDescription: "",
		petitionSignatureGoal: "",
		userFolloweePetitions: []
	}

	onTitleChange = (e) => {
		this.setState({petitionTitle: e.target.value})
	}

	onLocationChange = (e) => {
		this.setState({petitionLocation: e.target.value})
	}

	onDescriptionChange = (e) => {
		this.setState({petitionDescription: e.target.value})
	}

	onSignatureGoalChange = (e) => {
		this.setState({petitionSignatureGoal: e.target.value})
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

	getUserFolloweePetitions = () => {
		let petitions = []
		if (this.state.currentUser) {
			this.state.currentUser.followees.forEach(followee => {
				fetch(`http://localhost:3001/api/v1/users/${followee.id}`)
				.then(res => res.json())
				.then(res => {
					petitions.push(res.petitions)
				})
			})
		}
		this.setState({userFolloweePetitions: petitions}, () => console.log(this.state.userFolloweePetitions))
	}

	onSignPetitionClick = (petition) => {
		fetch("http://localhost:3001/api/v1/signatures", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				"Accepts": "application/json"
			},
			body: JSON.stringify({
				user_id: this.state.currentUser.id,
				petition_id: petition.id
			})
		})
	}

	onPetitionSubmit = () => {
		this.props.history.push("/profile")
		fetch("http://localhost:3001/api/v1/petitions", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				"Accepts": "application/json"
			},
			body: JSON.stringify({
				user_id: this.state.currentUser.id,
				title: this.state.petitionTitle,
				description: this.state.petitionDescription,
				location: this.state.petitionLocation,
				signature_goal: this.state.petitionSignatureGoal
				})
			})
			.then(res => res.json())
			.then(res => {
				console.log(res)
			})
		}

  onSearchChange = (e) => {
    let userFilter = []
    this.props.history.push('/search')
    this.setState({searchBar: e.target.value}, () => {
      userFilter = this.state.allUsers.filter(user => (user.username).includes(this.state.searchBar))
      this.setState({filteredUsers: userFilter})
    })
  }

	componentDidMount(){
		const token = localStorage.getItem("token")

		if (token){
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
						currentUser: response,
						currentUserFollowees: response.followees
					}, () => console.log(this.state.currentUserFollowees))
				}
			})
			fetch("http://localhost:3001/api/v1/users")
			.then(res => res.json())
			.then(data =>
				this.setState({allUsers: data}, () => console.log("all users", this.state.allUsers)))
		}
	}

	onSelectedUserClick = (user) => {
		this.setState({selectedUser: user}, () => {
			this.props.history.push("/userprofile")
			this.setState({searchBar: ""})
		})
	}

	onFollowUserClick = (user) => {
		console.log("follow", user)
		fetch("http://localhost:3001/api/v1/follows", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				"Accepts": "application/json"
			},
			body: JSON.stringify({
				follower_id: this.state.currentUser.id,
				followee_id: user.id
			})
		})
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
		return (
			<Grid>
				<Navbar currentUser={this.state.currentUser}
								logOut={this.logOut}
								onSearchChange={this.onSearchChange}
								searchBar={this.state.searchBar}
								/>
				<Grid.Row centered>
					<Switch>
						<Route path="/feed" render={(routeProps) => {
							return <AppContainer {...routeProps}
								updateUser={this.updateUser}
								currentUser={this.state.currentUser}
								getUserFolloweePetitions={this.getUserFolloweePetitions}
								userFolloweePetitions={this.state.userFolloweePetitions}
								/>
						}} />
						<Route path="/profile" render={(routeProps) => {
							return <CurrentUserProfile {...routeProps}
								updateUser={this.updateUser}
								currentUser={this.state.currentUser}
								onSignPetitionClick={this.onSignPetitionClick}
								/>
						}} />
						<Route path="/login" render={(routeProps) => {
							return <LoginForm {...routeProps}
								setCurrentUser={this.setCurrentUser}
								/>
						}} />
						<Route path="/signup" render={(routeProps) => {
							return <SignupForm {...routeProps}
								setCurrentUser={this.setCurrentUser}
								/>
						}} />
						<Route path="/search" render={(routeProps) => {
							return <SearchResultsContainer {...routeProps}
								setCurrentUser={this.setCurrentUser}
								searchBar={this.state.searchBar}
								filteredUsers={this.state.filteredUsers}
								onSelectedUserClick={this.onSelectedUserClick}
								onFollowUserClick={this.onFollowUserClick}
								/>
						}} />
						<Route path="/userprofile" render={(routeProps) => {
							return <UserProfile
								selectedUser={this.state.selectedUser}
								onSignPetitionClick={this.onSignPetitionClick}
								/>
						}} />
						<Route path="/createpetition" render={(routeProps) => {
							return <PetitionForm
								petitionTitle={this.state.petitionTitle}
								petitionLocation={this.state.petitionLocation}
								petitionDescription={this.state.petitionDescription}
								petitionSignatureGoal={this.state.petitionSignatureGoal}
								onTitleChange={this.onTitleChange}
								onLocationChange={this.onLocationChange}
								onDescriptionChange={this.onDescriptionChange}
								onSignatureGoalChange={this.onSignatureGoalChange}
								onPetitionSubmit={this.onPetitionSubmit}
							/>
						}} />
					</Switch>
				</Grid.Row>
			</Grid>
		);
	}
}

export default App;
