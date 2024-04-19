import { createNewUser } from "@/requests/users/UsersRequests";
import { errorToast, successToast } from "@/toasts/toasts";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useCreateUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createNewUser,
    onSuccess: (data) => {
      queryClient.setQueryData(["users"], data);
      queryClient.invalidateQueries({ queryKey: ["users"] });
      successToast("User was succesfull created.");
    },
    onError: () => {
      errorToast();
    },
  });
};
