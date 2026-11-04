
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Products from './Pages/Products'
import View from './Pages/View'
import Wishlist from './Pages/Wishlist'
import Cart from './Pages/Cart'
import Pnf from './Pages/Pnf'
import Header from './Components/Header'
import Footer from './Components/Footer'




function App() {


  return (
    <>
    <Header/>
      <Routes>
        <Route path='/' element={<Products />} />
        <Route path='/Products/:id' element={<View />} />
        <Route path='/Wishlist' element={<Wishlist />} />
        <Route path='/Cart' element={<Cart />} />
        <Route path='/*' element={<Pnf />} />

      </Routes>
      <Footer/>
    </>
  )
}

export default App
