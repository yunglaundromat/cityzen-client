import React from 'react'
import FolloweeCard from '../components/FolloweeCard'
import { Card } from 'semantic-ui-react'

class FolloweesListContainer extends React.Component {
  render() {
    return (
      <Card.Group>
        {this.props.followees.map(followee => <FolloweeCard key={followee.id} followee={followee} />)}
      </Card.Group>
    )
  }
}

export default FolloweesListContainer;
