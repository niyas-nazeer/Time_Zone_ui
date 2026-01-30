import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./DeactivateAccount.css";

const DeactivateAccount = () => {
  const [user, setUser] = useState({ email: "", mobile: "" });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

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

  const handleDeactivate = async () => {
    const token = localStorage.getItem("access");
    if (!token) {
      navigate("/login", { replace: true });
      return;
    }

    if (!window.confirm("Are you sure you want to deactivate your account?"))
      return;

    setLoading(true);

    try {
      const res = await fetch("http://127.0.0.1:8000/api/user/deactivate/", {
  method: "PATCH",
  headers: {
    Authorization: `Bearer ${token}`,
  },
});



      if (!res.ok) throw new Error("Failed to deactivate account");

      alert("Account deactivated successfully");
      localStorage.clear();
      navigate("/login", { replace: true });
    } catch (err) {
      alert("Something went wrong");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="deactivate-wrapper">
      <div className="deactivate-box">
        <div className="left">
          <h3>When you deactivate your account</h3>
          <ul>
            <li>You will be logged out</li>
            <li>Your profile will no longer be visible</li>
            <li>You can reactivate by logging in again</li>
          </ul>
        </div>

        <div className="right">
          <h2>Are you sure you want to leave?</h2>

          <input type="text" value={user.email} disabled />
          <input type="text" value={user.mobile} disabled />

          <button
            className="confirm-btn"
            onClick={handleDeactivate}
            disabled={loading}
          >
            {loading ? "Deactivating..." : "CONFIRM DEACTIVATION"}
          </button>

          <button
            className="stay-btn"
            onClick={() => window.history.back()}
          >
            NO, LET ME STAY!
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeactivateAccount;
