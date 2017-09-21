import React from 'react';
import { connect } from 'react-redux';
import {Card} from 'semantic-ui-react'
import Sticky from './Sticky'

const viewable = (stickies, filter) => {
  switch(filter) {
    case 'All':
      return stickies;
    case 'Green':
      return stickies.filter( t => {
        debugger
        return (t.sticky.color === "Green")
      })
    case 'Yellow':
      return stickies.filter( t => t.sticky.color === "Yellow")
    case 'Pink':
      return stickies.filter( t => t.sticky.color === "Pink")
  }
}

const StickyList = ({ stickies, filter }) => (
  <Card.Group itemsPerRow={4}>
    {viewable(stickies, filter).map( s => <Sticky key={s.id} {...s} /> ) }
  </Card.Group>
)

const mapStateToProps = (state) => {
  return { stickies: state.stickies, filter: state.filter}
}

export default connect(mapStateToProps)(StickyList);