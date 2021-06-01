import {GET_FACTS, LOAD_FACTS_TO_STATE} from './actions';
import {initialState} from './initialState';

export default function catFacts(state = initialState, action) {
  switch(action.type) {
    case GET_FACTS:
      return {
        ...state, facts: action.facts
      }
    case LOAD_FACTS_TO_STATE:
      return {
        ...state, facts: action.facts
      }
    default: return state;
  }
}