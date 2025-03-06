import './App.css'
import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'
import { Provider } from 'react-redux'
import {store} from './app/store'

function App() {

  return (
    <Provider store={store}>
      <h1 className='text-3xl text-white/80'>Redux Toolkit</h1>
      <AddTodo />
      <TodoList />
    </Provider>
  )
}

export default App
