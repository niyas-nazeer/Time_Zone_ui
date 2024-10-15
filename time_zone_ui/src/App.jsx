import Login from './pages/Login'
import Home from './pages/Home'
import Register from './pages/RegistrationForm'
import Product from './components/Product'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/product" element={<Product/>}/>
      </Routes>
  </Router>
  )
}

export default App
