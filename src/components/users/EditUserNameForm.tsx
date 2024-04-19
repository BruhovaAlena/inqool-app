import React from "react";
import { useForm } from "react-hook-form";
import Button from "../shared/Button";
import { zodResolver } from "@hookform/resolvers/zod";
import Input from "../shared/Input";
import { useUpdateUser } from "@/hooks/api/users/useUpdateUser";
import { useGetUserDetails } from "@/hooks/api/users/useGetUserDetails";
import { EditUserSchema, EditUserType } from "@/validation/editUserSchema";
import CancelButton from "../shared/CancelButton";

type EditUserNameFormProps = {
  onSuccess: () => void;
  id: string;
  onCancel: () => void;
};

const EditUserNameForm = ({
  onSuccess,
  id,
  onCancel,
}: EditUserNameFormProps) => {
  const { mutate, isPending } = useUpdateUser(id);
  const { data: user } = useGetUserDetails(id);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<EditUserType>({
    resolver: zodResolver(EditUserSchema),
    defaultValues: {
      name: user?.name ?? "",
    },
    values: {
      name: user?.name ?? "",
    },
  });

  const submitHandler = (formValues: EditUserType) => {
    mutate({
      name: formValues.name,
      userId: id,
    });
    reset();
    onSuccess();
  };

  return (
    <form
      onSubmit={handleSubmit(submitHandler)}
      className="bg-white px-8 pt-6 pb-8 mb-4"
    >
      <div className="mb-4">
        <Input
          placeholder="Name"
          label="Name"
          {...register("name")}
          type="text"
          errorMessage={errors.name?.message}
        />
      </div>
      <div className="flex mt-4 gap-4 justify-center">
        <CancelButton disabled={isPending} onClick={onCancel} />
        <Button title="Save" type="submit" disabled={isPending} />
      </div>
    </form>
  );
};

export default EditUserNameForm;
