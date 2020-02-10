import React, { useState } from 'react';

export const TodoForm = props => {

    const [newTodo, setNewTodo] = useState();

    const handleChanges = e => {
        setNewTodo(e.target.value);
      };
        
    const handleSubmit = e => {
        e.preventDefault();
        props.addTodo(newTodo)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input name='new-todo' type='text' value={newTodo} onChange={handleChanges} />
            <button>Add New Item</button>
        </form>
    )
}