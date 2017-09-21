import { combineReducers } from 'redux';
import stickies from './stickies';
import nextId from './nextId';
import filter from './filter'

const rootReducer = combineReducers({
  stickies,
  nextId,
  filter
});

export default rootReducer;