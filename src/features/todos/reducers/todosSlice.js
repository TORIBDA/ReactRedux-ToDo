import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import {v4 as uuid } from "uuid";

const todosAdapter = createEntityAdapter();

const todosSlice = createSlice({
    name: "todos",
    initialState: todosAdapter.getInitialState(),
    reducers: {
        AddTodo(state, action) {
            todosAdapter.addOne(state, {
                id: uuid(),
                text: action.payload,
                done: false
            });
            return state;
        },
        RemoveTodo(state, key) {
            todosAdapter.removeOne(state, key);
        },
        ToggleTodo(state, update){
            const todo = state.entities[update.payload];
            todo.done = !todo.done;
        }
    }
});

export default todosSlice.reducer;

export const {AddTodo, RemoveTodo, ToggleTodo} = todosSlice.actions;

export const {selectIds: selectTodoIds, selectById: selectByTodoId} = todosAdapter.getSelectors(state => state.todoList);