import { combineReducers } from 'redux';
import stickies from './stickies';
import nextId from './nextId';

const rootReducer = combineReducers({
  stickies,
  nextId
});

export default rootReducer;