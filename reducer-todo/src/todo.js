import React, { useReducer, useState } from 'react';

import { initialState, todoReducer} from './reducers/index';

const Todo = props => {
   const [state, dispatch] = useReducer(todoReducer, initialState);
   const [newTodo, setNewTodo] = useState('');

   const handleAddTodo = e => {
    dispatch({ type: 'ADD_TODO', payload: newTodo });
};

const handleChanges = e => {
    setNewTodo(e.target.value);
  };
    
const handleSubmit = e => {
    e.preventDefault();
}

const handleComplete = e => {
    dispatch({ type: 'TOGGLE_COMPLETE' })
}

   return (
        <div>
            {!state.completed ? (
            <h1>
                {state.map((item) => { 
                    return <h2><button onClick={handleComplete}>{item.item}</button></h2>
                })}
            </h1>) : (
                <div>
                    {!state.completed}
                </div>
            )}
            <form onSubmit={handleSubmit}>
                <input name='new-todo' type='text' value={newTodo} onChange={handleChanges} />
                <button onClick={handleAddTodo}>Add New Item</button>
            </form>
        </div>
   )
}

export default Todo;