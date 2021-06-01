import React from "react";
import "../scss/main.scss";
import { connect } from 'react-redux';
import { addTodo, removeTodo } from '../store/todos/actions';
import { getFacts } from '../store/catfacts/actions';
import NewTodoForm from './NewTodoForm';
import Todo from './Todo';

function App(props) {

  let [ newTodoFormVisible, setNewTodoFormVisible ] = React.useState(false);
  let [ editTodo, setEditTodo ] = React.useState(false);

  const handleAddTodo = (todo) => {
    props.addTodo(todo);
    setNewTodoFormVisible(false);
  }

  const handleRemoveTodo = (todoID) => {
    props.removeTodo(todoID);
  }

  const toggleEditMode = () => {
    setEditTodo(!editTodo);
    // TODO - RESUME HERE
  }
  console.log(props);

  let catFactArr = props.catFacts.facts?.data?.map((fact, i) => <div key={`factoid${i}`}>{fact.text}</div>);

  console.log(catFactArr);

  // let movieData = props.movies.

  let allTodos = props.todos.todos.map((val,i) => {
    return (
      <Todo
        key={`todoitem${i}`}
        todoId={val.id}
        text={val.task}
        removeTodo={handleRemoveTodo}
        toggleEditMode={toggleEditMode}
      />
    )
  });

  const handleGetFacts = (e, another) => {
    console.log(e)

  }

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
      <button onClick={props.getFacts}>load some cat facts?</button>
      {catFactArr}
    </div>
  )
} 

function mapStateToProps(reduxState){
  return {
    todos: reduxState.todos,
    movies: reduxState.omdbApi,
    catFacts: reduxState.catFacts
  }
}

export default connect(mapStateToProps, {addTodo, removeTodo, getFacts})(App);