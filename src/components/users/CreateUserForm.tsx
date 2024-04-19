import React from "react";
import { Controller, useForm } from "react-hook-form";
import Button from "../shared/Button";
import { useCreateUser } from "@/hooks/api/users/useCreateUser";
import {
  CreateUserSchema,
  CreateUserType,
} from "@/validation/createUserSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import Input from "../shared/Input";
import Select from "../shared/Select";
import CancelButton from "../shared/CancelButton";
import { ANIMAL_TYPE, USER_GENDER } from "@/constants/selectOptions";

type CreateUserFormProps = {
  onSuccess: () => void;
  onCancel: () => void;
};

const CreateUserForm = ({ onSuccess, onCancel }: CreateUserFormProps) => {
  const { mutate, isPending } = useCreateUser();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm<CreateUserType>({
    resolver: zodResolver(CreateUserSchema),
    defaultValues: {
      name: "",
      banned: false,
      gender: "",
    },
  });

  const submitHandler = (formValues: CreateUserType) => {
    mutate({
      name: formValues.name,
      banned: false,
      gender: formValues.gender,
    });
    reset();
    onSuccess();
  };

  return (
    <form
      onSubmit={handleSubmit(submitHandler)}
      className="bg-white px-8 pt-6 pb-8"
    >
      <div className="mb-4">
        <Input
          placeholder="Name"
          label="Name"
          type="text"
          {...register("name")}
          errorMessage={errors.name?.message}
        />
      </div>
      <div>
        <Controller
          {...register("gender")}
          control={control}
          name="gender"
          render={({ field }) => {
            return (
              <Select
                label="Gender"
                options={USER_GENDER}
                onChange={(value) => {
                  return field.onChange(value);
                }}
                value={field.value}
                errorMessage={errors.gender?.message}
              />
            );
          }}
        />
      </div>
      <div className="flex mt-8 gap-4 justify-center">
        <CancelButton disabled={isPending} onClick={onCancel} />
        <Button title="Create" type="submit" disabled={isPending} />
      </div>
    </form>
  );
};

export default CreateUserForm;
