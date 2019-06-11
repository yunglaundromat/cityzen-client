import React from 'react'
import { Form } from 'semantic-ui-react'

class PetitionForm extends React.Component {

  render() {
    return (
      <Form onSubmit={this.props.onPetitionSubmit}>
        <Form.Group widths='equal'>
          <Form.Input value={this.props.petitionTitle} fluid label='Title' placeholder='Title' onChange={(e) => this.props.onTitleChange(e)}/>
        </Form.Group>
        <Form.Group widths='equal'>
          <Form.Input value={this.props.petitionLocation} fluid label='Location' placeholder='Location' onChange={(e) => this.props.onLocationChange(e)}/>
        </Form.Group>
        <Form.Group widths='equal'>
          <Form.Input value={this.props.petitionSignatureGoal} fluid label='Signature Goal' placeholder='# of signatures needed' onChange={(e) => this.props.onSignatureGoalChange(e)}/>
        </Form.Group>
        <Form.TextArea value={this.props.petitionDescription} label='About' placeholder='Write at least a paragraph about what changes are needed and why' onChange={(e) => this.props.onDescriptionChange(e)}/>
        <Form.Checkbox label='This petition is about a specific issue and not a generalized complaint' />
        <Form.Button>Submit</Form.Button>
      </Form>
    )
  }
}

export default PetitionForm;
