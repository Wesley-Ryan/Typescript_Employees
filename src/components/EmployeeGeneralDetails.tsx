import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  container: {
    width: "100%",
    padding: "0",
    display: "flex",
  },
  img: {
    height: "250px",
    margin: "20px",
    borderRadius: "3px",
    boxShadow: " 0 4px 7px rgba(0, 0, 0, 0.5)",
  },
  content: {
    width: "60%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    margin: "20px",
    lineHeight: "1.5",
  },
  title: {
    fontSize: "1.2rem",
    marginRight: "5px",
    fontWeight: "bold",
  },
  info: {
    fontSize: "1.2rem",
    margin: "0",
  },
  row: {
    display: "flex",
  },
  deactivateButton: {
    height: "50px",
    width: "200px",
    margin: "20px 20px 0 0 ",
  },
}));

export interface EmployeeGeneralDetailsProps {
  employee: {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    avatar: string;
    role_name: string;
    title: string;
    department: number;
    department_name: string;
    active: boolean;
  };
}

const EmployeeGeneralDetails: React.FC<EmployeeGeneralDetailsProps> = ({
  employee,
}) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <img
        alt="Employee"
        src={
          employee.avatar
            ? employee.avatar
            : "https://ik.imagekit.io/WesleyRyan/social_preview/avatar_8kCbbtDiP.jpeg"
        }
        className={classes.img}
      />
      <main className={classes.content}>
        <div className={classes.row}>
          <span className={classes.title}>Title: </span>
          <p className={classes.info}>
            {employee.title ? employee.title : "Profile not complete"}
          </p>
        </div>
        <div className={classes.row}>
          <span className={classes.title}>Name: </span>
          <p className={classes.info}>
            {employee.first_name + " " + employee.last_name}
          </p>
        </div>
        <div className={classes.row}>
          <span className={classes.title}>Email: </span>{" "}
          <p className={classes.info}>{employee.email}</p>
        </div>
        <div className={classes.row}>
          <span className={classes.title}>Dept: </span>{" "}
          <p className={classes.info}> {employee.department_name}</p>
        </div>
        <div className={classes.row}>
          <span className={classes.title}>Role: </span>{" "}
          <p className={classes.info}> {employee.role_name}</p>{" "}
        </div>
        <div className={classes.row}>
          <span className={classes.title}>Status: </span>{" "}
          <p className={classes.info}>
            {employee.active ? "Active" : "Inactive"}
          </p>
        </div>
      </main>
    </div>
  );
};

export default EmployeeGeneralDetails;
