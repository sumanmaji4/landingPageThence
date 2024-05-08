import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import Register from './pages/Register'
import Layout from './pages/Layout'
import Error from './pages/Error'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        { path: '/', element: <Home /> },
        { path: '/register', element: <Register /> },
      ],
      errorElement: <Error />,
    },
  ])
  return <RouterProvider router={router} />
}

export default App
