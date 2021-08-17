import TodoItem from "./TodoItem";
import { initialToDoList } from "../../../common/constants/constants";
import { getAllTodoIds} from "../../../common/utils/utils";


function TodoGroup() {
    return (
        <div>
            {getAllTodoIds(initialToDoList).map((id) => (
                <TodoItem key={id} itemId={id}></TodoItem>
            ))}
        </div>
    );
}

export default TodoGroup;