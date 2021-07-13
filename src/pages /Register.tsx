import {
  Paper,
  TextField,
  Button,
  RadioGroup,
  Radio,
  FormControlLabel,
} from "@material-ui/core";
import { useForm, Controller } from "react-hook-form";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import Logo from "../assets/Logo.jpeg";
import { Input } from "../components/Input";

const useStyles = makeStyles({
  formStyle: {
    width: "90%",
    maxWidth: "560px",
    margin: " 0 auto",
    marginTop: "20px",
    marginBottom: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "5px 0 5px 0",
  },
  imgStyle: {
    margin: "0 auto",
  },
  inputStyle: {
    alignSelf: "center",
    margin: "0 25px 30px 25px",
  },
  InputGrp: {
    display: "flex",
    alignItems: "center",
    width: "98%",
    margin: "0 auto",
  },
  BtnGroup: {
    width: "100%",
    display: "flex",
    justifyContent: "space-around",
    marginBottom: "25px",
  },
  btnStyle: {
    width: "140px",
  },
  radio: {
    display: "flex",
    flexDirection: "column",
    margin: "0 20px 0 20px",
  },
  radioColor: {
    "&$checked": {
      color: "#548d6c",
    },
  },
  checked: {},
});

const Register: React.FC = () => {
  const history = useHistory();
  const { handleSubmit, control, reset } = useForm();
  const classes = useStyles();

  const onSubmit = (data: {
    first_name: string;
    last_name: string;
    email: string;
    password: string;
    department: string;
  }): void => {
    const dept = data.department.split(" ");
    const newUser = {
      avatar:
        "https://ik.imagekit.io/WesleyRyan/social_preview/avatar_8kCbbtDiP.jpeg",
      first_name: data.first_name,
      last_name: data.last_name,
      email: data.email,
      password: data.password,
      login_attempts: 0,
      title: "",
      salary: "",
      role: 3893,
      role_name: "Team Member",
      department_name: dept[1],
      department: parseInt(dept[0]),
      pinpoint: "",
      active: true,
    };

    axios
      .post("https://nexient-side.herokuapp.com/accounts/signup", newUser)
      .then((response) => {
        console.log(response.data);
        history.push("/");
      })
      .catch((error) => {
        console.log(error);
      });
    reset({
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      department: "200 Operations",
    });
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

          <Controller
            rules={{ required: true }}
            control={control}
            defaultValue="200 Operations"
            name="department"
            render={({
              field: { onBlur, onChange, value },
              fieldState: { error },
            }) => (
              <RadioGroup
                value={value}
                onBlur={onBlur}
                onChange={(e) => {
                  onChange(e);
                }}
              >
                <div className={classes.BtnGroup}>
                  <div className={classes.radio}>
                    <FormControlLabel
                      value="200 Operations"
                      control={
                        <Radio
                          classes={{
                            root: classes.radioColor,
                            checked: classes.checked,
                          }}
                        />
                      }
                      label="Operations"
                    />
                    <FormControlLabel
                      value="300 Sales"
                      control={
                        <Radio
                          classes={{
                            root: classes.radioColor,
                            checked: classes.checked,
                          }}
                        />
                      }
                      label="Sales"
                    />
                  </div>
                  <div className={classes.radio}>
                    <FormControlLabel
                      value="400 IT"
                      control={
                        <Radio
                          classes={{
                            root: classes.radioColor,
                            checked: classes.checked,
                          }}
                        />
                      }
                      label="IT"
                    />
                    <FormControlLabel
                      value="100 Engineering"
                      control={
                        <Radio
                          classes={{
                            root: classes.radioColor,
                            checked: classes.checked,
                          }}
                        />
                      }
                      label="Engineering"
                    />
                  </div>
                </div>
              </RadioGroup>
            )}
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
