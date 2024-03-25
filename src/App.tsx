import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Login from "./Component/Login/Login";
import Dashboard from "./Component/Dashboard/Dashboard";
function App() {
  {/** Routes for the app */}
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>

    </Router>
  )
}

export default App;
