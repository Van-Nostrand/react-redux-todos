import React from 'react';

export default function NewTodoForm({ 
  addTodo, 
  editing, 
  placeholder = editing ? '' : 'type here', 
  initialValue = editing ? initialValue : '' 
}) {

  let [ todoInput, setTodoInput ] = React.useState(initialValue);

  const handleChange = (e) => {
    setTodoInput(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todoInput !== '') {
      addTodo(todoInput);
      e.target.reset();
      setTodoInput('');
    }
  }

  return (
    <form className='todo-form' autoComplete='off' onSubmit={handleSubmit}>
      <span className='input-span'>
        <input
          type='text'
          name='task'
          id='task'
          placeholder={placeholder}
          onChange={handleChange}
          value={todoInput}
        />
      </span>
    </form>
  )
}