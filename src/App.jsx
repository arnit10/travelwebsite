import { createBrowserRouter, RouterProvider  } from "react-router-dom"
import {AppLayout} from "./components/index"
import Home from "./pages/Home"
import About from "./pages/About"
import Services from "./pages/Services"
import Blogs from "./pages/Blogs"
import Contact from "./pages/Contact"
import SignUp from "./pages/Signup"
import Login from "./pages/Login"


function App() {
  const route = createBrowserRouter(
    [
      {
        path:'/',
        element:<AppLayout/>,
        children:[
          {
            path:'/',
            element:<Home/>
          },
          {
            path:'about',
            element:<About/>
            
          },
          {
            path:'service',
            element:<Services/>
          },
          {
            path:'blog',
            element:<Blogs/>
          },
          {
            path:'contact',
            element:<Contact/>
          },
          {
            path:'login',
            element:<Login/>
          },
          {
            path:'signup',
            element:<SignUp/>
          }

        ]
      }
    ]
  )

  return (
    <RouterProvider router = {route}/>
  )
}

export default App
