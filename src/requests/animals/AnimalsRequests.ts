import axios from "axios";
import {
  Animal,
  CreateNewAnimalRequest,
  GetAnimalRequest,
  UpdateAnimalRequest,
} from "./AnimalsRequests.types";
import { API_URL } from "@/constants/apiUrl";

export const getAnimals = async () => {
  const response = await axios<Animal[]>({
    method: "get",
    baseURL: API_URL,
    url: "/animals",
  });
  return response.data;
};

export const getAnimalDetails = async ({ animalId }: GetAnimalRequest) => {
  const response = await axios<Animal>({
    method: "get",
    baseURL: API_URL,
    url: `/animals/${animalId}`,
  });
  return response.data;
};

export const createNewAnimal = async ({
  name,
  age,
  type,
}: CreateNewAnimalRequest) => {
  await axios({
    method: "post",
    baseURL: API_URL,
    url: "/animals",
    data: {
      name,
      type,
      age,
    },
  });
};

export const updateAnimal = async ({ name, animalId }: UpdateAnimalRequest) => {
  await axios({
    method: "patch",
    baseURL: API_URL,
    url: `/animals/${animalId}`,
    data: {
      name,
    },
  });
};
