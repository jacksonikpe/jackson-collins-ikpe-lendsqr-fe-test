import Layout from "../../components/layout/layout.component";
import UsersPageCards from "../../components/usersPageCards/usersPageCards.components";
import UsersTable from "../../components/usersTable/usersTable.component";

import "./users-page.style.scss";

const UsersPage = () => {
  return (
    <Layout>
      <div className="userContainer">
        <h1>Users</h1>
        <UsersPageCards />
        <UsersTable />
      </div>
    </Layout>
  );
};

export default UsersPage;
