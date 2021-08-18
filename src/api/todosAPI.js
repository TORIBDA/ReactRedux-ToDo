import ConstantAPIs from "./ConstantAPIs";

// function addTodo(){
//     // ConstantAPIs.post("/todos")
//}

export const createTodo = (text) => {
    return ConstantAPIs.post("/todos", {text});
}

export const getAllTodos = () => {
    return ConstantAPIs.get("/todos");
};