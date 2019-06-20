import React, { Fragment } from 'react'
import PetitionPost from '../components/PetitionPost'
import { Container, Card, Feed } from 'semantic-ui-react'

class AppContainer extends React.Component {

  componentDidMount() {
    this.props.getUserFolloweePetitions()
  }

  render() {
    return (
      <Container>
        <style>{`
          html, body {
            background-color: #252839 !important;
          }
          p {
            align-content: center;
            background-color: #495285;
            color: #fff;
            display: flex;
            flex-direction: column;
            justify-content: center;
            min-height: 6em;
          }
          p > span {
            opacity: 0.4;
            text-align: center;
          }
        }
        `}
        </style>
        <Card>
          <Card.Content>
            <Card.Header>Recent Activity</Card.Header>
          </Card.Content>
          <Card.Content>
          {this.props.userFolloweePetitions ?
            this.props.userFolloweePetitions.map(petition => <PetitionPost key={petition.id} petition={petition} onSignPetitionClick={this.props.onSignPetitionClick}/>)
            :
            null
          }
          </Card.Content>
        </Card>
      </Container>
    )
  }
}

export default AppContainer;
