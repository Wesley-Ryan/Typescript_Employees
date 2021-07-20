import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  formStyle: {
    width: "95%",
    margin: "0 auto",
    marginTop: "50px",
    maxWidth: "560px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "5px 0 5px 0",
  },

  imgStyle: {
    margin: "0 auto",
  },

  emailInput: {
    fontSize: "15px",
    width: "60%",
    padding: "10px 10px 10px 5px",
    margin: "0 auto",
    marginTop: "20px",
    display: "block",
    outline: "none",
    border: "none",
    borderBottom: "1px solid #757575",
  },

  BtnGroup: {
    marginTop: "20px",
  },
  btnStyle: {
    width: "140px",
    height: "30px",
    margin: "15px",
  },

  send: {
    height: "30px",
    width: "140px",
    background: "#42b883",
    color: "#ffffff",
  },
});
const SetCode = ({ setIsErrors, setIsEmailSent, isEmailSent }) => {
  const classes = useStyles();
  const history = useHistory();
  const { handleSubmit, register, reset } = useForm({
    mode: "onBlur",
  });
  const onSubmit = (data) => {
    const ResetAcct = {
      pinpoint: data.rescue,
      password: data.password,
    };
    axios
      .post(
        "https://nexient-side.herokuapp.com/accounts/account/recovery/challenge",
        ResetAcct
      )
      .then((response) => {
        setIsEmailSent(true);
        setIsErrors(false);
      })
      .catch((error) => {
        if (error) {
          console.log(error);
          setIsErrors(true);
        }
      });
    reset({
      rescue: "",
      password: "",
    });
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className={classes.emailInput}
          type="text"
          placeholder="Rescue Code"
          {...register("rescue", { required: true })}
        />
        <input
          className={classes.emailInput}
          type="password"
          placeholder="New Password"
          {...register("password", {
            required: true,
          })}
        />

        <div className={classes.BtnGroup}>
          {isEmailSent ? (
            <Button
              className={classes.send}
              onClick={() => history.push("/")}
              variant="contained"
            >
              Login
            </Button>
          ) : (
            <Button className={classes.send} type="submit" variant="contained">
              Send
            </Button>
          )}
          <Button
            className={classes.btnStyle}
            variant="contained"
            onClick={() => history.push("/")}
          >
            Cancel
          </Button>
        </div>
      </form>
    </>
  );
};

export default SetCode;
