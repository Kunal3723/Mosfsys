import Login from './components/Login';
import Dashboard from "./components/Dashboard";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useRouteMatch,
} from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route exact path="/" element={<Login/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
