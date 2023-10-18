import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home'
import Register from './components/Register'
import Login from './components/Login';
import NotAuthorized from './components/NotAuthorized'
import NoPage from './components/Nopage'
import AllUser from './components/AllUser'
import ProtectedRoute from './security/ProtectedRouter';
import Footer from "./components/Footer"
import Shop from "./components/Shop"
import AdminProductManager from './components/AdminProductManager';
import ProductDetail from './components/ProductDetail';
import ProductByCategory from './components/ProductsByCategory';
import AdminCategoryManager from './components/AdminCategoryManager';

import { useState, useEffect } from 'react';

function App() {

  const [user, setUser] = useState(() => {
    return JSON.parse(sessionStorage.getItem('user'));
  });
  
  console.log(user);
  const [isAdmin, setIsAdmin] = useState(() => {
    if (sessionStorage.getItem('user') !== null) {
      if (JSON.parse(sessionStorage.getItem('user')).role === 'admin') {
        return true;
      }
      return false;
    }

  });
  // <Route path="/shop" element={<Shop />} />
  return (
    <Router>
      <Header user={user}
      setUser={setUser}
      isAdmin={isAdmin}
      setIsAdmin={setIsAdmin}
      />
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login setUser={setUser} setIsAdmin={setIsAdmin} />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NoPage />} />
        <Route path="/not-authorized" element={<NotAuthorized user={user} isAdmin={isAdmin} />} />
        <Route path="/product/:productId" element={<ProductDetail isAdmin={isAdmin}/>} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product-by-category/:categoryId" element={<ProductByCategory />} />
        
        {/* Protected routes */}
        <Route path="/admin/users" element={<ProtectedRoute user={user} roles={['admin']}><AllUser user={user}/></ProtectedRoute>} />
        <Route path="/admin/products" element={<ProtectedRoute user={user} roles={['admin']}><AdminProductManager user={user}/></ProtectedRoute>} />
        <Route path="/admin/category" element={<ProtectedRoute user={user} roles={['admin']}><AdminCategoryManager user={user}/></ProtectedRoute>} />
      </Routes>
      <Footer />
    </Router>
  );
}
export default App;