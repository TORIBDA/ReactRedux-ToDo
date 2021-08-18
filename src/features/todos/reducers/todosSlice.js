import { createSlice, createEntityAdapter, createSelector } from "@reduxjs/toolkit";

const todosAdapter = createEntityAdapter();

const todosSlice = createSlice({
    name: "todos",
    initialState: todosAdapter.getInitialState(),
    reducers: {
        AddTodo(state, action) {
            todosAdapter.addOne(state, action.payload);
        },
        AddManyTodo(state, action) {
            todosAdapter.addMany(state, action.payload);
        },
        RemoveTodo(state, key) {
            todosAdapter.removeOne(state, key.payload.id);
        },
        ToggleTodo(state, update){
            todosAdapter.updateOne(state, {
                id: update.payload.id,
                changes: update.payload
            });
        }
    }
});

export default todosSlice.reducer;

export const {AddTodo, RemoveTodo, ToggleTodo, AddManyTodo} = todosSlice.actions;

export const {
    selectAll: selectAllTodos,
    selectIds: selectTodoIds, 
    selectById: selectByTodoId
} = todosAdapter.getSelectors(state => state.todoList);

export const selectAllDone = createSelector(selectAllTodos, (todos)=>todos.filter((todo) => todo.done));