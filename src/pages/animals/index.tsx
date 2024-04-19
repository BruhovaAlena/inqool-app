import type { NextPage } from "next";
import Modal from "@/components/shared/Modal";
import CreateAnimalForm from "@/components/animals/CreateAnimalForm";
import Table from "@/components/shared/Table/Table";
import { useGetAnimals } from "@/hooks/api/animals/useGetAnimals";
import { createColumnHelper } from "@tanstack/react-table";
import { Animal } from "@/requests/animals/AnimalsRequests.types";
import TableAnimalEditActionCell from "@/components/animals/TableAnimalEditActionCell";
import AnimalTypeBadge from "@/components/animals/AnimalTypeBadge";
import SkeletonLoading from "@/components/shared/SkeletonLoading";
import useModal from "@/hooks/useModal";
import { useRouter } from "next/router";
import Layout from "@/components/shared/Layout";

const Animals: NextPage = () => {
  const { isOpen, closeModal, openModal } = useModal();
  const { data: animals, isLoading } = useGetAnimals();

  if (isLoading || !animals) {
    return (
      <div className="bg-white h-screen flex justify-center">
        <SkeletonLoading />
      </div>
    );
  }

  const columnHelper = createColumnHelper<Animal>();
  const columns = [
    columnHelper.accessor("name", {
      cell: (name) => <span>{name.getValue()}</span>,
      header: "Name",
    }),
    columnHelper.accessor("type", {
      cell: (type) => <AnimalTypeBadge animalType={type.getValue()} />,
      header: "type",
      enableColumnFilter: false,
    }),
    columnHelper.accessor("age", {
      cell: (banned) => <span>{banned.getValue()}</span>,
      header: "Age",
      enableColumnFilter: false,
    }),
    columnHelper.display({
      id: "editAction",
      cell: ({ row }) => (
        <>
          <TableAnimalEditActionCell id={row.original.id} />
        </>
      ),
    }),
  ];

  return (
    <Layout>
      <Table
      filterPlaceholder="Search by animal name"
        title="Animals"
        columns={columns}
        data={animals}
        buttonTitle="Add new animal"
        onClickButton={openModal}
      />
      <Modal isOpen={isOpen} onCloseModal={closeModal} title="Add new animal">
        <CreateAnimalForm onCancel={closeModal} onSuccess={closeModal} />
      </Modal>
    </Layout>
  );
};

export default Animals;
