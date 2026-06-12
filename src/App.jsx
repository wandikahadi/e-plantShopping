import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ProductPage from './pages/ProductPage'
import ShoppingCartPage from './pages/ShoppingCartPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/product" element={<ProductPage />} />
      <Route path="/shopping-cart" element={<ShoppingCartPage />} />
    </Routes>
  )
}

export default App
