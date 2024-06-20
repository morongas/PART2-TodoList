import React, {useState} from "react";
import { TodoForm } from "./TodoForm.js";
import { v4 as uuidv4 } from "uuid";
import { Todo } from "./Todo.js";
import { EditTodoForm } from "./EditTodoForm.js";
import { TodoCompletedForm } from "./TodoCompletedForm.js";
uuidv4();

export const TodoWrapper = () => {
    const [todos, setTodos] = useState([]);
    const [dones, setDones] = useState([]);

    const addTodo = todo => {
        setTodos([...todos, {id: uuidv4(), task: todo}]);
    }
    const addCompleted = done => {
        setDones([...dones, {id: uuidv4(), task: done}]);
    }


    const toggleComplete = id => {
        const todo = todos.find(todo => todo.id === id);
        if (todo) {
            setTodos(todos.filter(todo => todo.id !== id));
            setDones([...dones, { ...todo, completed: true }]);
        }
    }

    const deleteTodo = id => {
        setTodos(todos.filter(todo => todo.id !== id));
    }
    
    const editTodo = id => {
        setTodos(
            todos.map(todo => {
                if (todo.id === id) {
                    return {...todo, isEditing: !todo.isEditing};
                }
                return todo;
            })
        );
    }
    const editTask = (task,id) => {
        setTodos(
            todos.map(todo => {
                if (todo.id === id) {
                    return {...todo, task: task, isEditing: !todo.isEditing};
                }
                return todo;
            })
        );
    }
    const completedBox = id => {
        setTodos(
            todos.map(todo => {
                if (todo.id === id) {
                    return {...todo, completed: !todo.completed};
                }
                return todo;
            })
        );
    }
    const toggleUncomplete = id => {
        const done = dones.find(done => done.id === id);
        if (done) {
            setDones(dones.filter(done => done.id !== id));
            setTodos([...todos, { ...done, completed: false }]);
        }
    }
    return (
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div className="TodoWrapper">
                <h1>Pendiente</h1>
                <TodoForm addTodo={addTodo} />
                {todos.map((todo,index) => (
                    todo.isEditing ? (
                        <EditTodoForm key={todo.id} editTodo={editTask} task={todo}/>
                    ) :(
                    <Todo key={todo.id} task={todo} toggleComplete={toggleComplete} deleteTodo = {deleteTodo} editTodo={editTodo}/>
                    )
                    ))}
            </div>
            <div>
                <div className="TodoWrapper">
                    <h1>Completado</h1>
                    {dones.map((done, index) => (
                        <TodoCompletedForm key={done.id} task={done} toggleUncomplete={toggleUncomplete}/>
                    ))}
                </div>
            </div>
        </div>
    );
};