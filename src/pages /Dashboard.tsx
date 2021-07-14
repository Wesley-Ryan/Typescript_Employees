import { getEmployees } from "../utils/authenticatedAxios";
import { useQuery } from "react-query";
import { useState } from "react";

type Employee = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  login_attempts: number;
  avatar: string;
  role_name: string;
  department_name: string;
  title: string;
  salary: string;
  role: number;
  department: number;
  pinpoint: string;
  active: boolean;
};
const Dashboard: React.FC = () => {
  const { data, isLoading } = useQuery("employees", getEmployees);

  if (isLoading) {
    return (
      <div>
        <h2>LOADING....</h2>
      </div>
    );
  }
  return (
    <div>
      <ul>
        {data.data?.map((employee: Employee) => (
          <li key={employee.id}>{employee.first_name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
