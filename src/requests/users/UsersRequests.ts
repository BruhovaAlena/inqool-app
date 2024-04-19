import axios from "axios";
import {
  CreateNewUserRequest,
  GetUserDetailsRequest,
  UpdateUserRequest,
  User,
} from "./UsersRequests.types";
import { API_URL } from "@/constants/apiUrl";

export const getUsers = async () => {
  const response = await axios<User[]>({
    method: "get",
    baseURL: API_URL,
    url: `/users`,
  });
  return response.data;
};

export const getUserDetails = async ({ userId }: GetUserDetailsRequest) => {
  const response = await axios<User>({
    method: "get",
    baseURL: API_URL,
    url: `/users/${userId}`,
  });
  return response.data;
};

export const createNewUser = async ({
  banned,
  gender,
  name,
}: CreateNewUserRequest) => {
  await axios({
    method: "post",
    baseURL: API_URL,
    url: "/users",
    data: {
      name,
      gender,
      banned,
    },
  });
};

export const updateUser = async ({
  name,
  userId,
  banned,
}: UpdateUserRequest) => {
  await axios({
    method: "patch",
    baseURL: API_URL,
    url: `/users/${userId}`,
    data: {
      name,
      banned,
    },
  });
};
