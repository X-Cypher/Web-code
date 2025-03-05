import { useEffect, useState } from 'react'
import './App.css'
import { TodoContextProvider } from './contexts/TodoContext'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'

function App() {
  const [todoList, setTodoList] = useState([])

  function addTodo(todo){
    setTodoList((list) => [...list, {id: Date.now(), text: todo, completed: false}])
  }

  function updateTodo(id, newText){

    setTodoList((list) => list.map((currTodo) => { //map se new array banegi
      if(currTodo.id === id){ //if id matches
        return {...currTodo, text: newText} //currValue ka text change kr do
      } else{
        return currTodo //else original todo ko daldo
      } 
    }))
  }


  function deleteTodo(id){
    setTodoList((list) => list.filter((currTodo) => currTodo.id !== id))
  }


  function toggleTodo(id){
    setTodoList((list) => list.map((currTodo) => {
      if(currTodo.id === id){
        return {...currTodo, completed: !currTodo.completed}
      } else{
        return currTodo
      }
    }
    ))
  }


  //runs when website is loaded
  useEffect(() => {
    //local storage se saved todos nikal liye
    const todos = JSON.parse(localStorage.getItem("todos")) //key

    //agar koi todos mile hai. toh unko set krdo
    if(todos && todos.length > 0){
      setTodoList(todos)
    }
  }, [])

  useEffect(() => {
    //key, value
    localStorage.setItem("todos", JSON.stringify(todoList)) //localstorage always stores values in "String" format
  },[todoList]) //jab bhi todoList mai add/remove/update hoga. toh uss new list ko local storage mai save kr lenge. purani value override kr denge 
  


  return (
    <TodoContextProvider value={{todoList, addTodo, updateTodo, deleteTodo, toggleTodo}}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
            <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>

            <div className="mb-4">
                <TodoForm />
            </div>

            <div className="flex flex-wrap gap-y-3">
              {
                todoList.map((curr, idx) => (
                  <div key={curr.id} className='w-full'>
                    <TodoItem todo={curr} index = {idx}/>
                  </div>
                ))
              }
            </div>

        </div>
      </div>
    </TodoContextProvider>
  )
}

export default App
