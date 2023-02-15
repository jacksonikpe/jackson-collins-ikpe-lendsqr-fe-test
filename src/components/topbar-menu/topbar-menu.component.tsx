import { ReactComponent as Logo } from "../../assets/img/topbar-menu-logo.svg";
import { ReactComponent as Notification } from "../../assets/img/notification-bell.svg";
import { ReactComponent as ProfileImg } from "../../assets/img/profile-img.svg";
import { ReactComponent as SearchIcon } from "../../assets/img/search-icon.svg";

import "./topbar-menu.style.scss";

const TopbarMenu = () => {
  return (
    <div className="topBarContainer">
      <Logo />
      <div className="search">
        <input type="text" placeholder="Search for anything" />
        <button>
          <SearchIcon />
        </button>
      </div>
      <div className="info">
        <button className="docs">Docs</button>
        <Notification />
        <ProfileImg />
        <button className="profileName">Adedeji</button>
      </div>
    </div>
  );
};

export default TopbarMenu;
