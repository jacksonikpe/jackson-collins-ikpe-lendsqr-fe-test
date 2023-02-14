import { ReactComponent as Logo } from "../../assets/img/company-login-page-logo.svg";

import "./login-page.style.scss";

const LoginPage = () => {
  return (
    <div className="container">
      <div className="left-side">
        Left Side
        <Logo />
      </div>
      <div className="right-side">Right Side</div>
    </div>
  );
};

export default LoginPage;
