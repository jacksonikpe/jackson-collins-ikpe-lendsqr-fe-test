import React, { useState, useEffect } from "react";
import { ReactComponent as TableOptions } from "../../assets/img/tableOption-icon.svg";
import { Column } from "react-table";
import { format } from "date-fns";
import axios from "axios";
import Table from "../table/table.components";

import "./usersTable.style.scss";

export interface User {
  createdAt: string;
  orgName: string;
  userName: string;
  email: string;
  phoneNumber: string;
  lastActiveDate: string;
  profile: {
    firstName: string;
    lastName: string;
    phoneNumber: string;
    avatar: string;
    gender: string;
    bvn: string;
    address: string;
    currency: string;
  };
  guarantor: {
    firstName: string;
    lastName: string;
    phoneNumber: string;
    gender: string;
    address: string;
  };
  accountBalance: string;
  accountNumber: string;
  socials: {
    facebook: string;
    instagram: string;
    twitter: string;
  };
  education: {
    level: string;
    employmentStatus: string;
    sector: string;
    duration: string;
    officeEmail: string;
    monthlyIncome: string[];
    loanRepayment: string;
  };
  id: string;
}

const UsersTable = () => {
  const [data, setData] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [page, setPage] = useState<number>(1);

  const columns: Column<User>[] = React.useMemo(
    () => [
      { Header: "ORGANIZATION", accessor: "orgName" },
      { Header: "USERNAME", accessor: "userName" },
      { Header: "EMAIL", accessor: "email" },
      { Header: "PHONE NUMBER", accessor: "phoneNumber" },
      {
        Header: "DATE JOINED",
        accessor: (user: User) => {
          return format(new Date(user.createdAt), "MMM dd, yyyy hh:mma");
        },
      },
      {
        Header: "STATUS",
        accessor: (user: User) => {
          const statuses = ["inactive", "pending", "blacklisted", "active"];
          const randomIndex = Math.floor(Math.random() * statuses.length);
          return statuses[randomIndex];
        },
      },
      {
        Header: " ",
        Cell: () => (
          <button className="tableOptions">
            <TableOptions />
          </button>
        ),
      },
    ],
    []
  );

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users`
      );
      setData(response.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, [page]);
  return (
    <div>
      <Table data={data} columns={columns} />
    </div>
  );
};

export default UsersTable;
