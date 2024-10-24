import Login from './pages/Login'
import Home from './pages/Home'
import Register from './pages/RegistrationForm'
import Dashboard from './pages/seller/Dashboard';
import AddProducts from './pages/seller/AddProducts';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/signup" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/addproducts" element={<AddProducts />} />
      </Routes>
  </Router>
  )
}

export default App
