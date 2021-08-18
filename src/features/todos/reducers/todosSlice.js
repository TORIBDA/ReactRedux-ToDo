import { createSlice, createEntityAdapter, createSelector } from "@reduxjs/toolkit";
import { createTodo } from "../../../api/todosAPI"
import {v4 as uuid } from "uuid";

const todosAdapter = createEntityAdapter();

const todosSlice = createSlice({
    name: "todos",
    initialState: todosAdapter.getInitialState(),
    reducers: {
        AddTodo(state, action) {
            console.log("Payload: ", action.payload);
            todosAdapter.addOne(state, action.payload);
        },
        AddManyTodo(state, action) {
            todosAdapter.addMany(state, action.payload);
        },
        RemoveTodo(state, key) {
            todosAdapter.removeOne(state, key);
        },
        ToggleTodo(state, update){
            console.log(update);
            todosAdapter.updateOne(state, {
                id: update.payload.id,
                changes: update.payload
            });
            // const todo = state.entities[update.payload];
            // todo.done = !todo.done;
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