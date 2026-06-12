import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";

function Register() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    try {
      const res = await fetch(
        "http://localhost:5000/api/auth/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            password,
          }),
        }
      );

      const data = await res.json();

      if (res.ok) {
        alert("Registration Successful");

        setName("");
        setEmail("");
        setPassword("");

        navigate("/");
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.log(error);
      alert("Server Error");
    }
  };

  return (
    <div className="register-page">
      <div className="register-card">
        <h1>SneakerHub</h1>

        <h2>Create Account</h2>

        <p>
          Join SneakerHub and get access to
          exclusive sneaker drops and offers.
        </p>

        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          className="register-btn"
          onClick={handleRegister}
        >
          Register
        </button>

        <p className="login-text">
          Already have an account?
        </p>

        <button
          className="login-btn"
          onClick={() => navigate("/")}
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default Register;