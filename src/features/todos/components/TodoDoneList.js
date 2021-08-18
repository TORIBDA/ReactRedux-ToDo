import TodoItem from "./TodoItem";
import { selectAllDone } from "../reducers/todosSlice";
import { useSelector } from "react-redux";
import React from 'react'
import "../../../styles/TodoDoneList.css";


function TodoDoneList() {
    const todoIds = useSelector(selectAllDone);
    
    return (
        <div className="DoneList">
            {todoIds.map((todo) => (
                <TodoItem key={todo.id} itemId={todo.id}/>
            ))}
        </div>
    );
}

export default TodoDoneList;