import Login from './pages/Login'
import Home from './pages/Home'
import Register from './pages/RegistrationForm'
import Product from './components/Product'
import NavBar from './components/NavBar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/product" element={<Product/>}/>
        <Route path="/navbar" element={<Home/>}/>
      </Routes>
  </Router>
  )
}

export default App
