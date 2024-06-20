import { ReactComponent as Logo } from "../../assets/img/topbar-menu-logo.svg";
import { ReactComponent as Notification } from "../../assets/img/notification-bell.svg";
import { ReactComponent as ProfileImg } from "../../assets/img/profile-img.svg";

import "./topbar-menu.style.scss";
import Search from "../search/search.component";

const TopbarMenu = () => {
  return (
    <div className="topBarContainer">
      <Logo />

      <Search />
      <div className="info">
        <button className="docs">Docs</button>
        <div className="notification">
          <Notification />
        </div>
        <div className="profileImg">
          <ProfileImg />
        </div>
        <button className="profileName">Adedeji</button>
      </div>
    </div>
  );
};

export default TopbarMenu;
//topbar-menu
