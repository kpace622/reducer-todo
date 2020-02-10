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

console.log(state)
   return (
        <div>
                {state.map((item) => { 
                    return <h1><button onClick={handleComplete}>{item.item}</button></h1>
                })}
            <form onSubmit={handleSubmit}>
                <input name='new-todo' type='text' value={newTodo} onChange={handleChanges} />
                <button onClick={handleAddTodo}>Add New Item</button>
            </form>
        </div>
   )
}

export default Todo;