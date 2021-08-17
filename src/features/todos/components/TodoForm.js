import React, {useState} from 'react'
import { useDispatch } from "react-redux";
import { AddTodo } from "../reducers/todosSlice";
// import TodoItem from './TodoItem';

function TodoForm() {
    const [text, setText] = useState("");
    const dispatch = useDispatch();

    function addToDoHandler(){
        console.log("Current Text Value: ", text);
        dispatch(AddTodo(text));
        setText("");
        // console.log("using document: ", document.getElementById("todoItem").value);
        //not preferable to use document.getElement because of the hardcoded id
    }

    function changeHandler (event) {
        setText(event.target.value);
    }

    return (    
        <div>            
            <input type="text" 
            placeholder="input a new to-do item"
            value={text}
            onChange={changeHandler}
            />
            <button onClick={addToDoHandler}>Add</button>
        </div>
    );
}

export default TodoForm;