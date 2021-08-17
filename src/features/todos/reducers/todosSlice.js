import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import {v4 as uuid } from "uuid";

const todosAdapter = createEntityAdapter();
const initialState = todosAdapter.getInitialState({
    ids:["1"],
    entities: {
        1: {
            id:"1",
            text: "this is the initial state",
            text2: "this is text 2",
            done: false
        }
    }
}); 

const todosSlice = createSlice({
    name: "todos",
    initialState: initialState,
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
            todosAdapter.removeOne(state, key)
        }
    }
});

export default todosSlice.reducer;

export const {AddTodo, RemoveTodo} = todosSlice.actions;

export const {selectIds: selectTodoIds, selectById: selectByTodoId} = todosAdapter.getSelectors(state => state.todoList);