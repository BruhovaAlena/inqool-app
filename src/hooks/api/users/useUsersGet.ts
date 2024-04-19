import { getUsers } from "@/requests/users/UsersRequests";
import { useQuery } from "@tanstack/react-query";

export const useUsersGet = () =>
  useQuery({
    queryKey: ["users"],
    queryFn: () => getUsers(),
  });
