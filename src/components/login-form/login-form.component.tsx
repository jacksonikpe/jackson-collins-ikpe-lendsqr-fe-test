import { Bars } from "react-loader-spinner";
import { useState } from "react";
import { Navigate } from "react-router-dom";

import "./login-form.style.scss";

const LoginForm = () => {
  const [email, setEmail] = useState(
    "jackson-collins-ikpe-lendsqr-fe-test@gmail.com"
  );
  const [password, setPassword] = useState("Hello123");
  const [loading, setLoading] = useState<boolean>(false);
  const [redirect, setRedirect] = useState(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    // simulate a 4 second loading time
    setTimeout(() => {
      setLoading(false);
      setRedirect(true);
    }, 4000);
  };
  if (redirect) {
    return <Navigate to="/users" />;
  }

  const togglePassword = (e: any) => {
    e.preventDefault();
    setShowPassword((prev) => !prev);
  };
  return (
    <form className="LoginFormContainer">
      <h1>Welcome!</h1>
      <p>Enter details to login.</p>
      <div className="form-inputs">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <div className="password-input">
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          <button className="show-password" onClick={(e) => togglePassword(e)}>
            {showPassword ? "hide" : "show"}
          </button>
        </div>
        <button className="forget-button">FORGOT PASSWORD?</button>
      </div>
      <button className="login-button" onClick={(e) => handleSubmit(e)}>
        {loading ? (
          <Bars
            height="17"
            width="17"
            color="#fff"
            ariaLabel="bars-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        ) : (
          "LOG IN"
        )}
      </button>
    </form>
  );
};

export default LoginForm;
