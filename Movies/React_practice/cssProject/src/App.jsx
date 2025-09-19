
import Home from'./components/Home'
import NotFound from'./components/NotFound'
import './App.css'
import { createBrowserRouter } from 'react-router-dom'
import ThemeToggle from './components/ThemeToggle'

function App() {
  const route  =createBrowserRouter([
    {
      path:"/",
      Component:Home
    },{
      path:"*",
      Component:NotFound

    }
    

  ])
  return (
    <>
    <div>
      <Home/>
    </div>
      
    </>
  )
}

export default App
