import React, {useState} from 'react'
import { useDispatch } from "react-redux";
import { AddTodo } from "../reducers/todosSlice";
import "../../../styles/TodoForm.css";

function TodoForm() {
    const [text, setText] = useState("");
    const dispatch = useDispatch();

    function addToDoHandler(){
        if(text === ''){
            return alert("Please kindly fill the input field. (^_^)v");
        }
        dispatch(AddTodo(text));
        setText("");
    }

    function changeHandler (event) {
        setText(event.target.value);
    }

    return (    
        <div className="Picture">      
            <div className="FormInput">
                <input className="TodoInput" type="text" 
                    placeholder="input a new to-do item"
                    value={text}
                    onChange={changeHandler}/>
                <button className="TodoButtonAdd" onClick={addToDoHandler}>+</button>
            </div>
        </div>
    );
}

export default TodoForm;