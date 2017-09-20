import React from 'react';
import {Form} from 'semantic-ui-react'
import { connect } from 'react-redux';
import { incId } from '../actions/nextId';
import { addSticky } from '../actions/stickies';
import { editSticky } from '../actions/stickies';

class StickyForm extends React.Component {
  state = { sticky: {content: '', color: 'Yellow'}}

  componentDidMount(){
    if (this.props.editing){
      this.setState({sticky: this.props.sticky})
      debugger
    }
    }

  handleChange = (propertyName) => (event) => {
    let newVal;
    if (propertyName === "color")
      newVal = event.target.innerText
    else
      newVal = event.target.value
      
    const oldSticky  = this.state.sticky
    const newSticky = {
      ...oldSticky,
      [propertyName]: newVal
    };
    this.setState({ sticky: newSticky })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    let sticky = this.state
    let { dispatch, id } = this.props
    let newSticky = {id, ...sticky}
    if (this.props.editing){
      dispatch(editSticky(this.state.sticky))
      this.props.saveEdit()
    }
    else {
      dispatch(addSticky(newSticky));
      dispatch(incId()); 
      this.setState({ sticky: {content: '', color: 'Yellow'} })
    } 
  }

  render() {
    const {sticky} = this.state
    const options = [
      { key: 'Yellow', text: 'Yellow', value: 'Yellow' },
      { key: 'Green', text: 'Green', value: 'Green' },
      { key: 'Pink', text: 'Pink', value: 'Pink'}
    ]
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.TextArea
          required
          label="Content"
          value={sticky.content}
          onChange={this.handleChange("content")}
          width={16}
        />
        <Form.Select 
        label='Color' 
        options={options}
        value={sticky.color}
        onChange={this.handleChange("color")}
        />
        <Form.Button color='green' inverted>Save</Form.Button>
      </Form>
    )
  }
}

const mapStateToProps = (state) => {
  if (!state.editing)
    return { id: state.nextId }
  else
    return {   }
}

export default connect(mapStateToProps)(StickyForm);

