import React, { ButtonHTMLAttributes } from "react";

type IconButtonProps = Pick<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "disabled" | "onClick"
> & {
  icon: React.ReactNode;
};

const IconButton = ({ icon, onClick, disabled }: IconButtonProps) => {
  return (
    <button
      className="border border-blue-100 rounded p-1.5 hover:bg-blue-100 bg-white"
      onClick={onClick}
      disabled={disabled}
    >
      {icon}
    </button>
  );
};

export default IconButton;
