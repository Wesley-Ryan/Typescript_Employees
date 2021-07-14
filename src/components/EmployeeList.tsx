type EmployeeListProps = {
  first_name: string;
};

const EmployeeList = ({ first_name }: EmployeeListProps) => {
  return (
    <>
      <p>{first_name}</p>
    </>
  );
};

export default EmployeeList;
