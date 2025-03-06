import {createSlice, nanoid} from '@reduxjs/toolkit';

const initialState = {
    todoList: []
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers:{ //contains functions that will be used to update the state

        // we will always have state and action as parameters
        // state is the current state of the application
        // action is the object (value) that will be dispatched to update the state

        addTodo: (state, action) => {

            const newTodo = {
                id: nanoid(),
                text: action.payload, //payload se hi value milti hai
            }
            
            state.todoList.push(newTodo)
            },

        removeTodo: (state, action) => {
            state.todoList = state.todoList.filter((curr) => curr.id !== action.payload)
        },

        updateTodo: (state, action) => {
            const index = state.todoList.findIndex((curr) => curr.id === action.payload.id)
            state.todoList[index].text = action.payload.text
        }
        
        }
    }
)

export const {addTodo, removeTodo, updateTodo} = todoSlice.actions

export const todoReducer = todoSlice.reducer

