import { Route, Switch } from "react-router-dom";

import Login from "./pages /Login";
import Register from "./pages /Register";
import Dashboard from "./pages /Dashboard";
function App() {
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
