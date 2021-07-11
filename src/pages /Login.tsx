import Paper from "@material-ui/core/Paper";
import Logo from "../assets/Logo.jpeg";
const styles = {
  formStyle: {
    width: "80%",
    maxWidth: "350px",
    height: "400px",
    margin: " 0 auto",
    marginTop: "100px",
    display: "flex",
  },
  imgStyle: {
    margin: "0 auto",
  },
};
const Login: React.FC = () => {
  return (
    <div>
      <Paper elevation={3} style={styles.formStyle}>
        <img
          src={Logo}
          alt="company-logo"
          height="180px"
          style={styles.imgStyle}
        />
      </Paper>
    </div>
  );
};

export default Login;
