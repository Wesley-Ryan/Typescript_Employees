import { Paper, TextField, InputAdornment } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Logo from "../assets/Logo.jpeg";
import { AccountCircle, Lock } from "@material-ui/icons/";

const useStyles = makeStyles({
  formStyle: {
    width: "80%",
    maxWidth: "350px",
    height: "400px",
    margin: " 0 auto",
    marginTop: "100px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  imgStyle: {
    margin: "0 auto",
  },
});
const Login: React.FC = () => {
  const classes = useStyles();
  return (
    <div>
      <Paper elevation={3} className={classes.formStyle}>
        <img
          src={Logo}
          alt="company-logo"
          height="180px"
          className={classes.imgStyle}
        />
        <TextField
          id="input-with-icon-textfield"
          label="Username"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          id="input-with-icon-textfield"
          label="Password"
          type="password"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Lock />
              </InputAdornment>
            ),
          }}
        />
      </Paper>
    </div>
  );
};

export default Login;
