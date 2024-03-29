export const ADD_TODO = "ADD_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
export const EDIT_TODO = "EDIT_TODO";

export function addTodo(task) {
  return {
    type: ADD_TODO,
    task
  }
}

export function removeTodo(id) {
  return {
    type: REMOVE_TODO,
    id
  }
}

export function editTodo(id, editedTask) {
  return {
    type: EDIT_TODO,
    id,
    editedTask
  }
}