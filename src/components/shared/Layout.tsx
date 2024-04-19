import React, { PropsWithChildren } from "react";
import Button from "./Button";
import { IoChevronBackOutline } from "react-icons/io5";
import { useRouter } from "next/router";

const Layout = ({ children }: PropsWithChildren) => {
  const { push } = useRouter();

  return (
    <div className="flex flex-col gap-3 w-full items-center justify-center px-4 pt-3">
      <div className="flex w-full">
        <Button
          title="go back"
          leftIcon={<IoChevronBackOutline size={20} />}
          onClick={() => push("/")}
        />
      </div>
      {children}
    </div>
  );
};

export default Layout;
