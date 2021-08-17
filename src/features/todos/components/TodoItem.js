import React from "react";
// import {initialToDoList} from "../../../common/constants/constants";
// import {getTodoById} from "../../../common/utils/utils";
import { selectByTodoId } from "../reducers/todosSlice";
import { useSelector } from "react-redux";


function TodoItem(props) {
    const todo = useSelector(state => selectByTodoId(state, props.itemId))
    // const todo = getTodoById (initialToDoList, props.itemId);

    function strikeThroughText() {
        // document.getElementById(todo).style.textDecoration='line-through';
    }

    return (        
        <div onClick={strikeThroughText}>
            {todo.text}
        </div>
    );
}

export default TodoItem;