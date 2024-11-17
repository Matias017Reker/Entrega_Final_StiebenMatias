import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import Cart from './components/Cart/Cart'
import Checkout from './components/Ckeckout/Checkout'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
  <div>
    <BrowserRouter>
      <CartProvider>
      <NavBar/>
      <ToastContainer theme='dark' position="bottom-right"/>
      <Routes>
        <Route path="/" element={<ItemListContainer/>}/>
        <Route path="/category/:idcategory" element={<ItemListContainer/>}/>
        <Route path="/detail/:idProduct" element={<ItemDetailContainer/>}/>
        <Route path="/Cart" element={<Cart/>}/>
        <Route path="/Checkout" element={<Checkout/>}/>
      </Routes>
      </CartProvider>
    </BrowserRouter>
  </div>
  )
}

export default App