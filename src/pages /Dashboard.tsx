import { getEmployees } from "../utils/authenticatedAxios";
import { useQuery } from "react-query";

import { useState } from "react";
import {
  AppBar,
  CssBaseline,
  Drawer,
  Hidden,
  IconButton,
  Toolbar,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles, useTheme } from "@material-ui/core/styles";

import ProgressDisplay from "../components/ProgressDisplay";
import NavList from "../components/NavList";

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
      background: "#4a5680",
    },
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
    border: "2px solid red",
    margin: "60px 0 0 0 ",
  },
  centered: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    margin: "20px 0 0 0 ",
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
  const { data, isLoading } = useQuery("employees", getEmployees);
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <div className={classes.centered}>
        <ProgressDisplay val={75} />
        <p>Complete Your Profile</p>
      </div>

      <NavList />
    </div>
  );

  const container = window !== undefined ? () => document.body : undefined;

  if (isLoading) {
    return (
      <div>
        <h2>LOADING....</h2>
      </div>
    );
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          Employee name
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
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
        <ul>
          {data.data?.map((employee: Employee) => (
            <li key={employee.id}>{employee.first_name}</li>
          ))}
        </ul>
      </main>
    </div>
  );
};

export default Dashboard;
