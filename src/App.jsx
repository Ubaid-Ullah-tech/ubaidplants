import { Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './components/layout/Layout'
import About from './components/pages/About'
import Contact from './components/pages/Contact'
import Certification from './components/pages/Certification'
import Cart from './components/ubaid/Cart'

function App() {
 

  return (
    <>
     <Routes>
      <Route path='/' element={<Layout/>}>
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/certification' element={<Certification/>} />
        <Route path='/cart' element={<Cart/>} />
       
       
      </Route>
     </Routes>
    </>
  )
}

export default App
