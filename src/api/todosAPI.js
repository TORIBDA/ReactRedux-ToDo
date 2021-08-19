import ConstantAPIs from "./ConstantAPIs";

export const createTodo = (text) => {
    return ConstantAPIs.post("/todos", {text});
};

export const getAllTodos = () => {
    return ConstantAPIs.get("/todos");
};

export const updateTodoById = (id, text) => {
    return ConstantAPIs.put(`/todos/${id}`, text);
};


export const deleteToDo = (id) => {
    return ConstantAPIs.delete(`/todos/${id}`)
};