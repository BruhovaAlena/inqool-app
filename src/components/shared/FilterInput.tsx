import React, { ForwardedRef, InputHTMLAttributes, forwardRef } from "react";
import clsx from "clsx";

type FilterInputProps = Pick<
  InputHTMLAttributes<HTMLInputElement>,
  "type" | "id" | "value" | "onChange" | "className" | "placeholder"
> & {
  onClickDelete: () => void;
};

const FilterInput = (
  {
    id,
    type,
    onChange,
    value,
    className,
    placeholder,
    onClickDelete,
    ...props
  }: FilterInputProps,
  ref: ForwardedRef<HTMLInputElement>,
) => {
  return (
    <>
      <input
        className={clsx(
          "appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none border-r-0 rounded-r-none",
          className,
        )}
        id={id}
        type={type}
        onChange={onChange}
        value={value}
        ref={ref}
        placeholder={placeholder}
        {...props}
      />
      <button
        className="border py-2 px-3 rounded-e text-blue-500"
        onClick={onClickDelete}
      >
        Clear
      </button>
    </>
  );
};

export default forwardRef(FilterInput);
