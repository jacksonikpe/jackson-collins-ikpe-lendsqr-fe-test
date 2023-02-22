import React from "react";
import Layout from "../../components/layout/layout.component";
import UserPageBackButton from "../../components/userPageBackButton/userPageBackButton.components";
import UserDetails from "../../components/userDetailsInfo/userDetailsInfo.component";

import "./user-page.style.scss";

const UserPage = () => {
  return (
    <Layout>
      <UserPageBackButton />
      <UserDetails />
    </Layout>
  );
};

export default UserPage;
