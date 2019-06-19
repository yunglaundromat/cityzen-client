import React from 'react'
import { Card, Feed, Icon } from 'semantic-ui-react'

class PetitionPost extends React.Component {
  render() {
    return (
      <Feed>
        <Feed.Event>
          <Feed.Content>
            <Feed.Date content='1 day ago' />
            <Feed.Summary>
              {this.props.petition.user.name} added a petition.
            </Feed.Summary>
            <Card>
              <Card.Content header={this.props.petition.title} />
              <Card.Content description={this.props.petition.description} />
              <Card.Content extra>
                <Icon name='pencil alternate' />
                {this.props.petition.signatures.length} signatures
              </Card.Content>
            </Card>
          </Feed.Content>
        </Feed.Event>
      </Feed>
    )
  }
}

export default PetitionPost;
