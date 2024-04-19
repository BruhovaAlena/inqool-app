import { createNewAnimal } from "@/requests/animals/AnimalsRequests";
import { errorToast } from "@/toasts/toasts";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { successToast } from "@/toasts/toasts";

export const useCreateAnimal = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createNewAnimal,
    onSuccess: (data) => {
      queryClient.setQueryData(["animals"], data);
      queryClient.invalidateQueries({ queryKey: ["animals"] });
      successToast("Animal was succesfull added.");
    },
    onError: () => {
      errorToast();
    },
  });
};
