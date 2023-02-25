import React, { useState, useRef, useContext } from "react";
import { ReactComponent as TableOptions } from "../../assets/img/tableOption-icon.svg";
import { Column } from "react-table";
import { format } from "date-fns";
import Table from "../table/table.components";
import usersContext from "../../context/usersContext";

import "./usersTable.style.scss";
import TableOptionPopup from "../tableOptionPopup/tableOptionPopup.component";

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
  const { users } = useContext(usersContext);
  const [data, setData] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [page, setPage] = useState<number>(1);
  const [optionPopupOpen, setOptionPopupOpen] = useState<boolean>(false);
  const [selectedRowId, setSelectedRowId] = useState<string>("");
  const [optionPopupPosition, setOptionPopupPosition] = useState<{
    left: number;
    top: number;
  }>({ left: 0, top: 0 });

  const buttonRef = useRef<HTMLButtonElement>(null);

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
        Cell: ({ value }: { value: string }) => {
          let color;
          switch (value) {
            case "inactive":
              color = "gray";
              break;
            case "pending":
              color = "orange";
              break;
            case "blacklisted":
              color = "red";
              break;
            case "active":
              color = "green";
              break;
            default:
              color = "white";
          }
          return (
            <div
              className={
                color === "gray"
                  ? "statusPill grayPill"
                  : color === "orange"
                  ? "statusPill yellowPill"
                  : color === "green"
                  ? "statusPill greenPill"
                  : color === "red"
                  ? "statusPill redPill"
                  : "statusPill"
              }
            >
              {value}
            </div>
          );
        },
      },
      {
        Header: " ",
        accessor: "id",
        Cell: ({ value }) => (
          <button
            ref={buttonRef}
            className="tableOptions"
            onClick={(e) => handlePopupOpen(value, e)}
          >
            <TableOptions />
          </button>
        ),
      },
    ],
    []
  );

  const handlePopupOpen = (id: string, e: any) => {
    // Get the position and dimensions of the table cell containing the button
    const cellRect = e.currentTarget.getBoundingClientRect();

    // Calculate the position of the popup based on the cell position and dimensions
    const popupLeft = cellRect.left + cellRect.width / 2 - 110;
    const popupTop = cellRect.top + cellRect.height + 5;

    // Set the position of the popup and open it
    setOptionPopupPosition({ left: popupLeft, top: popupTop });

    setOptionPopupOpen((prevState) => !prevState);
    setSelectedRowId(id);
  };

  return (
    <div>
      <Table data={users} columns={columns} />
      {optionPopupOpen && (
        <div>
          <TableOptionPopup
            isOpen={optionPopupOpen}
            position={optionPopupPosition}
            onClose={() => setOptionPopupOpen(false)}
            rowId={selectedRowId}
          />
        </div>
      )}
    </div>
  );
};

export default UsersTable;
