import Sidebar from "../sidebar/sidebar.component";
import TopbarMenu from "../topbar-menu/topbar-menu.component";
import "./layout.style.scss";

type Props = {
  children?: React.ReactNode;
};
//layout
const Layout = ({ children }: Props) => {
  return (
    <div className="layoutContainer">
      <TopbarMenu />
      <Sidebar />
      {children}
    </div>
  );
};

export default Layout;
