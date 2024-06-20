import { ReactComponent as Logo } from "../../assets/img/company-login-page-logo.svg";
import { ReactComponent as Image } from "../../assets/img/login-page-image.svg";
import LoginForm from "../../components/login-form/login-form.component";

import "./login-page.style.scss";

const LoginPage = () => {
  return (
    <div className="containerLoginPage">
      <div className="left-side">
        <div className="logo">
          <Logo />
        </div>
        <div>
          <Image />
        </div>
      </div>
      <div className="right-side">
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
//login-page
