import { Route, Switch } from "react-router-dom";
import { ThemeProvider } from "@material-ui/styles";
import { createTheme } from "@material-ui/core";
import PrivateRoute from "./utils/PrivateRoute";
import Login from "./pages /Login";
import Register from "./pages /Register";
import Dashboard from "./pages /Dashboard";
import AddNewEmployeeForm from "./pages /AddNewEmployeeForm";
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
        </Switch>
      </ThemeProvider>
    </div>
  );
}

export default App;
