import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useRegisterUser } from "../hooks/user-hooks";

export default function Register() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [role, setRole] = useState("user");
  const [address, setAddress]= useState("")
  const [zipCode,setZipCode] = useState("")
  const [city,setCity] = useState("")
  const [password, setPassword] = useState("");
  const { registerUser, isLoading: isCreatingUser } = useRegisterUser();

  const isLoading = isCreatingUser;

  const navigate = useNavigate();

  const addUser = async (e) => {
    e.preventDefault();
    const user = { email, name, role, address, zipCode, city, password };

    const registeredUser = registerUser(user);
    if (registeredUser === "Email is already taken.") {
      alert("This email address already exists");
    } else {
      navigate("/login");
    }
  };

  return (
    <div className="form-container-reg-log">
      <div className="auth-form-container">
        <h2>Registration</h2>
        <form id="register-form" className="login-and-reg-form" onSubmit={addUser}>
          <label htmlFor="email">E-mail address</label>
          <input
            type="email"
            id="email"
            placeholder="e-mail@e-mail.com"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="name">Full name</label>
          <input
            type="text"
            id="name"
            placeholder="John Smith"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="address">Address</label>
          <input
            type="text"
            id="address"
            placeholder="XY street 1"
            required
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <label htmlFor="zipCode">Zipcode</label>
          <input
            type="text"
            id="zipCode"
            placeholder="1000"
            required
            value={zipCode}
            onChange={(e) => setZipCode(e.target.value)}
          />
          <label htmlFor="city">City</label>
          <input
            type="text"
            id="city"
            placeholder="New York"
            required
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <label htmlFor="pass">Password</label>
          <input
            type="password"
            id="pass"
            name="password"
            minLength="8"
            required
            placeholder="*******"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Register</button>
          <Link className="link-btn" to={`/login`}>Already have an account? Sign in.</Link>
        </form>
      </div>
    </div>
  );
}