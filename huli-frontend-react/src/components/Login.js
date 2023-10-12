import { useState } from "react";
import { Link } from "react-router-dom";
import { useLoginUser } from "../hooks/user-hooks";

export default function Login({setUser, setIsAdmin}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { loginUser, isLoading: isLoggingIn } = useLoginUser();

    const isLoading = isLoggingIn;

    const handleSubmit = (e) => {
        e.preventDefault();
        loginUser(email, password, {setUser}, {setIsAdmin});
    }

    return (
        <div className="form-container-reg-log">
            <div className="auth-form-container">
                <h2>Login</h2>
                <form className="login-and-reg-form" onSubmit={handleSubmit}>
                    <label htmlFor="email">email</label>
                    <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        placeholder="youremail@gmail.com"
                        id="email"
                        name="email"
                        disabled={isLoading}
                    />
                    <label htmlFor="password">password</label>
                    <input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        placeholder="********"
                        id="password"
                        name="password"
                        disabled={isLoading} />
                    <button
                        type="submit"
                        disabled={isLoading}
                        className={`${isLoading && "opacity-80"}`}
                    >
                        Log In
                    </button>
                </form>
                <Link className="link-btn" to={`/register`}>Don't have an account? Register here.</Link>
            </div>
        </div>
    )
}