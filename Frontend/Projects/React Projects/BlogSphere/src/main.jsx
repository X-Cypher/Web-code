import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from './store/store.js'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'
import { AuthLayout, Signup } from './components/index.js'
import Login from './pages/Login.jsx'
import AllPosts from './pages/AllPosts.jsx'
import AddPost from './pages/AddPost.jsx'
import Post from './pages/Post.jsx'
import EditPost from './pages/EditPost.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children:[
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/login',
        element: (
          <AuthLayout>
            <Login />
          </AuthLayout>
        )
      },
      {
        path: 'signup',
        element: (
          <AuthLayout>
            <Signup />
          </AuthLayout>
        )
      },
      {
        path: 'all-posts',
        element: (
          <AuthLayout>
            <AllPosts />
          </AuthLayout>
        )
      },
      {
        path: 'add-post',
        element: (
          <AuthLayout>
            <AddPost />
          </AuthLayout>
        )
      },
      {
        path: 'post/:slug',
        element: (
          <AuthLayout>
            <Post />
          </AuthLayout>
        )
      },
      {
        path: 'edit-post/:slug',
        element: (
          <AuthLayout>
            <EditPost />
          </AuthLayout>
        )
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <Provider store={store}> 
      <RouterProvider router={router} />
    </Provider>
    
  </StrictMode>,
)
