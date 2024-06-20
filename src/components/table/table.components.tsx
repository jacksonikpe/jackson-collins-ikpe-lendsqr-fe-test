import { useTable, Column, usePagination } from "react-table";
import { User } from "../usersTable/usersTable.component";

import { ReactComponent as TableFilter } from "../../assets/img/table-filters-icon.svg";

import "./table.style.scss";

interface TableProps {
  data: User[];
  columns: Column<User>[];
}
const Table: React.FC<TableProps> = ({ data, columns }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
    },
    usePagination
  );

  const totalRows = data.length;

  return (
    <>
      <div className="tableCard">
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column, index) => (
                  <th {...column.getHeaderProps()}>
                    {column.render("Header")}{" "}
                    {index < headerGroup.headers.length - 2 && (
                      <button className="tableFilter">
                        <TableFilter style={{ width: "1.3rem" }} />
                      </button>
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row, i) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="pagination">
        <span>
          Showing{" "}
          <select
            value={pageSize}
            onChange={(e) => {
              setPageSize(Number(e.target.value));
            }}
          >
            {[10, 20, 30, 40, 50, 100].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                {pageSize}
              </option>
            ))}
          </select>
          out of {totalRows}
        </span>
        <span>
          <button
            className="page-nav"
            onClick={() => previousPage()}
            disabled={!canPreviousPage}
          >
            {"<"}
          </button>{" "}
          {pageOptions.map((page, i) => {
            if (page === pageIndex) {
              return (
                <button className="page-number" key={i} disabled={true}>
                  {page + 1}
                </button>
              );
            }
            if (
              page === 0 ||
              page === pageOptions.length - 1 ||
              (page >= pageIndex - 1 && page <= pageIndex + 1)
            ) {
              return (
                <button
                  className="page-button"
                  key={i}
                  onClick={() => gotoPage(page)}
                >
                  {page + 1}
                </button>
              );
            }
            if (
              page === 1 ||
              page === pageOptions.length - 2 ||
              (page >= pageIndex - 2 && page <= pageIndex + 2)
            ) {
              return <span key={i}>...</span>;
            }
            return null;
          })}
          <button
            className="page-nav"
            onClick={() => nextPage()}
            disabled={!canNextPage}
          >
            {">"}
          </button>{" "}
        </span>
      </div>
    </>
  );
};

export default Table;
//table component
