import React from 'react';

export default function Todo(props) {

  return (
    <div className="todo-item">
      {props.text}
      <button className='delete-button' onClick={() => props.removeTodo(props.todoId)}>X</button>
    </div>
  )
}