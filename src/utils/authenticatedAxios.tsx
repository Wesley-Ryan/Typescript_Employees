import axios from "axios";

const token = localStorage.getItem("MNTN_Corp");

export const axiosAuth = axios.create({
  baseURL: "https://nexient-side.herokuapp.com/",
  headers: { authorization: token },
});

export const getEmployees = async () => {
  const { data } = await axiosAuth.get(`/company/general/all`);
  return data;
};

export const getCurrentUser = async () => {
  const { data } = await axiosAuth.get(`/company/account/current`);
  return data;
};

interface UpdateUser {
  id: number;
  changes: {};
}

export const deactivateUserAPI = async ({ id, changes }: UpdateUser) => {
  const { data } = await axiosAuth.put(`/company/account/${id}`, changes);
  return data;
};
