import React from "react";
import IconButton from "../IconButton";
import {
  FaAngleLeft,
  FaAngleRight,
  FaAnglesLeft,
  FaAnglesRight,
} from "react-icons/fa6";
import { Table } from "@tanstack/react-table";
import { PAGINATION_PAGE_SIZE_OPTIONS } from "@/constants/pagination";

type TablePaginationProps<T> = {
  table: Table<T>;
};

const TablePagination = <T extends object>({
  table,
}: TablePaginationProps<T>) => {
  return (
    <div className="flex items-center gap-2 mb-8 text-gray-500">
      <IconButton
        icon={<FaAnglesLeft size={20} className="text-blue-500" />}
        onClick={() => table.firstPage()}
        disabled={!table.getCanPreviousPage()}
      />
      <IconButton
        onClick={() => table.previousPage()}
        disabled={!table.getCanPreviousPage()}
        icon={<FaAngleLeft size={20} className="text-blue-500" />}
      />
      <IconButton
        onClick={() => table.nextPage()}
        disabled={!table.getCanNextPage()}
        icon={<FaAngleRight size={20} className="text-blue-500" />}
      />
      <IconButton
        onClick={() => table.lastPage()}
        disabled={!table.getCanNextPage()}
        icon={<FaAnglesRight size={20} className="text-blue-500" />}
      />
      <span className="flex items-center gap-1">
        <div>Page</div>
        <strong>
          {table.getState().pagination.pageIndex + 1} of{" "}
          {table.getPageCount().toLocaleString()}
        </strong>
      </span>
      <span className="flex items-center gap-1">
        | Go to page:
        <input
          type="number"
          defaultValue={table.getState().pagination.pageIndex + 1}
          onChange={(e) => {
            const page = e.target.value ? Number(e.target.value) - 1 : 0;
            table.setPageIndex(page);
          }}
          className="border p-1 rounded w-16"
        />
      </span>
      <select
        value={table.getState().pagination.pageSize}
        onChange={(e) => {
          table.setPageSize(Number(e.target.value));
        }}
      >
        {PAGINATION_PAGE_SIZE_OPTIONS.map((pageSize) => (
          <option key={pageSize} value={pageSize}>
            Show {pageSize}
          </option>
        ))}
      </select>
    </div>
  );
};

export default TablePagination;
