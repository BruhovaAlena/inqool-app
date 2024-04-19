import React from "react";

type TableUserBannedCellProps = {
  isBanned: boolean;
};

const TableUserBannedCell = ({ isBanned }: TableUserBannedCellProps) => {
  return <span>{isBanned ? "Banned" : "Active"}</span>;
};

export default TableUserBannedCell;
