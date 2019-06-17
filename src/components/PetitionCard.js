import React from 'react'
import { Card, Button } from 'semantic-ui-react'

class PetitionCard extends React.Component {

  findSignatureLength(signatures) {
    if (signatures === []) {
      return 0
    } else {
      return signatures.length
    }

  }

  render() {
    return (
      <Card>
        <Card.Content>
          <Card.Header>{this.props.petition.title}</Card.Header>
          <Card.Meta>{this.props.petition.location}</Card.Meta>
          <Card.Description>{this.props.petition.description}</Card.Description>
          <Card.Meta>Signatures: {this.findSignatureLength(this.props.petition.signatures)}</Card.Meta>
          <Card.Meta>Signature goal: {this.props.petition.signature_goal}</Card.Meta>
          <div className='ui two buttons'>
            <Button basic color='green' onClick={() => this.props.onSignPetitionClick(this.props.petition)}>
              Sign Petition
            </Button>
          </div>
        </Card.Content>
      </Card>
    )
  }
}

export default PetitionCard;
