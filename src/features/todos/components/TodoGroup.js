import TodoItem from "./TodoItem";
import { selectTodoIds } from "../reducers/todosSlice";
import { useSelector, useDispatch } from "react-redux";
import { getAllTodos } from "../../../api/todosAPI"
import {useEffect} from "react";
import { AddManyTodo } from "../reducers/todosSlice";

function TodoGroup() {
    const todoIds = useSelector(selectTodoIds);
    const dispatch = useDispatch();

    useEffect(() => {
        getAllTodos().then((response) => {
            console.log("Data Retrieved: ", response.data)
            dispatch(AddManyTodo(response.data))
        })
    }, [])

    return (
        <div>
            {(todoIds).map((id) => (
                <TodoItem key={id} itemId={id}></TodoItem>
            ))}
        </div>
    );
}

export default TodoGroup;