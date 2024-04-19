import React from "react";
import { Controller, useForm } from "react-hook-form";
import Button from "../shared/Button";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  CreateAnimalSchema,
  CreateAnimalType,
} from "@/validation/createAnimalSchema";
import { useCreateAnimal } from "@/hooks/api/animals/useCreateAnimal";
import Input from "../shared/Input";
import Select from "../shared/Select";
import CancelButton from "../shared/CancelButton";
import { ANIMAL_TYPE } from "@/constants/selectOptions";

type CreateUserFormProps = {
  onSuccess: () => void;
  onCancel: () => void;
};

const CreateAnimalForm = ({ onSuccess, onCancel }: CreateUserFormProps) => {
  const { mutate, isPending } = useCreateAnimal();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm<CreateAnimalType>({
    resolver: zodResolver(CreateAnimalSchema),
    defaultValues: {
      name: "",
      age: 0,
      type: "",
    },
  });

  const submitHandler = (formValues: CreateAnimalType) => {
    mutate({
      name: formValues.name,
      age: formValues.age,
      type: formValues.type,
    });
    reset();
    onSuccess();
  };

  return (
    <form
      onSubmit={handleSubmit(submitHandler)}
      className="bg-white px-8 pt-6 pb-8 mb-4"
      noValidate
    >
      <div className="mb-4">
        <Input
          label="Name"
          {...register("name")}
          type="text"
          placeholder="Name"
          errorMessage={errors.name?.message}
        />
      </div>
      <div>
        <Controller
          {...register("type")}
          control={control}
          name="type"
          render={({ field }) => {
            return (
              <Select
                errorMessage={errors.type?.message}
                label=" Type"
                options={ANIMAL_TYPE}
                onChange={(value) => {
                  return field.onChange(value);
                }}
                value={field.value}
              />
            );
          }}
        />
      </div>
      <div className="mb-4 mt-4">
        <Input
          label="Age"
          type="number"
          {...register("age", { valueAsNumber: true })}
          errorMessage={errors.age?.message}
        />
      </div>
      <div className="flex mt-8 w-full justify-center gap-4">
        <CancelButton disabled={isPending} onClick={onCancel} />
        <Button title="Create" type="submit" disabled={isPending} />
      </div>
    </form>
  );
};

export default CreateAnimalForm;
