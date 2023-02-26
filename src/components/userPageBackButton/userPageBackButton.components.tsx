import { Link } from "react-router-dom";
import { ReactComponent as Backbutton } from "../../assets/img/backbuttonImg.svg";

import "./userPageBackButton.style.scss";

const UserPageBackButton = () => {
  return (
    <Link style={{ textDecoration: "none" }} to={"/users"}>
      <button className="backButton">
        <Backbutton /> <p>back to Users</p>
      </button>
    </Link>
  );
};

export default UserPageBackButton;
