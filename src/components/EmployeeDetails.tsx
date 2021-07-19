import { makeStyles } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { axiosAuth } from "../utils/authenticatedAxios";
import { useHistory } from "react-router-dom";
import Resize from "../hooks/useResize";

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
  activateButton: {
    height: "50px",
    width: "200px",
    margin: "20px 20px 0 0 ",
    background: "#42b883",
    color: "#ffffff",
  },
}));

interface EmployeeDetailsProps {
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

const EmployeeDetails = ({ employee }: EmployeeDetailsProps) => {
  Resize();
  const classes = useStyles();
  const history = useHistory();

  const deactivateUser = (id: number) => {
    const changes = {
      active: false,
    };
    axiosAuth
      .put(`/company/account/${id}`, changes)
      .then((response) => {
        history.go(0);
      })
      .catch((error) => {
        console.log(error.message);
        history.go(0);
      });
  };

  const activateUser = (id: number) => {
    const changes = {
      active: true,
    };
    axiosAuth
      .put(`/company/account/${id}`, changes)
      .then((response) => {
        history.go(0);
      })
      .catch((error) => {
        console.log(error.message);
        history.go(0);
      });
  };
  return (
    <div
      className={classes.container}
      style={{ flexDirection: window.innerWidth > 650 ? "row" : "column" }}
    >
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
          <span className={classes.title}>ID: </span>
          <p className={classes.info}>{employee.id}</p>
        </div>
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
          <span className={classes.title} style={{ marginLeft: `20px` }}>
            {" "}
            Locked:{" "}
          </span>{" "}
          <p className={classes.info}>Unlocked</p>
        </div>
        <div>
          <Button
            className={classes.deactivateButton}
            variant="contained"
            color="secondary"
            onClick={() => deactivateUser(employee.id)}
          >
            Deactivate Account
          </Button>
          <Button
            className={classes.activateButton}
            variant="contained"
            onClick={() => activateUser(employee.id)}
          >
            Activate Account
          </Button>
        </div>
      </main>
    </div>
  );
};

export default EmployeeDetails;
