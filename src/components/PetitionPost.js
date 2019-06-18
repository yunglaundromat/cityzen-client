import React from 'react'
import { Card, Feed } from 'semantic-ui-react'

class PetitionPost extends React.Component {
  render() {
    console.log(this.props.petition)
    return (
      <Feed>
        <Feed.Event>
          <Feed.Content>
            <Feed.Date content='1 day ago' />
            <Feed.Summary>
              {this.props.petition.title}
            </Feed.Summary>
          </Feed.Content>
        </Feed.Event>
      </Feed>
    )
  }
}

export default PetitionPost;
