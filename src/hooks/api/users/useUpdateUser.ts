import { updateUser } from "@/requests/users/UsersRequests";
import { errorToast } from "@/toasts/toasts";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useUpdateUser = (userId: string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateUser,
    onSuccess: (data) => {
      queryClient.setQueryData(["user", userId], data);
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
    onError: () => {
      errorToast();
    },
  });
};
