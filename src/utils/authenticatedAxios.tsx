import axios from "axios";

const token = localStorage.getItem("MNTN_Corp");

export const axiosAuth = axios.create({
  baseURL: "https://nexient-side.herokuapp.com/",
  headers: { authorization: token },
});

export const getEmployees = async () => {
  const { data } = await axiosAuth.get(`/company/admin/employees/all`);
  return data;
};
