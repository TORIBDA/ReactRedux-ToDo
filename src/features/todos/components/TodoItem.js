import "../../../styles/Todo.css";
import { Button, Modal } from 'antd';
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateTodoById, deleteToDo } from "../../../api/todosAPI"
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { selectByTodoId, RemoveTodo, UpdateTodo } from "../reducers/todosSlice";

function TodoItem(props) {
    const todo = useSelector(state => selectByTodoId(state, props.itemId))
    const dispatch = useDispatch();
    const todoStatus = todo.done ? "done":"undone";    
    const [modalVisibilityStatus, setModalVisibility] = useState(false);
    const [todoInputText, setInputText] = useState(todo.text);

    function toggleToDoHandler() {
        updateTodoById(todo.id, {done: !todo.done}).then((response) => {
            dispatch(UpdateTodo(response.data));
        });
    }

    function removeTodoHandler() {
        deleteToDo(todo.id).then((response) => {
            dispatch(RemoveTodo(response.data));
        });
    }
    
    function saveChangesHandler() {
        if(todoInputText!==todo.text && todoInputText!=='') {
            updateTodoById(todo.id, {text: todoInputText}).then((response) => {
                dispatch(UpdateTodo(response.data));
            });
            setModalVisibility(false);
            return Modal.success({
                title: 'Saving Success!',
                content: 'Your changes has been saved successfully',
            });
        }
        else if(todoInputText===todo.text) {
            return Modal.error({
                title: 'Saving Error',
                content: 'No Changes detected!',
            });
        }
        else {
            return Modal.error({
                title: 'Saving Error',
                content: 'Todo must not be empty',
            });
        }
    }

    function onInputTextChangeHandler(event) {
        setInputText(event.target.value);
    }

    function showEditTodoModal() {
        setModalVisibility(true);
    }

    function closeEditTodoModal() {
        setInputText(todo.text);
        setModalVisibility(false);
    }

    return (        
        <div>
            <div className="Column TodoItem">           
                <span className={`TodoItem ${todoStatus}`} onClick={toggleToDoHandler}>
                    {todo.text}
                </span>
            </div>  
            <div className="Column RemoveItem">                
                {todoStatus === 'undone'?
                    <Button type="primary" size="small" onClick={showEditTodoModal}><EditOutlined /></Button>:                    
                    <Button type="primary" size="small" disabled><EditOutlined /></Button>  
                }
                <Button type="danger" size="small" onClick={removeTodoHandler}><DeleteOutlined /></Button>           
            </div>             
            <Modal title="Todo: " 
                visible={modalVisibilityStatus} 
                onCancel={closeEditTodoModal}         
                footer={[
                    <Button key="Cancel" type="danger" onClick={closeEditTodoModal}>Cancel</Button>,
                    <Button key="SaveChanges" type="primary" onClick={saveChangesHandler}>Save Changes</Button>
                ]}>
                <input
                    style = {{width: 460}}
                    placeholder = {todo.text}
                    value = {todoInputText}
                    onChange = {onInputTextChangeHandler}
                />
            </Modal> 
        </div>
    );
}
           
export default TodoItem;