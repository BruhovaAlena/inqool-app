import { updateAnimal } from "@/requests/animals/AnimalsRequests";
import { errorToast, successToast } from "@/toasts/toasts";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useUpdateAnimal = (animalId: string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateAnimal,
    onSuccess: (data) => {
      queryClient.setQueryData(["animal", animalId], data);
      queryClient.invalidateQueries({ queryKey: ["animals"] });
      successToast("Animal's name was succesfull edited.");
    },
    onError: () => {
      errorToast();
    },
  });
};
