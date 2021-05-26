import React from "react";
import "../scss/main.scss";
import { connect } from 'react-redux';
import { addTodo, removeTodo } from '../store/actions';
import NewTodoForm from './NewTodoForm';
import Todo from './Todo';

function App(props) {

  let [ newTodoFormVisible, setNewTodoFormVisible ] = React.useState(false);

  const handleAddTodo = (todo) => {
    props.addTodo(todo);
    setNewTodoFormVisible(false);
  }

  const handleRemoveTodo = (todoID) => {
    props.removeTodo(todoID);
  }

  let allTodos = props.todos.map((val,i) => {
    return (
      <Todo
        key={`todoitem${i}`}
        todoId={val.id}
        text={val.task}
        removeTodo={handleRemoveTodo}
      />
    )
  });

  return(
    <div className="main-container">
      <h2>Todo List</h2>
      <button onClick={() => setNewTodoFormVisible(!newTodoFormVisible)}>add new todo</button>
      { newTodoFormVisible && (
        <NewTodoForm 
          addTodo={handleAddTodo}
        />
      )}
      {allTodos}
    </div>
  )
} 

function mapStateToProps(reduxState){
  return {
    todos: reduxState.todos,
  }
}

export default connect(mapStateToProps, {addTodo, removeTodo})(App);