import { useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";
import fakeLogo from "../assets/fake.jpeg";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    background: "#ffffff",
    width: "100%",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  title: { fontSize: "40px" },
  container: {
    marginTop: "50px",
    alignSelf: "center",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    padding: "15px",
  },
  buttonGroup: {
    width: "100%",
    display: "flex",
    justifyContent: "space-around",
    marginBottom: "25px",
    height: "40px",
  },
});

const CompanyPage: React.FC = () => {
  const classes = useStyles();
  const history = useHistory();
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <h1 className={classes.title}>Sorry... We're not home.... </h1>

        <img src={fakeLogo} alt="Fake logo" height="200px" width="200px" />
        <p>
          Unfortunately MNTN Outerwear is not a real company. But you can learn
          more about the developer below.
        </p>
        <div className={classes.buttonGroup}>
          <a
            href="https://wesleyryan.dev"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              alignSelf: "center",
              textDecoration: "none",
            }}
          >
            <Button variant="contained">Wesley Ryan</Button>
          </a>
          <Button variant="contained" onClick={() => history.goBack()}>
            Go Back?
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CompanyPage;
