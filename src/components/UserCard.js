import React, { PureComponent } from 'react'
import { Button, Card } from 'semantic-ui-react'

class UserCard extends PureComponent {

  sanitizeDate(string) {
  // console.log(string.slice(5,7))
  let month_number = parseInt(string.slice(5,7), 10)
  let year = string.slice(0,4)
  let date = parseInt(string.slice(8,10), 10)
  let month_name;
  if (month_number === 1) {
    month_name = "January"
  }
  else if (month_number === 2) {
    month_name = "February"
  }
  else if (month_number === 3) {
    month_name = "March"
  }
  else if (month_number === 4) {
    month_name = "April"
  }
  else if (month_number === 5) {
    month_name = "May"
  }
  else if (month_number === 6) {
    month_name = "June"
  }
  else if (month_number === 7) {
    month_name = "July"
  }
  else if (month_number === 8) {
    month_name = "August"
  }
  else if (month_number === 9) {
    month_name = "September"
  }
  else if (month_number === 10) {
    month_name = "October"
  }
  else if (month_number === 11) {
    month_name = "November"
  }
  else if (month_number === 12) {
    month_name = "December"
  }
  return `${month_name} ${date}, ${year}`
  };

  render() {
    return (
      <Card>
        <Card.Content>
          <Card.Header>{this.props.user.name}</Card.Header>
          <Card.Meta>{this.props.user.username}</Card.Meta>
          <Card.Description>
            {this.sanitizeDate(this.props.user.created_at)}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <div className='ui two buttons'>
            <Button basic color='green' onClick={() => this.props.onFollowUserClick(this.props.user)}>
              Follow
            </Button>
            <Button basic color='blue' onClick={() => this.props.onSelectedUserClick(this.props.user)}>
              View Profile
            </Button>
          </div>
        </Card.Content>
      </Card>
    )
  }
}

export default UserCard;
