import React, { useReducer, useState } from 'react';

import { initialState, todoReducer, newItems} from './reducers/index';

const Todo = () => {
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

   return (
       <div>
           {state.item}
           {state.newItems}
        <form onSubmit={handleSubmit}>
            <input name='new-todo' type='text' value={newTodo} onChange={handleChanges} />
            <button onClick={handleAddTodo}>Add New Item</button>
        </form>
       </div>
   )
}

export default Todo;