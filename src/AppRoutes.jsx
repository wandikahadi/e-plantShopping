import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ProductPage from './pages/ProductList'
import ShoppingCartPage from './pages/CartItem'

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/product" element={<ProductPage />} />
            <Route path="/shopping-cart" element={<ShoppingCartPage />} />
        </Routes>
    )
}

export default AppRoutes
