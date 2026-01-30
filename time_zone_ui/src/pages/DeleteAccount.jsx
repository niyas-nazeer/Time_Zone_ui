import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./deleteAccount.css";

const DeleteAccount = () => {
  const navigate = useNavigate();

  const [checks, setChecks] = useState({
    terms: false,
    rewards: false,
    history: false,
  });

  const allChecked = Object.values(checks).every(Boolean);

  const handleChange = (e) => {
    setChecks({
      ...checks,
      [e.target.name]: e.target.checked,
    });
  };

  const handleDelete = async () => {
    const confirmDelete = window.confirm(
      "This action is permanent. Are you sure you want to delete your account?"
    );

    if (!confirmDelete) return;

    try {
      const res = await fetch("http://127.0.0.1:8000/api/user/delete-account/", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("access")}`,
        },
      });

      const data = await res.json();

      alert(data.message || "Account deleted");

      localStorage.clear();
      navigate("/login");
    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    }
  };

  return (
    <div className="delete-container">
      <h2>Delete Account</h2>

      <div className="warning-box">
        <strong>Deleting account is a permanent action</strong>
        <p>
          Once your account is deleted, you will lose all your data including
           purchase history. This cannot be undone.
        </p>
      </div>

      <div className="checkbox-group">
        <label>
          <input
            type="checkbox"
            name="terms"
            checked={checks.terms}
            onChange={handleChange}
          />
          I have read and agreed to the Terms and Conditions.
        </label>

        <label>
          <input
            type="checkbox"
            name="rewards"
            checked={checks.rewards}
            onChange={handleChange}
          />
          I acknowledge that I will lose rewards and balances.
        </label>

        <label>
          <input
            type="checkbox"
            name="history"
            checked={checks.history}
            onChange={handleChange}
          />
          I understand I cannot access past orders or services.
        </label>
      </div>

      <div className="action-buttons">
        <button className="cancel-btn" onClick={() => navigate(-1)}>
          Cancel
        </button>

        <button
          className={`delete-btn ${allChecked ? "active" : ""}`}
          disabled={!allChecked}
          onClick={handleDelete}
        >
          Delete Account
        </button>
      </div>
    </div>
  );
};

export default DeleteAccount;