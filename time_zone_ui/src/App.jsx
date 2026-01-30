import Register from './pages/RegistrationForm'
import Login from './pages/Login'
import Home from './pages/Home'
import Men from './pages/Men'
import Women from './pages/Women'
import Brands from './pages/Brands'
import Offers from './pages/Offers'
import BrandPage from './pages/BrandPage'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MyAccount from './pages/Account'
import ManageAddresses from './pages/ManageAddresses'
import DeactivateAccount from './pages/DeactivateAccount'
import DeleteAccount from './pages/DeleteAccount'

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
        <Route path="/brands/:brandId" element={<BrandPage />} />
        <Route path="/account" element={<MyAccount />} />
        <Route path="/account/manage-addresses" element={<ManageAddresses />} />
        <Route path="/account/deactivate-account" element={<DeactivateAccount />} />
        <Route path="/account/delete-account" element={<DeleteAccount />} />

      </Routes>
  </Router>
  )
}

export default App
