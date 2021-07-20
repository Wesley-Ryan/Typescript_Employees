import { useLocation, useHistory } from "react-router-dom";
import ErrorImage from "../assets/404.jpeg";
import { Button } from "@material-ui/core";

const NoMatch = () => {
  const location = useLocation();
  const history = useHistory();

  const handleBackClick = () => {
    history.goBack();
  };
  return (
    <div
      style={{
        height: `100vh`,
        display: `flex`,
        flexDirection: `column`,
        justifyContent: `center`,
        alignItems: `center`,
      }}
    >
      <img src={ErrorImage} width="50%" alt="404 lost" />
      <h3>Where are you going?</h3>{" "}
      <h3> https://mntn-corp.netlify.app{location.pathname} does not exist.</h3>
      <Button
        variant="contained"
        color="secondary"
        onClick={handleBackClick}
        style={{ height: "45px", width: "120px" }}
      >
        Back
      </Button>
    </div>
  );
};

export default NoMatch;
