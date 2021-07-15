import { Route, Switch } from "react-router-dom";
import { ThemeProvider } from "@material-ui/styles";
import { createTheme } from "@material-ui/core";
import Login from "./pages /Login";
import Register from "./pages /Register";
import Dashboard from "./pages /Dashboard";

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
          <Route exact path="/dashboard/:id">
            <Dashboard />
          </Route>
        </Switch>
      </ThemeProvider>
    </div>
  );
}

export default App;
