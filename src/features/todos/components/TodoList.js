import React from 'react'
import TodoForm from './TodoForm'
import TodoGroup from './TodoGroup'

function TodoList() {
    return (
        <div>
            <h1>To Do List</h1>
            <TodoForm></TodoForm>
            <TodoGroup></TodoGroup>
        </div>
    )
}

export default TodoList
