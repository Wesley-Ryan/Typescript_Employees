import { Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Logo from "../assets/Logo.jpeg";
import { useState } from "react";
import SetCode from "./SetCode.js";
import SendEmailRescue from "./SendEmail.js";

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

  send: {
    height: "40px",
    width: "140px",
    background: "#42b883",
    color: "#ffffff",
  },
  isSuccess: {
    textAlign: "center",
    color: `#42b883`,
    fontWeight: "bold",
  },
  isError: {
    fontSize: "30px",
    color: "red",
    textAlign: "center",
  },
});

const RescueAccount: React.FC = () => {
  const [helpSent, setHelpSent] = useState(false);
  const [isErrors, setIsErrors] = useState(false);
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
        {helpSent ? (
          <>
            {isErrors && (
              <p className={classes.isError}>
                Error unable reset your password. Please check your code or
                contact support.
              </p>
            )}
            <p className={classes.isSuccess}>
              Success!! Please Login with your new password.
            </p>{" "}
            <SetCode setIsErrors={setIsErrors} setHelpSent={setHelpSent} />
          </>
        ) : (
          <>
            {isErrors && (
              <p className={classes.isError}>
                Error unable to find account. Please Sign up if you do not have
                a current account.
              </p>
            )}
            <p className={classes.isSuccess}>
              Success!! Please Check you email.
            </p>{" "}
            <SendEmailRescue
              setIsErrors={setIsErrors}
              setHelpSent={setHelpSent}
            />
          </>
        )}
      </Paper>
    </div>
  );
};
export default RescueAccount;
