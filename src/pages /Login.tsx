import { Paper, TextField, InputAdornment, Button } from "@material-ui/core";
import { useForm, Controller } from "react-hook-form";
import { useHistory } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import Logo from "../assets/Logo.jpeg";
import { AccountCircle, Lock } from "@material-ui/icons/";

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
  },
  btnStyle: {
    width: "140px",
  },
});
const Login: React.FC = () => {
  const history = useHistory();
  const { register, handleSubmit, control, reset } = useForm();

  const classes = useStyles();

  const onSubmit = (data: { email: string; password: string }): void => {
    console.log(data);
    reset({ email: "", password: "" });
  };

  return (
    <div>
      <Paper elevation={3} className={classes.formStyle}>
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
                      <AccountCircle />
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
                id="input-with-icon-textfield"
                label="Password"
                value={value}
                onChange={onChange}
                error={!!error}
                helperText={error ? error.message : null}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Lock />
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
              onClick={() => reset({ email: "", password: "" })}
            >
              Cancel
            </Button>
          </div>
        </form>
      </Paper>
    </div>
  );
};

export default Login;
