import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export const Todo = ({task, toggleComplete,deleteTodo,editTodo}) => {
    return (
        <div className="Todo">
            <p>
                <input type="checkbox" defaultChecked ={false} onClick={() => toggleComplete(task.id)} className={`${task.completed ? 'completed' : ""}`} style={{ marginRight: '10px' }} />
                {task.task}
            </p>
            <div>
                <FontAwesomeIcon icon={faPenToSquare} onClick={() => editTodo(task.id)} />
                <FontAwesomeIcon icon={faTrash} onClick={() => deleteTodo(task.id)} />
            </div>
        </div>
    );
};