import { Paper, TextField, Button } from "@material-ui/core";
import { useForm, Controller } from "react-hook-form";
import { useHistory } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import Logo from "../assets/Logo.jpeg";
import { Input } from "../components/Input";

const useStyles = makeStyles({
  formStyle: {
    width: "90%",
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
    width: "50%",
    alignSelf: "center",
    margin: "0 25px 30px 25px",
  },
  InputGrp: {
    display: "flex",
    margin: "0",
    width: "100%",
    padding: "3px",
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

const Register: React.FC = () => {
  const history = useHistory();
  const { handleSubmit, control, reset } = useForm();

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
          <div className={classes.InputGrp}>
            <Input
              name="first_name"
              control={control}
              label="First Name"
              message="First name cannot be blank."
              classStyle={classes.inputStyle}
            />
            <Input
              name="last_name"
              control={control}
              label="Last Name"
              message="Last name cannot be blank."
              classStyle={classes.inputStyle}
            />
          </div>
          <div className={classes.InputGrp}>
            <Controller
              name="email"
              control={control}
              defaultValue=""
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <TextField
                  className={classes.inputStyle}
                  id="input-with-icon-textfield"
                  label="Email"
                  value={value}
                  onChange={onChange}
                  error={!!error}
                  helperText={error ? error.message : null}
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

            <Input
              name="password"
              control={control}
              label="Password"
              message="Password cannot be blank."
              classStyle={classes.inputStyle}
            />
          </div>
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
              onClick={() =>
                reset({
                  first_name: "",
                  last_name: "",
                  email: "",
                  password: "",
                })
              }
            >
              Cancel
            </Button>
          </div>
        </form>
      </Paper>
    </div>
  );
};

export default Register;
