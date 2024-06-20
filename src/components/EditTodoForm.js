import React, { useState } from "react";

export const EditTodoForm = ({ editTodo, task }) => {
    const [value, setValue] = useState(task.task);

    const handleSubmit = (e) => {
        e.preventDefault();
        editTodo(value,task.id);
        setValue("");
    }
    return (
        <form className="TodoForm" onSubmit={handleSubmit}>
            <input type="text" className="todo-input" value={value}
                placeholder="Edita la tarea" onChange={(e) => setValue(e.target.value)}>
            </input>
            <button className="todo-btn" type="submit">Update task</button>
        </form>
    );
};