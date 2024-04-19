import { getUserDetails } from "@/requests/users/UsersRequests";
import { useQuery } from "@tanstack/react-query";

export const useGetUserDetails = (id: string) =>
  useQuery({
    queryKey: ["user", id],
    queryFn: () => getUserDetails({ userId: id }),
  });
