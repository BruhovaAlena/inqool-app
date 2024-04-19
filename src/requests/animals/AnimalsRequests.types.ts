export enum AnimalType {
  CAT = "cat",
  DOG = "dog",
  OTHER = "other",
}
export type Animal = {
  id: string;
  name: string;
  type: AnimalType;
  age: number;
};

export type CreateNewAnimalRequest = {
  name: string;
  type: string;
  age: number;
};

export type UpdateAnimalRequest = {
  name: string;
  animalId: string;
};

export type GetAnimalRequest = {
  animalId: string;
};
