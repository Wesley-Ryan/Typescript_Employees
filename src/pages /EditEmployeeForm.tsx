import { Paper, Button } from "@material-ui/core";
import { axiosAuth, getCurrentUser } from "../utils/authenticatedAxios";
import { useQuery } from "react-query";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Logo from "../assets/Logo.jpeg";

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
  avatar: {
    margin: "0 auto",
    borderRadius: "5px",
    height: "180px",
    width: "180px",
  },
  inputStyle: {
    width: "80%",
    fontSize: "15px",
    padding: "10px 10px 10px 5px",
    margin: "15px",
    display: "block",
    outline: "none",
    border: "none",
    borderBottom: "1px solid #757575",
  },
  avatarInput: {
    fontSize: "15px",
    width: "80%",
    padding: "10px 10px 10px 5px",
    margin: "0 auto",
    display: "block",
    outline: "none",
    border: "none",
    borderBottom: "1px solid #757575",
  },
  preview: {
    display: "flex",
    justifyContent: "flex-end",
    margin: "10px 30px 10px 10px",
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
    height: "50px",
  },

  save: {
    height: "50px",
    width: "140px",
    background: "#42b883",
    color: "#ffffff",
  },
});

const EditEmployeeForm: React.FC = () => {
  const { data: currentUser, isLoading } = useQuery(
    "currentUser",
    getCurrentUser
  );
  const [avatarImg, setAvatarImg] = useState(currentUser?.user.avatar);
  const history = useHistory();
  const { handleSubmit, reset, register, watch } = useForm({
    mode: "onBlur",
    defaultValues: {
      avatar: currentUser?.user.avatar,
      email: currentUser?.user.email,
      first_name: currentUser?.user.first_name,
      last_name: currentUser?.user.last_name,
      title: currentUser?.user.title,
      salary: currentUser?.user.salary,
    },
  });
  const classes = useStyles();
  const userAvatar = watch("avatar");
  const onSubmit = (data: {
    avatar: string;
    first_name: string;
    last_name: string;
    email: string;
    title: string;
    salary: string;
  }): void => {
    const Updated = {
      avatar: data.avatar,
      first_name: data.first_name,
      last_name: data.last_name,
      email: data.email,
      login_attempts: 0,
      title: data.title,
      salary: data.salary,
    };
    axiosAuth
      .put(
        `https://nexient-side.herokuapp.com/company/account/${currentUser.user.id}`,
        Updated
      )
      .then((response) => {
        history.push(`/dashboard/${currentUser.user.id}`);
      })
      .catch((error) => {
        console.log(error);
        history.push(`/dashboard/${currentUser.user.id}`);
      });

    reset({
      first_name: "",
      last_name: "",
      email: "",
      title: "",
      salary: "",
    });
  };

  const handlePreview = () => {
    if (userAvatar) {
      setAvatarImg(userAvatar);
    }
  };

  if (isLoading) {
    return <h2>Getting together your data.</h2>;
  }
  return (
    <div>
      <Paper elevation={3} className={classes.formStyle}>
        <img
          src={Logo}
          alt="company-logo"
          height="180px"
          className={classes.imgStyle}
        />
        <img
          src={avatarImg}
          alt="user-avatar"
          height="180px"
          className={classes.avatar}
        />

        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            className={classes.avatarInput}
            type="text"
            placeholder="Avatar Url"
            {...register("avatar", { required: true })}
          />
          <div className={classes.preview}>
            <Button
              variant="outlined"
              color="secondary"
              onClick={() => handlePreview()}
            >
              Preview
            </Button>
          </div>

          <input
            className={classes.emailInput}
            type="text"
            placeholder="Email"
            {...register("email", { required: true })}
          />

          <div className={classes.InputGrp}>
            <input
              className={classes.inputStyle}
              type="text"
              placeholder="First name"
              {...register("first_name", { required: true })}
            />
            <input
              className={classes.inputStyle}
              type="text"
              placeholder="Last name"
              {...register("last_name", { required: true })}
            />
          </div>
          <div className={classes.InputGrp}>
            <input
              className={classes.inputStyle}
              type="text"
              placeholder="Title"
              {...register("title")}
            />
            <input
              className={classes.inputStyle}
              type="text"
              placeholder="Salary"
              {...register("salary")}
            />
          </div>

          <div className={classes.BtnGroup}>
            <Button className={classes.save} type="submit" variant="contained">
              Save
            </Button>
            <Button
              className={classes.btnStyle}
              variant="contained"
              onClick={() => history.goBack()}
            >
              Cancel
            </Button>
          </div>
        </form>
      </Paper>
    </div>
  );
};
export default EditEmployeeForm;
