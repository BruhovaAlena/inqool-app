import { getAnimals } from "@/requests/animals/AnimalsRequests";
import { useQuery } from "@tanstack/react-query";

export const useGetAnimals = () =>
  useQuery({
    queryKey: ["animals"],
    queryFn: () => getAnimals(),
  });
