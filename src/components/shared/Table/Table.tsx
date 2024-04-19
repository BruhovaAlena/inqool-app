import React, { useState } from "react";
import {
  useReactTable,
  getCoreRowModel,
  getFilteredRowModel,
  ColumnDef,
  PaginationState,
  getPaginationRowModel,
} from "@tanstack/react-table";
import Button from "../Button";
import { IoAddSharp } from "react-icons/io5";
import TablePagination from "./TablePagination";
import TableHeaders from "./TableHeaders";
import TableBody from "./TableBody";

type TableProps<T extends object> = {
  data: T[];
  columns: ColumnDef<T, any>[];
  title: string;
  buttonTitle: string;
  onClickButton: () => void;
  filterPlaceholder: string
};

interface ColumnFilter {
  id: string;
  value: unknown;
}
type ColumnFiltersState = ColumnFilter[];

const Table = <T extends object>({
  columns,
  data,
  title,
  buttonTitle,
  onClickButton,
  filterPlaceholder
}: TableProps<T>) => {
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [pagination, setPagination] = React.useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      columnFilters,
      pagination,
    },
    onColumnFiltersChange: setColumnFilters,
    getPaginationRowModel: getPaginationRowModel(),
    onPaginationChange: setPagination,
  });

  return (
    <>
      <div className="p-2 max-w-5xl mx-auto">
        <div className="flex w-full justify-between items-center">
          <span className="text-2xl font-medium ">{title}</span>
          <Button
            className="py-3 px-4 text-xl"
            title={buttonTitle}
            type="button"
            onClick={onClickButton}
            rightIcon={<IoAddSharp size={22} />}
          />
        </div>
        <table className="text-left divide-y divide-gray-200 shadow overflow-hidden sm:rounded-lg mt-4 min-w-[800px]">
          <TableHeaders
          filterPlaceholder={filterPlaceholder}
            columnFilters={columnFilters}
            setColumnFilters={setColumnFilters}
            table={table}
          />
          <TableBody table={table} />
        </table>
      </div>
      <TablePagination table={table} />
    </>
  );
};

export default Table;
