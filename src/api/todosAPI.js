import ConstantAPIs from "./ConstantAPIs";

export const getTodos = () => {
    return ConstantAPIs.get("/todos");
};