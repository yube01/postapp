import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
const Register = () => {
  const [input, setInput] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:2000/auth/register",
        input
      );
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="auth">
      <h1>Register</h1>
      <form>
        <input
          required
          type="text"
          onChange={handleChange}
          placeholder="username"
          name="username"
        />
        <input
          required
          type="email"
          onChange={handleChange}
          placeholder="email"
          name="email"
        />
        <input
          required
          type="password"
          onChange={handleChange}
          placeholder="password"
          name="password"
        />
        <button onClick={handleSubmit}>Register</button>

        <span>
          Do you have an account? <Link to="/login">Login</Link>
        </span>
      </form>
    </div>
  );
};

export default Register;
