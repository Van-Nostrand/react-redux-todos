import { combineReducers } from 'redux';
import todos from './todos/reducer';
import omdbApi from './async/reducer';
import catFacts from './catfacts/reducer';

export default combineReducers({
  todos,
  omdbApi,
  catFacts
});