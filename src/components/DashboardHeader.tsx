import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { quoteOfTheday } from "../assets/quotes";

const useStyles = makeStyles({
  row: {
    display: "flex",
    justifyContent: "space-between",
  },
  button: {
    margin: "10px",
    height: "50px",
  },
  BtnGroup: {
    height: "75px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  titleBox: {
    width: "70%",
  },
});

const DashboardHeader = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.row}>
        <div className={classes.titleBox}>
          <h2>Employee Directory</h2>
          <p>{quoteOfTheday.text}</p>
        </div>

        <Button className={classes.button} variant="contained">
          Add new Employee
        </Button>
      </div>
      <div className={classes.BtnGroup}>
        <Button className={classes.button} variant="contained">
          All Employees
        </Button>
        <Button className={classes.button} variant="contained">
          My Team
        </Button>
        <Button className={classes.button} variant="contained">
          Departments
        </Button>
      </div>
    </>
  );
};

export default DashboardHeader;
