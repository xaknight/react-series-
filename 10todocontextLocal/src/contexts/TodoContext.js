import {createContext, useContext} from "react"

export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo: " Todo msg",
            completed: false,
        }
    ],
    addTodo: (_todo) => {}, // _ is used to indicate that the parameter is not used and to avoid eslint error
    updateTodo: (_id, _todo) => {},
    deleteTodo: (_id) => {},
    toggleComplete: (_id) => {}
})


export const useTodo = () => {
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider