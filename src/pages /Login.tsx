import { Paper, TextField, InputAdornment, Button } from "@material-ui/core";
import { useForm, Controller } from "react-hook-form";
import { useHistory, Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Logo from "../assets/Logo.jpeg";
import { AccountCircle, Lock } from "@material-ui/icons/";
import axios from "axios";

const useStyles = makeStyles({
  formStyle: {
    width: "80%",
    maxWidth: "350px",
    height: "460px",
    margin: " 0 auto",
    marginTop: "100px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  imgStyle: {
    margin: "0 auto",
  },
  inputStyle: {
    width: "80%",
    alignSelf: "center",
    margin: "0 25px 30px 25px",
  },
  BtnGroup: {
    width: "100%",
    display: "flex",
    justifyContent: "space-around",
    marginBottom: "25px",
  },
  btnStyle: {
    width: "120px",
    height: "35px",
  },
  icon: {
    color: "#bfbfbf",
  },

  modal: {
    width: "100%",
    border: "1px solid red",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  demo: {
    height: "30px",
    margin: "15px",
    alignSelf: "flex-end",
    background: "#33A5FF",
    color: `#ffffff`,
  },
});

const Login: React.FC = () => {
  const history = useHistory();
  const { handleSubmit, control, reset } = useForm();
  const classes = useStyles();

  const onSubmit = (data: { email: string; password: string }): void => {
    axios
      .post("https://nexient-side.herokuapp.com/accounts/login", data)
      .then((response) => {
        localStorage.setItem("MNTN_Corp", response.data.token);
        history.push(`/dashboard/${response.data.id}`);
      })
      .catch((error) => {
        console.log(error.message);
      });
    reset({ email: "", password: "" });
  };

  const loginDemo = () => {
    const demoAccount = {
      email: "demo@mntnouterwear.com",
      password: "P@ssword1",
    };
    axios
      .post("https://nexient-side.herokuapp.com/accounts/login", demoAccount)
      .then((response) => {
        localStorage.setItem("MNTN_Corp", response.data.token);
        history.push(`/dashboard/${response.data.id}`);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div>
      <Paper elevation={3} className={classes.formStyle}>
        <Button
          className={classes.demo}
          variant="contained"
          onClick={() => loginDemo()}
        >
          Demo Login
        </Button>
        <img
          src={Logo}
          alt="company-logo"
          height="180px"
          className={classes.imgStyle}
        />
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="email"
            control={control}
            defaultValue=""
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <TextField
                className={classes.inputStyle}
                id="input-with-icon-textfield"
                label="Email"
                value={value}
                onChange={onChange}
                error={!!error}
                helperText={error ? error.message : null}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccountCircle className={classes.icon} />
                    </InputAdornment>
                  ),
                }}
              />
            )}
            rules={{
              required: "A valid email address is required.",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: "Invalid email address",
              },
            }}
          />
          <Controller
            name="password"
            control={control}
            defaultValue=""
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <TextField
                type="password"
                className={classes.inputStyle}
                id="input-with-icon"
                label="Password"
                value={value}
                onChange={onChange}
                error={!!error}
                helperText={error ? error.message : null}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Lock className={classes.icon} />
                    </InputAdornment>
                  ),
                }}
              />
            )}
            rules={{ required: "Password cannot be blank." }}
          />
          <div className={classes.BtnGroup}>
            <Button
              className={classes.btnStyle}
              type="submit"
              variant="contained"
            >
              Login
            </Button>
            <Button
              className={classes.btnStyle}
              variant="contained"
              onClick={() => history.push("/signup")}
            >
              Register
            </Button>
          </div>
        </form>

        <Link to="/account/rescue" style={{ margin: "10px" }}>
          Forgot Password?
        </Link>
      </Paper>
    </div>
  );
};

export default Login;
