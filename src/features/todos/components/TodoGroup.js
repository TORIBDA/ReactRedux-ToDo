import TodoItem from "./TodoItem";
// import { initialToDoList } from "../../../common/constants/constants";
// import { getAllTodoIds} from "../../../common/utils/utils";
import { selectTodoIds } from "../reducers/todosSlice";
import { useSelector } from "react-redux";


function TodoGroup() {
    const todoIds = useSelector(selectTodoIds);

    return (
        <div>
            {(todoIds).map((id) => (
                <TodoItem key={id} itemId={id}></TodoItem>
            ))}
        </div>
    );
}

export default TodoGroup;