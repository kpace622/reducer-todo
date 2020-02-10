import React, { useReducer } from 'react';
import './App.css';
import Todo from './todo';
import { TodoList } from './components/todoList';
import { TodoItem } from './components/todoItem';
import { TodoForm } from './components/todoForm'
import { todoReducer, initialState } from './reducers/index';


function App() {

  const [state, dispatch] = useReducer(todoReducer, initialState)

  const addTodo = item => dispatch({ type: "ADD_TODO", payload: item });

  const toggleCompleted = item =>
    dispatch({ type: "TOGGLE_COMPLETE", payload: item });

  return (
    <div className="App">
      <TodoForm addTodo={addTodo} />
      <TodoList toggleCompleted={toggleCompleted} state={state}/>
    </div>
  );
}

export default App;
