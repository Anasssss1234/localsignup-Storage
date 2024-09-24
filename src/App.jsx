
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './Components/Login'
import Home from './Components/Home'
import RoutesProtection from './Components/RoutesProtection/RoutesProtection'
import './App.css'
import Setting from './Components/settings/Setting'
import { ThemeProvider } from './Components/Themes/ThemeChanger'
import ToggleButton from './Components/Themes/ToggleButton'
import Admin from './Components/Admin'
function App() {
  return (
    <>
      <ThemeProvider>
      <ToggleButton/>
      <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/' element={<RoutesProtection/>}>
        <Route path='/' element={<Home/>}/>
        <Route path='/setting' element={<Setting/>}/>
        </Route>
        <Route path='/admin' element={<Admin/>}/>
        
      </Routes>
      </BrowserRouter>
      </ThemeProvider>
     
    </>
  )
}

export default App
