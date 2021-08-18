import TodoItem from "./TodoItem";
import { selectAllDone, selectTodoIds } from "../reducers/todosSlice";
import { useSelector } from "react-redux";
import React from 'react'


function TodoDoneList() {
    const todoIds = useSelector(selectAllDone);
    
    return (
        <div>
            {todoIds.map((todo) => (
                <TodoItem key={todo.id} itemId={todo.id}/>
            ))}
        </div>
    );
}

export default TodoDoneList;