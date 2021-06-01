// 64081808 <- api key
import { GET_MOVIES, LOAD_TO_STATE } from './actions';
import { initialState } from './initialState';


export default function omdbApi(state = initialState, action) {
  switch(action.type) {
    case GET_MOVIES:
      return state;
    case LOAD_TO_STATE: 
      return {
        ...state, listOfMovies: action.listOfMovies
      }
    default: return state;
  }
}