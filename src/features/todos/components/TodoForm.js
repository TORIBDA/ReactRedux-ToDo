import React, {useState} from 'react'
import { useDispatch } from "react-redux";
import { AddTodo } from "../reducers/todosSlice";
import "../../../styles/TodoForm.css";
import { createTodo } from "../../../api/todosAPI";
import { Modal } from 'antd';

function TodoForm() {
    const [text, setText] = useState("");
    const dispatch = useDispatch();

    function addToDoHandler(){
        if(text === ''){
            return Modal.error({
                title: 'Input Can\'t be blank',
                content: 'Kindly provide input value before trying to add a todo. (^_^)v',
              });
        }
        createTodo(text).then((response) => {
            dispatch(AddTodo(response.data));
        });
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