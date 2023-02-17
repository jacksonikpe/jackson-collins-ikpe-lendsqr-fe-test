import Layout from "../../components/layout/layout.component";
import UsersPageCards from "../../components/usersPageCards/usersPageCards.components";
import "./users-page.style.scss";

const UsersPage = () => {
  return (
    <Layout>
      <div className="userContainer">
        <h1>Users</h1>
        <UsersPageCards />
      </div>
    </Layout>
  );
};

export default UsersPage;
