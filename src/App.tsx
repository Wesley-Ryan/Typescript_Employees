import { Route, Switch } from "react-router-dom";
import { ThemeProvider } from "@material-ui/styles";
import { createTheme } from "@material-ui/core";
import PrivateRoute from "./utils/PrivateRoute";
import Login from "./pages /Login";
import Register from "./pages /Register";
import Dashboard from "./pages /Dashboard";
import AddNewEmployeeForm from "./pages /AddNewEmployeeForm";
import EditEmployeeForm from "./pages /EditEmployeeForm";
import Company from "./pages /Company";
import NoMatch from "./pages /NoMatch";
import RescueAccount from "./components/RescueAccount";
const theme = createTheme({
  typography: {
    fontFamily: "Lato, sans-serif",
  },
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route exact path="/signup">
            <Register />
          </Route>
          <PrivateRoute exact path="/dashboard/:id" component={Dashboard} />
          <PrivateRoute
            exact
            path="/admin/add-employee"
            component={AddNewEmployeeForm}
          />
          <PrivateRoute
            exact
            path="/dashboard/current/edit"
            component={EditEmployeeForm}
          />

          <Route exact path="/about">
            <Company />
          </Route>
          <Route exact path="/account/rescue">
            <RescueAccount />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </ThemeProvider>
    </div>
  );
}

export default App;
