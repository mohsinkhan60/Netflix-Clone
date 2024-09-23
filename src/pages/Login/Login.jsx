import "./Login.css";
import logo from "../../assets/logo.png";
import { useState } from "react";
import { login, signup } from "../../firebase";
import netflixSpinner from "../../assets/netflix_spinner.gif"; // Use a default import

export const Login = () => {
  const [signState, setSignState] = useState("Sign In");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const user_auth = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(""); // Clear any previous errors
    console.log(`Attempting to ${signState} user with email: ${email}`);
    
    try {
      if (signState === "Sign In") {
        await login(email, password);
      } else {
        await signup(name, email, password);
      }
    } catch (err) {
      setError(err.message); // Handle error and set error state
    } finally {
      setLoading(false);
    }
  };

  return (
    loading ? (
      <div className="login-spin">
        <img src={netflixSpinner} alt="Loading..." /> {/* Use the correct import */}
      </div>
    ) : (
      <div className="login">
        <img src={logo} className="login-logo" alt="Logo" />
        <div className="login-form">
          <h1>{signState}</h1>
          <form onSubmit={user_auth}>
            {signState === "Sign Up" && (
              <input
                type="text"
                placeholder="Your name..."
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            )}
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit">{signState}</button>
            {error && <p className="error-message">{error}</p>}
            <div className="form-help">
              <div className="remember">
                <input type="checkbox" id="remember" />
                <label htmlFor="remember">Remember Me</label>
              </div>
              <p>Need Help?</p>
            </div>
          </form>
          <div className="form-switch">
            {signState === "Sign Up" ? (
              <p>
                New to Netflix?{" "}
                <span onClick={() => setSignState("Sign In")}>Sign In Now</span>
              </p>
            ) : (
              <p>
                Already have an account?{" "}
                <span onClick={() => setSignState("Sign Up")}>Sign Up Now</span>
              </p>
            )}
          </div>
        </div>
      </div>
    )
  );
};

export default Login;
