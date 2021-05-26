import { ADD_TODO, REMOVE_TODO } from './actions';

const initialState = {
  todos: [],
  id: 0
}

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      let newstate = { ...state };
      newstate.id++;
      return {
        ...newstate,
        todos: [
          ...newstate.todos,
          { task: action.task, id: newstate.id }
        ]
      };
    case REMOVE_TODO:
      let todos = state.todos.filter(val => val.id !== action.id);
      // return { ...state, todos }
      return { ...todos };
      
    default: return state;
  }
}