import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { quoteOfTheday } from "../assets/quotes";
import { useHistory } from "react-router-dom";

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
  quoteBox: {
    display: "flex",
  },
  quote: { margin: "15px" },
  author: { margin: "35px 10px 0 0 " },
  button: {
    margin: "10px",
    height: "40px",
    background: "#42b883",
    color: "#ffffff",
    width: "160px",
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

type HeaderProps = {
  setTeam: () => void;
  setAll: () => void;
};

const DashboardHeader = ({ setTeam, setAll }: HeaderProps) => {
  const classes = useStyles();
  const history = useHistory();
  const handleAddClick = () => {
    history.push("/admin/add-employee");
  };

  return (
    <>
      <div className={classes.row}>
        <div className={classes.titleBox}>
          <h1>Employee Directory</h1>
          <div className={classes.quoteBox}>
            <p className={classes.quote}>{quoteOfTheday.text}</p>
            <span className={classes.author}>
              -{quoteOfTheday.author ? quoteOfTheday.author : "Unknown"}
            </span>
          </div>
        </div>

        <Button
          className={classes.addButton}
          variant="contained"
          onClick={() => handleAddClick()}
        >
          Add new Employee
        </Button>
      </div>
      <div className={classes.BtnGroup}>
        <Button
          className={classes.button}
          variant="contained"
          onClick={() => setAll()}
        >
          Employees
        </Button>
        <Button
          className={classes.button}
          variant="contained"
          onClick={() => setTeam()}
        >
          Team
        </Button>
      </div>
    </>
  );
};

export default DashboardHeader;
