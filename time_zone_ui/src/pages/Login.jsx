import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "./Login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [isDeactivated, setIsDeactivated] = useState(false);
  const [showPassword, setShowPassword] = useState(false);



  // Redirect if already logged in
  useEffect(() => {
    const accessToken = localStorage.getItem("access");
    if (accessToken) {
      navigate("/home");
    }
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username || !password) {
      setError("Please fill both fields!");
      return;
    }

    try {
      const response = await fetch(
        "http://127.0.0.1:8000/api/user/login/",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ username, password }),
        }
      );

       const data = await response.json();

    if (!response.ok) {
      if (data.error === "ACCOUNT_DEACTIVATED") {
        setError("Your account is deactivated.");
        setIsDeactivated(true); // 👈 IMPORTANT
        return;
      }

      setError("Invalid username or password");
      setIsDeactivated(false);
      return;
    }

    localStorage.setItem("refresh", data.refresh);
    localStorage.setItem("access", data.access);
    localStorage.setItem("userType", data.type);

    navigate("/home");
  } catch {
    setError("Server error. Try again later.");
  }
};

const handleReactivate = async () => {
  try {
    const response = await fetch(
      "http://127.0.0.1:8000/api/user/reactivate/",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      setError("Reactivation failed. Check credentials.");
      return;
    }

    localStorage.setItem("refresh", data.refresh);
    localStorage.setItem("access", data.access);
    localStorage.setItem("userType", data.type);

    navigate("/home"); // ✅ DIRECT TO HOME
  } catch {
    setError("Server error. Try again later.");
  }
};


const handleCancelReactivation = () => {
  setUsername("");        // Clear username input
  setPassword("");        // Clear password input
  setError("");           // Clear error message
  setIsDeactivated(false); // Reset UI to show Login button
};



  return (
    <div className="login-container">
      <h1 className="title">Time Zone</h1>

      <div className="login-card">
        <h1 className="login-h1">Login</h1>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="text"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
                setIsDeactivated(false);
                setError("");
              }}
              placeholder="Username"
              className="input-field"
            />

            <div className="input-group password-group">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setIsDeactivated(false);
                  setError("");
                }}
                placeholder="Password"
                className="input-field"
              />

              <span className="toggle-password" onClick={() => setShowPassword(p => !p)}>
                <span className="icon">
                  {showPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
                </span>
              </span>

            </div>

          </div>

          {error && <div className="error-message">{error}</div>}

          {isDeactivated ? (
            <div className="reactivate-buttons">
              <button
                type="button"
                className="reactivate-button"
                onClick={handleReactivate}
              >
                Reactivate Account
              </button>

              <button
                type="button"
                className="cancel-button"
                onClick={handleCancelReactivation}
              >
                Cancel
              </button>
            </div>
          ) : (
            <button type="submit" className="submit-button">
              Login
            </button>
          )}


        </form>

        <p className="signup-link">
          New to Time Zone? <a href="/signup">Create an account</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
