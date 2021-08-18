import TodoItem from "./TodoItem";
import { selectTodoIds } from "../reducers/todosSlice";
import { useSelector, useDispatch } from "react-redux";
import { getTodos } from "../../../api/todosAPI"
import {useEffect} from "react";
import { AddManyTodo } from "../reducers/todosSlice";

function TodoGroup() {
    const todoIds = useSelector(selectTodoIds);
    const dispatch = useDispatch();

    useEffect(() => {
        getTodos().then((response) => {
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