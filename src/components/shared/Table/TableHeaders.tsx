import React, { ChangeEvent, SetStateAction } from "react";
import FilterInput from "../FilterInput";
import { ColumnFiltersState, Table, flexRender } from "@tanstack/react-table";

type TableHeadersProps<T> = {
  table: Table<T>;
  columnFilters: ColumnFiltersState;
  setColumnFilters: (value: SetStateAction<ColumnFiltersState>) => void;
  filterPlaceholder: string
};

const TableHeaders = <T extends object>({
  table,
  columnFilters,
  setColumnFilters,
  filterPlaceholder
}: TableHeadersProps<T>) => {
  return (
    <thead>
      {table.getHeaderGroups().map((headerGroup) => (
        <tr key={headerGroup.id}>
          {headerGroup.headers.map((header) => {
            const isFilterEnabled = header.column.getCanFilter();
            const filterValue = columnFilters.find(
              ({ id }) => id === header.column.id,
            )?.value;
            const onFilterChange = (event: ChangeEvent<HTMLInputElement>) => {
              setColumnFilters([
                { id: header.column.id, value: event.target.value },
              ]);
            };
            const resetFilters = () => {
              setColumnFilters([{ id: header.column.id, value: "" }]);
            };

            return (
              <th
                key={header.id}
                className="pb-2 pt-4 text-center text-sm font-medium text-gray-500 uppercase tracking-wider"
              >
                <div className={`flex flex-col ${!isFilterEnabled && "pb-8"}`}>
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext(),
                  )}
                  {isFilterEnabled && (
                    <div className="flex items-center">
                      <FilterInput
                        onClickDelete={resetFilters}
                        placeholder={filterPlaceholder}
                        type="text"
                        value={filterValue as string}
                        onChange={onFilterChange}
                      />
                    </div>
                  )}
                </div>
              </th>
            );
          })}
        </tr>
      ))}
    </thead>
  );
};

export default TableHeaders;
