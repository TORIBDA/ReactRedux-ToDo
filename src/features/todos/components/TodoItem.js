import React from "react";
import { useDispatch } from "react-redux";
import { selectByTodoId, RemoveTodo, ToggleTodo } from "../reducers/todosSlice";
import { useSelector } from "react-redux";
import "../../../styles/Todo.css";

function TodoItem(props) {
    const todo = useSelector(state => selectByTodoId(state, props.itemId))
    const dispatch = useDispatch();
    const todoStatus = todo.done ? "done":"undone";

    function strikeThroughText(event) {
        dispatch(ToggleTodo(props.itemId));
    }

    function removeTodoHandler(event) {
        dispatch(RemoveTodo(props.itemId));
    }

    return (        
        <div>
            <span className={`TodoItem ${todoStatus}`} onClick={strikeThroughText}>
                Entities:&nbsp;
                {todo.text},&nbsp;
                {todo.done.toString()}
            </span>
            <button onClick={removeTodoHandler}>X</button>
        </div>
    );
}

export default TodoItem;