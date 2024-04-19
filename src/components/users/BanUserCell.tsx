import React from "react";
import { useUpdateUser } from "@/hooks/api/users/useUpdateUser";
import IconButton from "../shared/IconButton";
import { IoBanOutline } from "react-icons/io5";
import Modal from "../shared/Modal";
import Button from "../shared/Button";
import { successToast } from "@/toasts/toasts";
import useModal from "@/hooks/useModal";
import CancelButton from "../shared/CancelButton";

type BanUserCellProps = {
  onSuccess?: () => void;
  id: string;
};

const BanUserCell = ({ onSuccess, id }: BanUserCellProps) => {
  const { mutate, isPending } = useUpdateUser(id);
  const { isOpen, closeModal, openModal } = useModal();

  const submitHandler = () => {
    mutate({
      banned: true,
      userId: id,
    });
    closeModal();
    successToast("User was succesfull banned.");
  };

  return (
    <>
      <IconButton
        icon={<IoBanOutline size={20} className="text-blue-500" />}
        onClick={openModal}
      />
      <Modal isOpen={isOpen} onCloseModal={closeModal} title="Ban user">
        <div className="flex flex-col items-center gap-2 py-4 ">
          <span className="text-black">
            Do you really want banned this user?
          </span>
          <div className="flex gap-4 mt-4">
            <CancelButton onClick={closeModal} disabled={isPending} />
            <Button title="Yes" onClick={submitHandler} disabled={isPending} />
          </div>
        </div>
      </Modal>
    </>
  );
};

export default BanUserCell;
