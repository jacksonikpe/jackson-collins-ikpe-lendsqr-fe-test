import React, { useState, useEffect } from "react";
import { useTable, Column } from "react-table";
import axios from "axios";

type User = {
  id: string;
  name: string;
  email: string;
  phone: string;
  city: string;
};

type APIResponse = {
  data: User[];
};

const UsersTablee = () => {
  const [data, setData] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [page, setPage] = useState<number>(1);

  const columns: Column<User>[] = React.useMemo(
    () => [
      { Header: "ID", accessor: "id" },
      { Header: "Name", accessor: "name" },
      { Header: "Email", accessor: "email" },
      { Header: "Phone", accessor: "phone" },
      { Header: "City", accessor: "city" },
    ],
    []
  );

  const fetchUsers = async (page: number) => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users?page=${page}&limit=10`
      );
      setData(response.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchUsers(1);
  }, [page]);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable<User>({ columns, data });

  return (
    <div>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {loading ? (
            <tr>
              <td>Loading...</td>
            </tr>
          ) : (
            rows.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  ))}
                </tr>
              );
            })
          )}
        </tbody>
      </table>
      <div>
        <button
          onClick={() => setPage((prev) => prev - 1)}
          disabled={page === 1}
        >
          Previous Page
        </button>
        <button onClick={() => setPage((prev) => prev + 1)}>Next Page</button>
      </div>
    </div>
  );
};

export default UsersTablee;

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useTable, usePagination, Column } from "react-table";

// interface User {
//   createdAt: string;
//   orgName: string;
//   userName: string;
//   email: string;
//   phoneNumber: string;
//   lastActiveDate: string;
//   profile: {
//     firstName: string;
//     lastName: string;
//     phoneNumber: string;
//     avatar: string;
//     gender: string;
//     bvn: string;
//     address: string;
//     currency: string;
//   };
//   guarantor: {
//     firstName: string;
//     lastName: string;
//     phoneNumber: string;
//     gender: string;
//     address: string;
//   };
//   accountBalance: string;
//   accountNumber: string;
//   socials: {
//     facebook: string;
//     instagram: string;
//     twitter: string;
//   };
//   education: {
//     level: string;
//     employmentStatus: string;
//     sector: string;
//     duration: string;
//     officeEmail: string;
//     monthlyIncome: string[];
//     loanRepayment: string;
//   };
//   id: string;
// }

// function UsersTable() {
//   const [data, setData] = useState<User[]>([]);
//   const [loading, setLoading] = useState(false);

//   const fetchUsers = async (page: number) => {
//     setLoading(true);
//     const response = await axios.get(
//       `https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users?page=${page}&limit=10`
//     );
//     setData(response.data);
//     setLoading(false);
//   };

//   useEffect(() => {
//     fetchUsers(1);
//   }, []);

//   const columns: Column<User>[] = React.useMemo(
//     () => [
//       {
//         Header: "ID",
//         accessor: "id",
//       },
//       {
//         Header: "Name",
//         accessor: (user: User) =>
//           `${user.profile.firstName} ${user.profile.lastName}`,
//       },
//       {
//         Header: "Email",
//         accessor: "email",
//       },
//       {
//         Header: "Phone",
//         accessor: "phoneNumber",
//       },
//     ],
//     []
//   );

//   const {
//     getTableProps,
//     getTableBodyProps,
//     headerGroups,
//     page,
//     nextPage,
//     previousPage,
//     canPreviousPage,
//     canNextPage,
//     pageOptions,
//     state: { pageIndex },
//     prepareRow,
//   } = useTable(
//     {
//       columns,
//       data,
//       initialState: { pageIndex: 0 },
//     },
//     usePagination
//   );

//   return (
//     <>
//       <table {...getTableProps()}>
//         <thead>
//           {headerGroups.map((headerGroup) => (
//             <tr {...headerGroup.getHeaderGroupProps()}>
//               {headerGroup.headers.map((column) => (
//                 <th {...column.getHeaderProps()}>{column.render("Header")}</th>
//               ))}
//             </tr>
//           ))}
//         </thead>
//         <tbody {...getTableBodyProps()}>
//           {page.map((row, i) => {
//             prepareRow(row);
//             return (
//               <tr {...row.getRowProps()}>
//                 {row.cells.map((cell) => {
//                   return (
//                     <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
//                   );
//                 })}
//               </tr>
//             );
//           })}
//         </tbody>
//       </table>
//       <div>
//         <button onClick={() => previousPage()} disabled={!canPreviousPage}>
//           Previous
//         </button>{" "}
//         <button onClick={() => nextPage()} disabled={!canNextPage}>
//           Next
//         </button>{" "}
//         <span>
//           Page{" "}
//           <strong>
//             {pageIndex + 1} of {pageOptions.length}
//           </strong>{" "}
//         </span>
//       </div>
//     </>
//   );
// }

// export default UsersTable;
