import './App.css'
import { HashRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import About from './components/About/About'
import Portfolio from './components/Portfolio/Portfolio'
import Contact from './components/Contact/Contact'
import Home from './components/Home/Home'
import Notfound from './components/Notfound/Notfound'






const routes =HashRouter([
  {path:'',element:<Layout/>,children:[

    {index:true,element:<Home/>},
    {path:'about',element:<About/>},
    {path:'portfolio',element:<Portfolio/>},
    {path:'contact',element:<Contact/>},
  ]},
  {path:'*',element:<Notfound/>}
]);

function App() {
  
  return (
    <>
    <RouterProvider router={routes}/>
    
    </>
  )
}

export default App
