import React from "react";
import { useDispatch } from "react-redux";
import { selectByTodoId, RemoveTodo, ToggleTodo } from "../reducers/todosSlice";
import { useSelector } from "react-redux";
import "../../../styles/Todo.css";
import { updateToDo, deleteToDo } from "../../../api/todosAPI"

function TodoItem(props) {
    const todo = useSelector(state => selectByTodoId(state, props.itemId))
    const dispatch = useDispatch();
    const todoStatus = todo.done ? "done":"undone";

    function toggleToDoHandler() {
        updateToDo(todo.id, !todo.done).then((response) => {
            console.log("Response Toggle: ", response.data);
            dispatch(ToggleTodo(response.data));
        });
    }

    function removeTodoHandler() {
        deleteToDo(todo.id).then((response) => {
            console.log("Response Remove: ", response.data);
            dispatch(RemoveTodo(response.data));
        });
    }

    return (        
        <div>
            <div className="Column TodoItem">
                <span className={`TodoItem ${todoStatus}`} onClick={toggleToDoHandler}>
                    {todo.text}
                </span>
            </div>
            <div className="Column RemoveItem">                
                <button className="removeButton" onClick={removeTodoHandler}>X</button>
            </div>
        </div>
    );
}

export default TodoItem;