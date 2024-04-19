import React from "react";
import clsx from "clsx";

type BadgeProps = Pick<HTMLSpanElement, "className"> & {
  value: string;
};

const Badge = ({ value, className }: BadgeProps) => {
  return (
    <span
      className={clsx(
        "h-[26px] flex justify-center items-center rounded px-2.5 border max-w-[100px] capitalize bg-white",
        className,
      )}
    >
      {value}
    </span>
  );
};

export default Badge;
