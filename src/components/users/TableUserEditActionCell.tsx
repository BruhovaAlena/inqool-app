import React from "react";
import Modal from "../shared/Modal";
import EditUserNameForm from "./EditUserNameForm";
import IconButton from "../shared/IconButton";
import { FiEdit2 } from "react-icons/fi";
import useModal from "@/hooks/useModal";
import { successToast } from "@/toasts/toasts";

type TableUserEditActionCellProps = {
  id: string;
};

const TableUserEditActionCell = ({ id }: TableUserEditActionCellProps) => {
  const { isOpen, closeModal, openModal } = useModal();

  return (
    <>
      <IconButton
        icon={<FiEdit2 size={20} className="text-blue-500" />}
        onClick={openModal}
      />

      <Modal isOpen={isOpen} onCloseModal={closeModal} title="Edit name">
        <EditUserNameForm
          onCancel={closeModal}
          onSuccess={() => {
            closeModal();
            successToast("User's name was succesfull edited.");
          }}
          id={id}
        />
      </Modal>
    </>
  );
};

export default TableUserEditActionCell;
