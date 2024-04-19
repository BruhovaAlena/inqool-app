import clsx from "clsx";
import React, { ButtonHTMLAttributes } from "react";

type ButtonProps = Pick<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "type" | "disabled" | "className" | "onClick"
> & {
  title: string;
  rightIcon?: React.ReactNode;
  leftIcon?: React.ReactNode;
};

const Button = ({
  onClick,
  title,
  type,
  disabled,
  rightIcon,
  leftIcon,
  className,
}: ButtonProps) => {
  return (
    <button
      disabled={disabled}
      type={type}
      onClick={onClick}
      className={clsx(
        `bg-blue-50 min-w-[100px] flex justify-center items-center hover:bg-blue-100 text-blue-500 px-2.5 py-1.5 text-sm rounded focus:outline-none focus:shadow-outline ${disabled && "bg-gray-300 cursor-not-allowed opacity-50"} ${(rightIcon || leftIcon) && "gap-2"}
     `,
        className,
      )}
    >
      {leftIcon && leftIcon}
      {title}
      {rightIcon && rightIcon}
    </button>
  );
};

export default Button;
