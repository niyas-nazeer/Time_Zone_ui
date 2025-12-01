import Register from './pages/RegistrationForm'
import Login from './pages/Login'
import Home from './pages/Home'
import Men from './pages/Men'
import Women from './pages/Women'
import Brands from './pages/Brands'
import Offers from './pages/Offers'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/men" element={<Men />} />
        <Route path="/women" element={<Women />} />
        <Route path="/brands" element={<Brands />} />
        <Route path="/offers" element={<Offers />} />
      </Routes>
  </Router>
  )
}

export default App
