import ConstantAPIs from "./ConstantAPIs";

export const createTodo = (text) => {
    return ConstantAPIs.post("/todos", {text});
};

export const getAllTodos = () => {
    return ConstantAPIs.get("/todos");
};

export const updateToDo = (id, done) => {
    return ConstantAPIs.put(`/todos/${id}`, {done});
};


export const deleteToDo = (id) => {
    return ConstantAPIs.delete(`/todos/${id}`)
};