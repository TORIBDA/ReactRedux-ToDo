import React from "react";
import { useDispatch } from "react-redux";
import { selectByTodoId, RemoveTodo } from "../reducers/todosSlice";
import { useSelector } from "react-redux";

function TodoItem(props) {
    const todo = useSelector(state => selectByTodoId(state, props.itemId))
    const dispatch = useDispatch();

    function strikeThroughText() {
        // document.getElementById(todo).style.textDecoration='line-through';        
    }

    function removeTodoHandler(event) {
        dispatch(RemoveTodo(props.itemId));
    }

    return (        
        <div>
            <span onClick={strikeThroughText}>
                ID:&nbsp;{todo.id}&nbsp;Entities:&nbsp;
                {todo.text},
                {todo.done.toString()}
            </span>
            <button onClick={removeTodoHandler}>X</button>
        </div>
    );
}

export default TodoItem;