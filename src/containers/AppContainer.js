import React, { Fragment } from 'react'
import PetitionPost from '../components/PetitionPost'
import { Card, Feed } from 'semantic-ui-react'

class AppContainer extends React.Component {

  componentDidMount() {
    this.props.getUserFolloweePetitions()
  }

  render() {
    return (
      <Fragment>
        <Card fluid>
          <Card.Content>
            <Card.Header>Recent Activity</Card.Header>
          </Card.Content>
          <Card.Content>
          {this.props.userFolloweePetitions ?
            this.props.userFolloweePetitions.map(petition => <PetitionPost key={petition.id} petition={petition}/>)
            :
            null
          }
          </Card.Content>
        </Card>
      </Fragment>
    )
  }
}

export default AppContainer;
