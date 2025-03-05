import {createContext, useContext} from 'react'


export const TodoContext = createContext({
    todoList:[ //list of todos will be stored here
        {
        id:1,
        text:'todo1',
        completed: false
        }
    ],
    addTodo:(text) => {},
    updateTodo:(id, text) => {},
    deleteTodo: (id) => {},
    toggleTodo: (id) => {} //completed ko toggle
})

export const TodoContextProvider = TodoContext.Provider

export default function useTodoContext(){
    return useContext(TodoContext)
}