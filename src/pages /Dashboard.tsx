import { getEmployees, getCurrentUser } from "../utils/authenticatedAxios";
import { useQuery } from "react-query";
import { useState } from "react";
import {
  AppBar,
  CssBaseline,
  Drawer,
  Hidden,
  IconButton,
  Toolbar,
  Avatar,
  Button,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import ProgressDisplay from "../components/ProgressDisplay";
import NavList from "../components/NavList";
import EmployeeList from "../components/EmployeeList";
import DashboardHeader from "../components/DashboardHeader";

import Logo from "../assets/Logo.jpeg";
import { useHistory } from "react-router-dom";

const drawerWidth = 250;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
    background: "#ffffff",
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },

  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    width: "100%",
    margin: "60px 0 0 0 ",
  },
  centered: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    margin: "20px 0 0 0 ",
  },
  titleBar: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
  },
  row: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  button: {
    height: "40px",
    margin: "15px",
  },
}));

type Employee = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  login_attempts: number;
  avatar: string;
  role_name: string;
  department_name: string;
  title: string;
  salary: string;
  role: number;
  department: number;
  pinpoint: string;
  active: boolean;
};
const Dashboard: React.FC = () => {
  const history = useHistory();
  const { data, isLoading, isError } = useQuery("employees", getEmployees);
  const { data: currentUserInfo, isLoading: isLoadingCurrentUser } = useQuery(
    "currentUser",
    getCurrentUser
  );
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const logout = () => {
    localStorage.removeItem("MNTN_Corp");
    history.push("/");
  };

  const drawer = (
    <div>
      <div className={classes.centered}>
        <h2>Welcome Back!</h2>
        <div className={classes.row}>
          <Avatar src={currentUserInfo?.user.avatar} alt="user-avatar" />
          <p style={{ marginLeft: `5px` }}>
            {currentUserInfo?.user.first_name}
          </p>
        </div>
        <ProgressDisplay val={75} />
        <p>Complete Your Profile</p>
      </div>

      <NavList />
    </div>
  );

  const container = window !== undefined ? () => document.body : undefined;

  if (isLoadingCurrentUser || isLoading) {
    return (
      <div>
        <h2>LOADING....</h2>
      </div>
    );
  }
  if (isError) {
    return (
      <div>
        <h2>Error connecting to server. Please refresh or login again.</h2>
      </div>
    );
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            style={{ color: `black` }}
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <div className={classes.titleBar}>
            <img src={Logo} alt="Company Logo" height="80px" />
            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
              onClick={() => logout()}
            >
              Logout
            </Button>
          </div>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true,
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <DashboardHeader />
        <ul>
          {data.data?.map((employee: Employee) => {
            const success = {
              id: employee.id,
              first_name: employee.first_name,
              last_name: employee.last_name,
              email: employee.email,
              avatar: employee.avatar,
              role_name: employee.role_name,
              department: employee.department,
              department_name: employee.department_name,
              title: employee.title,
              active: employee.active,
            };

            return <EmployeeList employee={success} key={employee.id} />;
          })}
        </ul>
        {console.log(data)}
      </main>
    </div>
  );
};

export default Dashboard;
