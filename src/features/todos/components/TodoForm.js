import React, {useState} from 'react'
import { useDispatch } from "react-redux";
import { AddTodo } from "../reducers/todosSlice";

function TodoForm() {
    const [text, setText] = useState("");
    const dispatch = useDispatch();

    function addToDoHandler(){
        console.log("Current Text Value: ", text);
        dispatch(AddTodo(text));
        setText("");
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