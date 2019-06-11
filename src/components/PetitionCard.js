import React from 'react'
import { Card } from 'semantic-ui-react'

class PetitionCard extends React.Component {
  render() {
    return (
      <Card>
        <Card.Content>
          <Card.Header>{this.props.petition.title}</Card.Header>
          <Card.Meta>{this.props.petition.location}</Card.Meta>
          <Card.Description>{this.props.petition.description}</Card.Description>
          <Card.Meta>{this.props.petition.signature_goal}</Card.Meta>
        </Card.Content>
      </Card>
    )
  }
}

export default PetitionCard;
