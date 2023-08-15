import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Navbar, Sidebar, Footer } from './components'
import {
  Home,
  About,
  Cart,
  Checkout,
  Error,
  PrivateRoute,
  Products,
  SingleProduct,
  AuthWrapper,
} from './pages'

const App = () => {
  return (
    <AuthWrapper>
      <Router>
        <Navbar />
        <Sidebar />
        {/* <h4>E-living Commerce</h4> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<SingleProduct />} />
          <Route
            path="/checkout"
            element={
              <PrivateRoute>
                <Checkout />
              </PrivateRoute>
            }
          />
          <Route path="/*" element={<Error />} />
        </Routes>
        <Footer />
      </Router>
    </AuthWrapper>
  )
}

export default App
