import { ReactComponent as Backbutton } from "../../assets/img/backbuttonImg.svg";

import "./userPageBackButton.style.scss";

const UserPageBackButton = () => {
  return (
    <button className="backButton">
      <Backbutton /> <p>back to Users</p>
    </button>
  );
};

export default UserPageBackButton;
