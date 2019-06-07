import React , { Fragment } from 'react'
import UserCard from '../components/UserCard'
import { Header, Icon, Image, Card, Divider } from 'semantic-ui-react'

class SearchResultsContainer extends React.Component {

  displayHeader(search) {
    if (search === "") {
      return `Showing all users`
    } else {
      return `Showing all results for ${search}`
    }
  }

  render() {
    return (
      <Fragment>
        <Header as='h2' icon textAlign='center'>
          <Icon name='users' circular />
          <Header.Content>{this.displayHeader(this.props.searchBar)}</Header.Content>
        </Header>
        <Divider />
        <Card.Group>
          {this.props.filteredUsers.map(user => <UserCard key={user.id} user={user}/>)}
        </Card.Group>
      </Fragment>
    )
  }
}

export default SearchResultsContainer;
