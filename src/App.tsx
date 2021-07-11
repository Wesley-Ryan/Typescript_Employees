import Login from "./pages /Login";
import Register from "./pages /Register";

function App() {
  const hide = false;
  return (
    <div className="App">
      <header className="App-header">App</header>
      {hide && <Login />}
      <Register />
    </div>
  );
}

export default App;
