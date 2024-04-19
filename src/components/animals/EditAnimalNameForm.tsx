import React from "react";
import { useForm } from "react-hook-form";
import Button from "../shared/Button";
import { zodResolver } from "@hookform/resolvers/zod";
import Input from "../shared/Input";
import { useUpdateAnimal } from "@/hooks/api/animals/useUpdateAnimal";
import {
  EditAnimalSchema,
  EditAnimalType,
} from "@/validation/editAnimalSchema";
import { useGetAnimalDetails } from "@/hooks/api/animals/useGetAnimalDetails";
import CancelButton from "../shared/CancelButton";

type EditAnimalNameFormProps = {
  onSuccess: () => void;
  id: string;
  onCancel: () => void;
};

const EditAnimalNameForm = ({
  onSuccess,
  id,
  onCancel,
}: EditAnimalNameFormProps) => {
  const { mutate, isPending } = useUpdateAnimal(id);
  const { data: animal } = useGetAnimalDetails(id);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<EditAnimalType>({
    resolver: zodResolver(EditAnimalSchema),
    defaultValues: {
      name: animal?.name ?? "",
    },
    values: {
      name: animal?.name ?? "",
    },
  });

  const submitHandler = (formValues: EditAnimalType) => {
    mutate({
      name: formValues.name,
      animalId: id,
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
      <div className="flex mt-8 w-full gap-4 justify-center">
        <CancelButton disabled={isPending} onClick={onCancel} />
        <Button title="Save" type="submit" disabled={isPending} />
      </div>
    </form>
  );
};

export default EditAnimalNameForm;
