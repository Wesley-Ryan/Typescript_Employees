import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

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
    border: "2px solid blue",
    height: "75px",
  },
});

const DashboardHeader = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.row}>
        <div>
          <h2>Employee Directory</h2>
          <p>Quote of day here</p>
        </div>

        <Button className={classes.button} variant="contained">
          Add new Employee
        </Button>
      </div>
      <div className={classes.BtnGroup}>
        <Button variant="contained">All Employees</Button>
        <Button variant="contained">My Team</Button>
        <Button variant="contained">Departments</Button>
      </div>
    </>
  );
};

export default DashboardHeader;
