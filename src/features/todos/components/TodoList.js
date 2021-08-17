import React from 'react'
import TodoForm from './TodoForm'
import TodoGroup from './TodoGroup'
import "../../../styles/Todo.css";

function TodoList() {
    return (
        <div>
            <div className="Column">
                <TodoForm></TodoForm>
            </div>
            <div className="Column TodoList">
                <h1>To Do List</h1>
                <TodoGroup></TodoGroup>
            </div>
        </div>
    )
}

export default TodoList
