import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { quoteOfTheday } from "../assets/quotes";

const useStyles = makeStyles({
  row: {
    marginTop: "40px",
    display: "flex",
    justifyContent: "space-between",
  },
  addButton: {
    margin: "10px",
    height: "50px",
    background: "#42b883",
    color: "#ffffff",
  },
  quote: { margin: "15px" },
  button: {
    margin: "10px",
    height: "40px",
    background: "#42b883",
    color: "#ffffff",
    width: "140px",
  },
  BtnGroup: {
    height: "75px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  titleBox: {
    width: "70%",
    margin: "15px",
  },
});

const DashboardHeader = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.row}>
        <div className={classes.titleBox}>
          <h1>Employee Directory</h1>
          <p className={classes.quote}>{quoteOfTheday.text}</p>
        </div>

        <Button className={classes.addButton} variant="contained">
          Add new Employee
        </Button>
      </div>
      <div className={classes.BtnGroup}>
        <Button className={classes.button} variant="contained">
          Employees
        </Button>
        <Button className={classes.button} variant="contained">
          Team
        </Button>
        <Button className={classes.button} variant="contained">
          Departments
        </Button>
      </div>
    </>
  );
};

export default DashboardHeader;
