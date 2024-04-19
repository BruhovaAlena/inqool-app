import { Table, flexRender } from "@tanstack/react-table";
import React from "react";

type TableBodyProps<T> = {
  table: Table<T>;
};

const TableBody = <T extends object>({ table }: TableBodyProps<T>) => {
  return (
    <tbody className="bg-white divide-y divide-gray-200">
      {table.getRowModel().rows.map((row) => {
        const isDarkRow = row.index % 2;
        return (
          <tr key={row.id} className={` ${isDarkRow && "bg-blue-50"}`}>
            {row.getVisibleCells().map((cell, index) => {
              const isFirstColumn = index === 0

              return (
                <td
                  key={cell.id}
                  className={`px-3.5 py-2 text-gray-700 text-sm ${!isFirstColumn && " text-center"}`}
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              );
            })}
          </tr>
        );
      })}
    </tbody>
  );
};

export default TableBody;
