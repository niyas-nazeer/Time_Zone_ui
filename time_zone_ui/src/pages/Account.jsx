import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Account.css";
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

const MyAccount = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    email: "",
    mobile: "",
  });

  const [originalUser, setOriginalUser] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [saving, setSaving] = useState(false);


  useEffect(() => {
    const token = localStorage.getItem("access");

    //  No token → redirect to login
    if (!token) {
      navigate("/login", { replace: true });
      return;
    }

    const fetchProfile = async () => {
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
        } else if (response.status === 401) {
          // Token expired or invalid
          localStorage.removeItem("access");
          navigate("/login", { replace: true });
        }
      } catch (error) {
        console.error("Failed to load profile", error);
      }
    };

    fetchProfile();
  }, [navigate]);

  const handleChange = (e) => {
  const { name, value } = e.target;
  setUser((prev) => ({
    ...prev,
    [name]: value,
  }));
};

const handleSave = async () => {
  const token = localStorage.getItem("access");
  setSaving(true);

  try {
    const response = await fetch(
      "http://127.0.0.1:8000/api/user/profile/",
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(user),
      }
    );

    if (response.ok) {
      const updated = await response.json();
      setUser(updated);
      setIsEditing(false);
    } else {
      alert("Update failed");
    }
  } catch (err) {
    console.error(err);
  } finally {
    setSaving(false);
  }
};


const handleCancel = () => {
  setUser(originalUser);
  setIsEditing(false);
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
              <div className="active">PROFILE INFORMATION</div>
              <div><a href="/account/manage-addresses">MANAGE ADDRESSES</a></div>
              <div><a href="/account/orders">MY ORDERS</a></div>
              <div><a href="/account/favorites">MY FAVORITES</a></div>
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

        <main className="content">
          <section className="card">
            <h3>
              Personal Information

              {!isEditing ? (
                <button
                  className="edit-btn"
                  onClick={() => {
                    setOriginalUser(user);
                    setIsEditing(true);
                  }}
                >
                  Edit
                </button>
              ) : (
                <div className="action-buttons">
                  <button
                    className="save-btn"
                    onClick={handleSave}
                    disabled={saving}
                  >
                    {saving ? "Saving..." : "Save"}
                  </button>

                  <button
                    className="cancel-btn"
                    onClick={handleCancel}
                    disabled={saving}
                  >
                    Cancel
                  </button>
                </div>
              )}
            </h3>



            <div className="form-row">
              <input
                type="text"
                name="firstname"
                placeholder="Firstname"
                value={user.firstname}
                onChange={handleChange}
                readOnly={!isEditing}
              />

              <input
                type="text"
                name="lastname"
                placeholder="Lastname"
                value={user.lastname}
                onChange={handleChange}
                readOnly={!isEditing}
              />

            </div>

            
          </section>

          <section className="card">
            <h3>
              Email Address 
            </h3>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={user.email}
              onChange={handleChange}
              readOnly={!isEditing}
            />

          </section>

          <section className="card">
            <h3>
              Mobile Number 
            </h3>
            <input
              type="text"
              name="mobile"
              placeholder="Mobile Number"
              value={user.mobile}
              onChange={handleChange}
              readOnly={!isEditing}
            />

          </section>

          <section className="card faq">
            <h3>FAQs</h3>
            <p><strong>What happens when I update my email address?</strong></p>
            <p>Your login email changes and all communication goes to the new email.</p>

            <p><strong>When will my account be updated?</strong></p>
            <p>As soon as you verify and save changes.</p>

            <p><strong>Will my order history be affected?</strong></p>
            <p>No, your account remains fully functional.</p>

            <div className="deactivate"><a href="/account/deactivate-account">Deactivate Account</a></div>
            <div className="delete"><a href="/account/delete-account">Delete Account</a></div>
          </section>
        </main>
      </div>

      <Footer />

    </>
  );
};

export default MyAccount;
