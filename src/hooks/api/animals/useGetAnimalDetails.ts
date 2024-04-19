import { getAnimalDetails } from "@/requests/animals/AnimalsRequests";
import { useQuery } from "@tanstack/react-query";

export const useGetAnimalDetails = (id: string) =>
  useQuery({
    queryKey: ["animal", id],
    queryFn: () => getAnimalDetails({ animalId: id }),
  });
