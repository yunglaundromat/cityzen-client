import React from 'react'
import { Container, Divider, Grid, Header, Icon } from 'semantic-ui-react'
import FolloweesListContainer from './FolloweesListContainer'
import PetitionListContainer from './PetitionListContainer'

class UserProfile extends React.Component {

  sanitizeDate(string) {
  // console.log(string.slice(5,7))
  let month_number = parseInt(string.slice(5,7), 10)
  let year = string.slice(0,4)
  let date = parseInt(string.slice(8,10), 10)
  let month_name;
  if (month_number === 1) {
    month_name = "January"
  }
  else if (month_number === 2) {
    month_name = "February"
  }
  else if (month_number === 3) {
    month_name = "March"
  }
  else if (month_number === 4) {
    month_name = "April"
  }
  else if (month_number === 5) {
    month_name = "May"
  }
  else if (month_number === 6) {
    month_name = "June"
  }
  else if (month_number === 7) {
    month_name = "July"
  }
  else if (month_number === 8) {
    month_name = "August"
  }
  else if (month_number === 9) {
    month_name = "September"
  }
  else if (month_number === 10) {
    month_name = "October"
  }
  else if (month_number === 11) {
    month_name = "November"
  }
  else if (month_number === 12) {
    month_name = "December"
  }
  return `${month_name} ${date}, ${year}`
};

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
          {this.props.selectedUser ? this.props.selectedUser.username : null}
          <Header.Subheader>
            {this.props.selectedUser ? this.props.selectedUser.name : null}
          </Header.Subheader>
          <Header.Subheader>
            CityZen member since {this.props.selectedUser ? this.sanitizeDate(this.props.selectedUser.created_at) : null}
          </Header.Subheader>
        </Header>
        <Divider />

          <Grid columns={2} divided>
            <Grid.Row>
              <Grid.Column>
                <Header as='h3' inverted textAlign='center'>
                  {this.props.selectedUser ? this.props.selectedUser.name : null}'s petitions
                </Header>
                {this.props.selectedUser ? <PetitionListContainer petitions={this.props.selectedUser.petitions} onSignPetitionClick={this.props.onSignPetitionClick} /> : null}
              </Grid.Column>
              <Grid.Column>
                <Header as='h3' inverted textAlign='center'>
                  Users {this.props.selectedUser ? this.props.selectedUser.name : null} follows
                </Header>
                {this.props.selectedUser ? <FolloweesListContainer followees={this.props.selectedUser.followees} /> : null}
              </Grid.Column>
            </Grid.Row>
          </Grid>
      </Container>
    )

  }
}

export default UserProfile;
