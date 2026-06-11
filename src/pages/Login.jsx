import "./Login.css";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/home");
  };

  return (
    <div className="login-page">
      <div className="overlay"></div>

      <div className="login-card">
        <h1>SneakerHub</h1>

        <h2>Welcome </h2>

        <p>
          Sign in to access exclusive drops,
          premium collections and special offers.
        </p>

        <input
          type="email"
          placeholder="Enter Email"
        />

        <input
          type="password"
          placeholder="Enter Password"
        />

        <button onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;