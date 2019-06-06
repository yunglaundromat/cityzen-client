import React from 'react'
import { Container, Divider, Grid, Header, Icon } from 'semantic-ui-react'

class CurrentUserProfile extends React.Component {
  render() {
    return (
      <Container>
        {/* Heads up! We apply there some custom styling, you usually will not need it. */}
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

        <Header as='h2' icon inverted textAlign='center'>
          <Icon name='grid layout' />
          {this.props.currentUser.username}
          <Header.Subheader>
            {this.props.currentUser.name}
          </Header.Subheader>
          <Header.Subheader>
            CityZen member since {this.props.currentUser.created_at}
          </Header.Subheader>
        </Header>
        <Divider />

          <Grid columns={2} divided>
            <Grid.Row>
              <Grid.Column>
                <Header as='h3' inverted textAlign='center'>
                  Start a petition
                </Header>
                <p />
              </Grid.Column>
              <Grid.Column>
                <Header as='h3' inverted textAlign='center'>
                  Edit your petitions
                </Header>
                <p />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column>
                <Header as='h3' inverted textAlign='center'>
                  Your followers
                </Header>
                <p />
              </Grid.Column>
              <Grid.Column>
                <Header as='h3' inverted textAlign='center'>
                  Users you follow
                </Header>
                <p />
              </Grid.Column>
            </Grid.Row>
          </Grid>
      </Container>
    )

  }
}

export default CurrentUserProfile;
