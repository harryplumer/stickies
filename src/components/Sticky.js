import React from 'react';
import {Card, Icon} from 'semantic-ui-react'
import { connect } from 'react-redux';
import { deleteSticky } from '../actions/stickies';
import StickyForm from './StickyForm'

class Sticky extends React.Component{
  state = {editing: false}

  initEdit = () => {
    this.setState({editing: true})
  }

  saveEdit = () => {
    this.setState({editing: false})
  }

  render(){
    if (this.state.editing){
      let sticky = {...this.props.sticky, id: this.props.id}      
      return(
        <Card color={sticky.color.toLowerCase()}>
        <Card.Content>
        <Card.Header>
            <span style={{cursor: 'pointer'}} onClick={() => this.props.dispatch(deleteSticky(sticky.id))}>
              <Icon name='remove' size='small' />
            </span>
        </Card.Header>
          <StickyForm sticky={sticky} editing={true} saveEdit={this.saveEdit} />
          </Card.Content>
      </Card>
      )
    }
    else{
      let sticky = {}
      if (this.props.content)
        sticky = {...this.props}
      else 
        sticky = {...this.props.sticky, id: this.props.id} 
      debugger
      return(
        <Card color={sticky.color.toLowerCase()}>
          <Card.Content>
          <Card.Header>
            <span style={{cursor: 'pointer'}} onClick={() => this.props.dispatch(deleteSticky(sticky.id))}>
              <Icon name='remove' size='small' />
            </span>
            <span style={{cursor: 'pointer'}} onClick={() => this.initEdit()}>
              <Icon name='edit' size='small' />
            </span>
          </Card.Header>
          <Card.Description>{sticky.content}</Card.Description>
        </Card.Content>
      </Card>
      )
    }
  } 
}

export default connect()(Sticky);