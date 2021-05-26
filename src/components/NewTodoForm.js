import React from 'react';

export default function NewTodoForm(props) {

  let [ todoInput, setTodoInput ] = React.useState('');

  const handleChange = (e) => {
    setTodoInput(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todoInput !== '') {
      props.addTodo(todoInput);
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
          placeholder='add a task here'
          onChange={handleChange}
          value={todoInput}
        />
      </span>
    </form>
  )
}