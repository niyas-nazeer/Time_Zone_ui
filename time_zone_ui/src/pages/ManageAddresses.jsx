import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ManageAddresses.css";
import "./Account.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const ManageAddresses = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
  });

  const [addresses, setAddresses] = useState([]);
  const [formData, setFormData] = useState({
    full_name: "",
    phone: "",
    address_line_1: "",
    place: "",
    district: "",
    state: "",
    pincode: "",
  });
  

  const token = localStorage.getItem("access");

  const [editId, setEditId] = useState(null);
  const [isFormActive, setIsFormActive] = useState(false);

  const emptyForm = {
    full_name: "",
    phone: "",
    address_line_1: "",
    place: "",
    district: "",
    state: "",
    pincode: "",
  };



  /* FETCH PROFILE */
  const fetchProfile = async () => {
    if (!token) return;

    try {
      const response = await fetch(
        "http://127.0.0.1:8000/api/user/profile/",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.ok) {
        const data = await response.json();
        setUser(data);
      }
    } catch (error) {
      console.error("Failed to load profile", error);
    }
  };

  /* FETCH ADDRESSES  */
 const fetchAddresses = async () => {
  try {
    const res = await fetch("http://127.0.0.1:8000/api/customer/addresses/", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!res.ok) {
      throw new Error("Unauthorized or failed request");
    }

    const data = await res.json();
    setAddresses(data);
  } catch (error) {
    console.error("Address fetch failed:", error);
  }
};


  useEffect(() => {
  const token = localStorage.getItem("access");

  // No token → go to login page
  if (!token) {
    navigate("/login", { replace: true });
    return;
  }

  // Token exists → load data
  fetchProfile();
  fetchAddresses();
}, []);


  /* HANDLERS */
  const capitalizeFirst = (value) => {
    if (!value) return value;
    return value.charAt(0).toUpperCase() + value.slice(1);
  };


  const handleChange = (e) => {
  const { name, value } = e.target;

  setIsFormActive(true); //  ALWAYS activate form

  const capitalizeFields = [
    "full_name",
    "address_line_1",
    "place",
    "district",
    "state",
  ];

  // Phone → numbers + + - space
  if (name === "phone") {
    const filtered = value.replace(/[^0-9+\- ]/g, "");
    setFormData({ ...formData, [name]: filtered });
    return;
  }

  // Pincode → numbers only
  if (name === "pincode") {
    const filtered = value.replace(/[^0-9]/g, "");
    setFormData({ ...formData, [name]: filtered });
    return;
  }

  // Capitalize first letter
  if (capitalizeFields.includes(name)) {
    setFormData({
      ...formData,
      [name]: capitalizeFirst(value),
    });
    return;
  }

  // Default
  setFormData({ ...formData, [name]: value });
};



  const handleSubmit = async (e) => {
  e.preventDefault();

  const url = editId
    ? `http://127.0.0.1:8000/api/customer/addresses/${editId}/`
    : "http://127.0.0.1:8000/api/customer/addresses/";

  const method = editId ? "PUT" : "POST";

  try {
    await fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(formData),
    });

    setFormData(emptyForm);
    setEditId(null);
    setIsFormActive(false);
    fetchAddresses();
  } catch (error) {
    console.error(error);
  }
};


  const handleCancel = () => {
    setFormData(emptyForm);
    setEditId(null);
    setIsFormActive(false);
  };



  const handleEdit = (address) => {
  setFormData({
    full_name: address.full_name,
    phone: address.phone,
    address_line_1: address.address_line_1,
    place: address.place,
    district: address.district,
    state: address.state,
    pincode: address.pincode,
  });

  setEditId(address.id);
  setIsFormActive(true);
  };



  const handleDelete = async (id) => {
    try {
      await fetch(`http://127.0.0.1:8000/api/customer/addresses/${id}/`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      fetchAddresses();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <NavBar />

      <div className="account-container">
        {/* Sidebar */}
        <aside className="sidebar">
          <div className="profile-box">
            <div className="avatar">👤</div>
            <div>
              <p>Hello,</p>
              <strong>
                {user.firstname} {user.lastname}
              </strong>
            </div>
          </div>

          <nav className="menu">
            <div className="menu-section">
              <div>
                <a href="/account">PROFILE INFORMATION</a>
              </div>
              <div className="active">MANAGE ADDRESSES</div>
              <div>
                <a href="/account/orders">MY ORDERS</a>
              </div>
              <div>
                <a href="/account/favorites">MY FAVORITES</a>
              </div>
            </div>

            <div className="logout">
              <button
                onClick={() => {
                  localStorage.removeItem("access");
                  navigate("/login", { replace: true });
                }}
              >
                Logout
              </button>
            </div>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="address-container">
          <h2>Manage Addresses</h2>

          <form className="address-form" onSubmit={handleSubmit}>
            <input
              name="full_name"
              placeholder="Full Name"
              value={formData.full_name}
              onChange={handleChange}
              required
            />
            <input
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <input
              name="address_line_1"
              placeholder="Address"
              value={formData.address_line_1}
              onChange={handleChange}
              required
            />
            <input
              name="place"
              placeholder="Place"
              value={formData.place}
              onChange={handleChange}
              required
            />
            <input
              name="district"
              placeholder="District"
              value={formData.district}
              onChange={handleChange}
              required
            />
            <input
              name="state"
              placeholder="State"
              value={formData.state}
              onChange={handleChange}
              required
            />
            <input
              name="pincode"
              placeholder="Pincode"
              value={formData.pincode}
              onChange={handleChange}
              required
            />

            <div className="form-actions">
              <button type="submit" className="primary-btn">
                {editId ? "Update Address" : "Add Address"}
              </button>

              {isFormActive && (
                <button
                  type="button"
                  className="cancel-btn"
                  onClick={handleCancel}
                >
                  Cancel
                </button>
              )}
            </div>


          </form>

          <div className="address-list">
            {addresses.length === 0 ? (
              <p>No addresses added yet.</p>
            ) : (
              addresses.map((address) => (
                <div key={address.id} className="address-card">
                  <p className="name">{address.full_name}</p>
                  <p>
                    {address.address_line_1}, {address.place}
                  </p>
                  <p>
                    {address.district}, {address.state} - {address.pincode}
                  </p>
                  <p>{address.phone}</p>

                  <div className="action-buttons">
                    <button
                      className="edit-btn"
                      onClick={() => handleEdit(address)}
                    >
                      Edit
                    </button>
                    <button
                      className="delete-btn"
                      onClick={() => handleDelete(address.id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </main>
      </div>

      <Footer />
    </>
  );
};

export default ManageAddresses;
