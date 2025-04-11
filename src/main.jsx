
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from '../Layout.jsx'
import AllHome from './component/Home/AllHome.jsx'
import { ThemeProvider } from '@mui/material'
import Theme from '../Theme.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='' element={<Layout/>}>
      <Route path='/' element={<AllHome/>}></Route>
    </Route>
  )
)
createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={Theme}>
  <RouterProvider router ={router}/>
  </ThemeProvider>
  
)
