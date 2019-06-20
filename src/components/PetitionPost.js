import React from 'react'
import { Card, Feed, Icon, Button } from 'semantic-ui-react'

class PetitionPost extends React.Component {

  state={
    clicked: false
  }

  onButtonClick = (e) => {
    e.preventDefault()
    if (!this.state.clicked) {
      this.setState({clicked: true})
    }
  }
  
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
                {this.props.petition.signatures.length} signatures - <b>sign petition</b>
                <br></br>
                <Icon name='pencil alternate' />
                {this.props.petition.signature_goal} signatures needed
              </Card.Content>
              <Card.Content>
                {this.state.clicked ?
                <Button primary >Signed!</Button>
                :
                <Button primary onClick={() => this.props.onSignPetitionClick(this.props.petition)} onClick={this.onButtonClick}>Sign</Button>
                }
                <Button secondary>View User</Button>
              </Card.Content>
            </Card>
          </Feed.Content>
        </Feed.Event>
      </Feed>
    )
  }
}

export default PetitionPost;
