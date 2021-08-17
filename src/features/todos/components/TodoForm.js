import React, {useState} from 'react'
import TodoItem from './TodoItem';

function TodoForm() {
    const [text, setText] = useState("");

    function addToDoHandler(){
        console.log("Current Text Value: ", text);
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