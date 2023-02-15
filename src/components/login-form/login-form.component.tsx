import "./login-form.style.scss";

const LoginForm = () => {
  return (
    <form className="LoginFormContainer">
      <h1>Welcome!</h1>
      <p>Enter details to login.</p>
      <div className="form-inputs">
        <input type="email" placeholder="Email" />
        <div className="password-input">
          <input type="password" placeholder="Password" />
          <button className="show-password">show</button>
        </div>
        <button className="forget-button">FORGOT PASSWORD?</button>
      </div>
      <button className="login-button">LOG IN</button>
    </form>
  );
};

export default LoginForm;
