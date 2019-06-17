import React from 'react'
import PetitionCard from '../components/PetitionCard.js'
import { Card } from 'semantic-ui-react'

class PetitionListContainer extends React.Component {
  render() {
    return (
      <Card.Group>
        {this.props.petitions.map(petition => <PetitionCard key={petition.id} petition={petition} onSignPetitionClick={this.props.onSignPetitionClick}/>)}
      </Card.Group>
    )
  }
}

export default PetitionListContainer;
