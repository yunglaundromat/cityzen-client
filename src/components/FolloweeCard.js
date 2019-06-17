import React from 'react'
import { Card } from 'semantic-ui-react'

class FolloweeCard extends React.Component {
  render() {
    return (
      <Card>
        <Card.Content>
          <Card.Header>{this.props.followee.name}</Card.Header>
          <Card.Meta>{this.props.followee.username}</Card.Meta>
        </Card.Content>
      </Card>
    )
  }
}

export default FolloweeCard;
