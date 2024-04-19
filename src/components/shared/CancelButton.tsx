import React, { ButtonHTMLAttributes } from "react";
import Button from "./Button";

type CancelButtonProps = Pick<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "disabled" | "onClick"
>;

const CancelButton = ({ disabled, onClick }: CancelButtonProps) => {
  return (
    <Button
      title="Cancel"
      type="button"
      disabled={disabled}
      onClick={onClick}
      className="bg-red-400 text-white hover:bg-red-100"
    />
  );
};

export default CancelButton;
