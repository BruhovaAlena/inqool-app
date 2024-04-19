import React from "react";
import Modal from "../shared/Modal";
import EditAnimalNameForm from "./EditAnimalNameForm";
import { FiEdit2 } from "react-icons/fi";
import IconButton from "../shared/IconButton";
import useModal from "@/hooks/useModal";

type TableAnimalEditActionCellProps = {
  id: string;
};

const TableAnimalEditActionCell = ({ id }: TableAnimalEditActionCellProps) => {
  const { isOpen, closeModal, openModal } = useModal();

  return (
    <>
      <IconButton
        icon={<FiEdit2 size={20} className="text-blue-500" />}
        onClick={openModal}
      />
      <Modal isOpen={isOpen} onCloseModal={closeModal} title="Edit name">
        <EditAnimalNameForm
          onCancel={closeModal}
          onSuccess={closeModal}
          id={id}
        />
      </Modal>
    </>
  );
};

export default TableAnimalEditActionCell;
