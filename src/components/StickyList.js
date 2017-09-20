import React from 'react';
import { connect } from 'react-redux';
import {Card} from 'semantic-ui-react'
import Sticky from './Sticky'


const StickyList = ({ stickies, filter }) => (
  <Card.Group itemsPerRow={4}>
    {stickies.map( s => <Sticky key={s.id} {...s} /> ) }
  </Card.Group>
)

const mapStateToProps = (state) => {
  return { stickies: state.stickies}
}

export default connect(mapStateToProps)(StickyList);