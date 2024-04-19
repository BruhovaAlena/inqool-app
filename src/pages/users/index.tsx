import type { NextPage } from "next";
import Modal from "@/components/shared/Modal";
import CreateUserForm from "@/components/users/CreateUserForm";
import Table from "@/components/shared/Table/Table";
import { useUsersGet } from "@/hooks/api/users/useUsersGet";
import { createColumnHelper } from "@tanstack/react-table";
import TableUserEditActionCell from "@/components/users/TableUserEditActionCell";
import { User } from "@/requests/users/UsersRequests.types";
import TableUserBannedCell from "@/components/users/TableUserBannedCell";
import BanUserCell from "@/components/users/BanUserCell";
import UserGenderBadge from "@/components/users/UserGenderBadge";
import SkeletonLoading from "@/components/shared/SkeletonLoading";
import useModal from "@/hooks/useModal";
import Layout from "@/components/shared/Layout";

const Users: NextPage = () => {
  const { isOpen, closeModal, openModal } = useModal();
  const { data: users, isLoading } = useUsersGet();
  const columnHelper = createColumnHelper<User>();

  if (isLoading || !users) {
    return (
      <div className="bg-white h-screen flex justify-center">
        <SkeletonLoading />
      </div>
    );
  }

  const columns = [
    columnHelper.accessor("name", {
      cell: (name) => <span>{name.getValue()}</span>,
      header: "Name",
      filterFn: "includesString",
    }),
    columnHelper.accessor("gender", {
      cell: (gender) => <UserGenderBadge genderType={gender.getValue()} />,
      header: "Gender",
      enableColumnFilter: false,
    }),
    columnHelper.accessor("banned", {
      cell: (banned) => {
        const isBanned = banned.getValue();
        return <TableUserBannedCell isBanned={isBanned} />;
      },
      header: "Status",
      id: "banned",
      enableColumnFilter: false,
    }),
    columnHelper.display({
      id: "bannedAction",
      header: "Ban",
      cell: ({ row }) => {
        const isBanned = row.original.banned;
        return !isBanned && <BanUserCell id={row.original.id} />;
      },
    }),
    columnHelper.display({
      header: "Edit",
      id: "editAction",
      cell: ({ row }) => <TableUserEditActionCell id={row.original.id} />,
    }),
  ];

  return (
    <Layout>
      <Table
      filterPlaceholder="Search by user name"
        title="Users"
        columns={columns}
        data={users}
        buttonTitle="Add new user"
        onClickButton={openModal}
      />
      <Modal isOpen={isOpen} onCloseModal={closeModal} title="Create new user">
        <CreateUserForm onCancel={closeModal} onSuccess={closeModal} />
      </Modal>
    </Layout>
  );
};

export default Users;
