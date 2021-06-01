import { ADD_TODO, REMOVE_TODO, EDIT_TODO } from './actions';
import { initialState } from './initialState';

export default function todos(state = initialState, action) {
  let newstate;
  switch (action.type) {
    case ADD_TODO:
      newstate = { ...state };
      newstate.id++;
      return {
        ...newstate,
        todos: [
          ...newstate.todos, 
          { task: action.task, id: newstate.id }
        ]
      };
    case REMOVE_TODO:
      let todos = state.todos.filter(todo => todo.id !== action.id);
      return { ...state, todos };

    case EDIT_TODO:
      newstate = { ...state };
      let newtodos = newstate.todos.map(todo => {
        if (todo.id === action.id) {
          return {
            task: action.editedTask,
            id: todo.id
          }
        }
        return todo;
      })
      return {
        ...newstate,
        todos: [
          ...newtodos,
        ]
      }
      
    default: return state;
  }
}