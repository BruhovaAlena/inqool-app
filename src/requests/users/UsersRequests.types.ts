export enum UserGender {
  FEMALE = "female",
  MALE = "male",
  OTHER = "other",
}
export type User = {
  id: string;
  name: string;
  gender: UserGender;
  banned: boolean;
};

export type CreateNewUserRequest = {
  name: string;
  gender: string;
  banned: boolean;
};

export type UpdateUserRequest = {
  name?: string;
  userId: string;
  banned?: boolean;
};

export type GetUserDetailsRequest = {
  userId: string;
};
